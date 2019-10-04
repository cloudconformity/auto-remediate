"use strict";

const CONFIG = require("./config");
const utils = require("./Utils");
const AWS = require("aws-sdk");
const Lambda = new AWS.Lambda({ apiVersion: "2015-03-31" });

module.exports.handler = async event => {
  console.log("Received event: ", JSON.stringify(event, null, 2));
  console.log("Config settings: ", JSON.stringify(CONFIG, null, 2));
  console.log("is email sending enabled: ", process.env.SEND_EMAIL);
  console.log("S3 Bucket configured: ", process.env.LOGS_BUCKET);
  console.log("Region of service configured: ", process.env.REGION_OF_SERVICE);

  if (!event || !event.Records[0] || !event.Records[0].Sns || !event.Records[0].Sns.Message) {
    throw new Error("No event specified");
  }

  const message = JSON.parse(event.Records[0].Sns.Message);
  const AutoRemediate = "AutoRemediate" + message.ruleId;

  if (!CONFIG[AutoRemediate]) {
    console.log("The %s is not supported. Exiting gracefully ...", AutoRemediate);
    return;
  }

  if (!CONFIG[AutoRemediate]["enabled"]) {
    console.log("The %s is not enabled. Exiting gracefully ...", AutoRemediate);
    return;
  }

  let FunctionName =
    process.env["AWS_LAMBDA_FUNCTION_NAME"].substring(
      0,
      process.env["AWS_LAMBDA_FUNCTION_NAME"].lastIndexOf("-") + 1
    ) + AutoRemediate;

  console.log(`Invoking ${FunctionName} ...`);

  const Payload = JSON.stringify(message, null, 2);

  let result;
  try {
    result = await Lambda.invoke({
      FunctionName,
      Payload
    }).promise();
  } catch (error) {
    console.log("Error occurred while invoking", FunctionName);
    console.log(error);
    await utils.handleError(FunctionName, message, error);
    throw error;
  }

  if (!result.Payload.includes("Success")) {
    await utils.handleError(FunctionName, message, result);
    throw result.payload;
  }

  await utils.handleSuccess(FunctionName, message, result);

  console.log(
    "Successfully invoked %s with result %s",
    FunctionName,
    JSON.stringify(result, null, 2)
  );
  return "done";
};
