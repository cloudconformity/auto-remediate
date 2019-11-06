'use strict'

const AWS = require('aws-sdk')
const CONFIG = require('./config')['AutoRemediateCT-012']

/**
* Lambda function to automatically remediate CloudTrail not Global
*/
module.exports.handler = (event, context, callback) => {
    console.log("CloudTrail configured to log data events - Received event: ", JSON.stringify(event, null, 2))
    if (!event || !event.region || event.ruleId !== 'CT-012') {
        return handleError('Invalid event')
    }

    console.log("No-OP work.")
    return(callback(null))
}
