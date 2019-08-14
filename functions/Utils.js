const AWS = require('aws-sdk');
const S3 = new AWS.S3();
const nodemailer = require("nodemailer");

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

	const handleError = async (FunctionName, message, error) => {
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
