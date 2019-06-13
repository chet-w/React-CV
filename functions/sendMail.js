const sendEmail = require("../lambdas/mailer");

exports.handler = function (event, context, callback) {

  // send mail here
  sendEmail();

  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
}