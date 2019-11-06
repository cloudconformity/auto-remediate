"use strict";

const CONFIG = require("./config");
const utils = require("./Utils");
const AWS = require("aws-sdk");
const Lambda = new AWS.Lambda({ apiVersion: "2015-03-31" });

module.exports.handler = async event => {
  console.log("Received event: ", JSON.stringify(event, null, 2));
  console.log("Config settings: ", JSON.stringify(CONFIG, null, 2));
  console.log("Cloud Conformity Account ID: ", process.env.CC_ACCOUNT_ID);

  let rules = [];

  rules = Object.keys(CONFIG).reduce((rulesList, ruleName, index) => {
	  if (CONFIG[ruleName].enabled) {

	    const ruleId = ruleName.replace('AutoRemediate', '');
	    if (index === 0) {
			return ruleId;
		}
	    return `${rulesList},${ruleId}`;
  	}

  	return rulesList;
}, '');

  console.log("rules");
  console.log(rules);

  let rulesFilter = "?accountIds=" + process.env.CC_ACCOUNT_ID + "&filter[ruleIds]=" + rules + "&filter[statuses]=FAILURE";
  console.log("my filter");
  console.log(rulesFilter);

  let checks;

  try {

    checks = await utils.getRecentlyModifiedChecks(rulesFilter);

  } catch (error) {
    console.log("Error occurred while fetching recently modified checks");
    console.log(error);
    throw error;
}


  console.log(
    JSON.stringify(result, null, 2)
  );
  return "done";
};
