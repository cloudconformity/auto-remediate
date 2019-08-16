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

		// // send mail with defined transport object
		// let info = await transporter.sendMail({
		// 	from: '"Fred Foo 👻" <foo@example.com>', // sender address
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

	const getCheckDetails = async (ccCheckId) => {

		let params = {
		  Name: 'CLOUDCONFORMITY_API_KEY', /* required */
		  WithDecryption: true
		};

		const CLOUDCONFORMITY_API_KEY = await SSM.getParameter(params, function(err, data) {
		    if (err) console.log(err, err.stack); // an error occurred
		    else {
				console.log(data);
				return data;           // successful response
		    }
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
			try {
				const response = await fetch(url, options);
				const json = await response.json();
				console.log(json);
				return json;
			} catch (error) {
				console.log(error);
				return error;
			}
		}

		return getData(url);
	};


	const handleError = async (FunctionName, message, error) => {

		let checkDetails;

		if (process.env.REGION_OF_SERVICE && process.env.LOGS_BUCKET || process.env.SEND_EMAIL) {
			checkDetails = await getCheckDetails(message.id)
		}

		console.log(this);
		console.log(message, error);

		let dynamicEmail;

		if (checkDetails.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)) {
			dynamicEmail = checkDetails.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
		}

		if (dynamicEmail && process.env.SEND_EMAIL) {
			console.log("sending email to:", dynamicEmail);
			await sendEmail(dynamicEmail, "Error autoremediating", {
				message,
				FunctionName,
				error
			});
		}

		if (process.env.LOGS_BUCKET) {
			await logToS3(FunctionName, message, null, error);
		}

		console.log(this);
		console.log(message, error);

		if (process.env.SEND_EMAIL) {
			await sendEmail("test@test.com", "Error autoremediating", {
				message,
				FunctionName,
				error
			});
		}
		return Promise.resolve();
	};

	const handleSuccess = async (FunctionName, message, result) => {

		let checkDetails;

		if (process.env.REGION_OF_SERVICE && process.env.LOGS_BUCKET || process.env.SEND_EMAIL) {
			checkDetails = await getCheckDetails(message.id)
		}

		console.log(this);
		console.log(message, error);

		let dynamicEmail;

		if (checkDetails.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);) {
			dynamicEmail = checkDetails.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
		}

		if (dynamicEmail && process.env.SEND_EMAIL) {
			console.log("sending email to:", dynamicEmail);
			await sendEmail(dynamicEmail, "Autoremediation successfull", {
				message,
				FunctionName,
				error
			});
		}

		if (process.env.LOGS_BUCKET) {
			await logToS3(FunctionName, message, result);
		}
		if (process.env.SEND_EMAIL) {

			await sendEmail("test@test.com", "Autoremediation successfull", {
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
		handleSuccess
	};
})();
