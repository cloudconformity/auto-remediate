const AWS=require('aws-sdk')
var s3=new AWS.S3({region: "ap-southeast-2"})

s3.getBucketAcl({Bucket: "test.datablaize.io"}).promise().then(JSON.stringify).then(console.log)