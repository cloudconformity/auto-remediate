"use strict";

//CloudTrailEnabled
module.exports.handler = (event, context, callback) => {

	console.log('CloudTrail Enabled - Received event:', JSON.stringify(event, null, 2));

	callback(null, "Success");

};
