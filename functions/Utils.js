const AWS = require('aws-sdk');
const S3 = new AWS.S3();
const nodemailer = require("nodemailer");
const SSM = new AWS.SSM();
const fetch = require('node-fetch');

module.exports = (() => {

	const logToS3 = (FunctionName, message, result, error) => {
		const log = {
			message,
			functionName: FunctionName,
			result,
			error,
			time: Date.now()
		}

		const params = {
			Bucket: process.env.LOGS_BUCKET,
			Key: `${message.accountId}/${Date.now()}.json`,
			Body: JSON.stringify(log, null, 2)
		};

		return S3.putObject(params).promise();
	};

	const sendEmail = (email, subject, message) => {
		return Promise.resolve();
		// let transporter = nodemailer.createTransport({
		// 	host: "smtp.ethereal.email",
		// 	port: 587,
		// 	secure: false, // true for 465, false for other ports
		// 	auth: {
		// 		user: process.env.user, // generated ethereal user
		// 		pass: process.env.pass // generated ethereal password
		// 	}
		// });
		//
		// // send mail with defined transport object
		// let info = await transporter.sendMail({
			// from: '"Fred Foo 👻" <foo@example.com>', // sender address
		// 	to: "bar@example.com, baz@example.com", // list of receivers
		// 	subject: "Hello ✔", // Subject line
		// 	text: "Hello world?", // plain text body
		// 	html: "<b>Hello world?</b>" // html body
		// });
	};

  /**
   * <b>Returns AWS Account ID whose credentials are used to call the API</b>
   *
   */
	const getAccountId = () => {
		let STS = new AWS.STS({apiVersion: '2011-06-15'})

		return STS.getCallerIdentity({}).promise().then(function (data) {
			return data.Account
		})
	};

	const getRecentlyModifiedChecks = async (rulesFilter) => {

		let params = {
		  Name: 'CLOUDCONFORMITY_API_KEY', /* required */
		  WithDecryption: true
		};

		const CLOUDCONFORMITY_API_KEY = await SSM.getParameter(params).promise().then(function(data) {

			console.log("Successfully got SSM data");
			return data.Parameter.Value;           // successful response

	  	}).catch((err) => {
			console.log(err, err.stack); // an error occurred
		});


		let url = "https://"+ process.env.REGION_OF_SERVICE + "-api.cloudconformity.com/v1/checks/" + rulesFilter;
		let options = {
			method: 'GET',
			headers: {
				"Content-Type": "application/vnd.api+json",
				"Authorization": "ApiKey " + CLOUDCONFORMITY_API_KEY
			}
		}

		const getData = async url => {
			console.log("my url", url);
			console.log("my options", options);
			try {
				const response = await fetch(url, options);
				const json = await response.json();
				console.log("Got a response from CC Check API", json);
				return json;
			} catch (error) {
				console.log("Got an error from CC Check API", error);
				return error;
			}
		}

		return getData(url).then(checks =>{

			console.log(JSON.stringify(checks));

			const FOUR_HOURS = 1000*60*60*4;
			const timestamp = Date.now();
			const since = timestamp - FOUR_HOURS;

			const recentChecks = checks.data.filter(check => {
			  return check.attributes['last-modified-date'] > since
			})

			return recentChecks.map(recentCheck => {
			  const message = {
			    id: recentCheck.id,
			    ...recentCheck.attributes
			  };


			  return {
			    Records: [
			      {
			        Sns: {
			          Message: JSON.stringify(message)
			        },
			      },
			    ],
			  };
			});

		})
	};

	const getCheckDetails = async (ccCheckId) => {

		let params = {
		  Name: 'CLOUDCONFORMITY_API_KEY', /* required */
		  WithDecryption: true
		};

		const CLOUDCONFORMITY_API_KEY = await SSM.getParameter(params).promise().then(function(data) {

			console.log("Successfully got SSM data", data);
			return data.Parameter.Value;           // successful response

	  	}).catch((err) => {
			console.log(err, err.stack); // an error occurred
		});


		let url = "https://"+ process.env.REGION_OF_SERVICE + "-api.cloudconformity.com/v1/checks/" + ccCheckId;
		let options = {
			method: 'GET',
			headers: {
				"Content-Type": "application/vnd.api+json",
				"Authorization": "ApiKey " + CLOUDCONFORMITY_API_KEY
			}
		}

		const getData = async url => {
			console.log("my url", url);
			console.log("my options", options);
			try {
				const response = await fetch(url, options);
				const json = await response.json();
				console.log("Got a response from CC Check API", json);
				return json;
			} catch (error) {
				console.log("Got an error from CC Check API", error);
				return error;
			}
		}

		return getData(url);
	};

	const getDynamicEmail = async (message) => {

		let dynamicEmail;
		let checkDetails;

		if (process.env.REGION_OF_SERVICE) {
			checkDetails = await getCheckDetails(message.id);
			message.checkDetails = checkDetails;
		}

		console.log("Stringifying");
		let stringifiedMessage = JSON.stringify(message);
		console.log("matching...");
		if (stringifiedMessage.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)) {
			dynamicEmail = stringifiedMessage.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
			console.log("email(s) found:", dynamicEmail);
		}

		return {dynamicEmail, message};
	};

	const handleError = async (FunctionName, message, error) => {

		let getDynamicEmailResponse = await getDynamicEmail(message);

		let dynamicEmail = getDynamicEmailResponse.dynamicEmail;
		message = getDynamicEmailResponse.message;

		if (dynamicEmail[0] && process.env.SEND_EMAIL) {
			let emails = dynamicEmail.join(", ");
			console.log("sending email to:", emails);
			await sendEmail(emails, "Error autoremediating", {
				message,
				FunctionName,
				error
			});
		}

		if (process.env.LOGS_BUCKET) {
			await logToS3(FunctionName, message, null, error);
		}

		if (process.env.SEND_EMAIL && process.env.ADMIN_EMAIL) {
			await sendEmail(process.env.ADMIN_EMAIL, "Error autoremediating", {
				message,
				FunctionName,
				error
			});
		}
		return Promise.resolve();
	};

	const handleSuccess = async (FunctionName, message, result) => {

		let getDynamicEmailResponse = await getDynamicEmail(message);

		let dynamicEmail = getDynamicEmailResponse.dynamicEmail;
		message = getDynamicEmailResponse.message;

		if (dynamicEmail[0] && process.env.SEND_EMAIL) {
			let emails = dynamicEmail.join(", ");
			console.log("sending email to:", emails);
			await sendEmail(emails, "Autoremediation successful", {
				message,
				FunctionName,
				error
			});
		}

		if (process.env.LOGS_BUCKET) {
			await logToS3(FunctionName, message, result);
		}

		if (process.env.SEND_EMAIL && process.env.ADMIN_EMAIL) {
			await sendEmail(process.env.ADMIN_EMAIL, "Autoremediation successful", {
				message,
				FunctionName,
				result
			});
		}
		return Promise.resolve();
	};



	return {
		getAccountId,
		handleError,
		handleSuccess,
		getRecentlyModifiedChecks
	};
})();
