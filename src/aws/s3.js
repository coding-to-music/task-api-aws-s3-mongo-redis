const aws = require("aws-sdk");
aws.config.update({
  accessKeyId: process.env.APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.APP_AWS_SECRET_ACCESS_KEY,
});
const s3 = new aws.S3({ params: { Bucket: process.env.APP_AWS_S3_BUCKET } });

module.exports = s3;
