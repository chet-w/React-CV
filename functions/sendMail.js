const sendEmail = require("../lambdas/mailer");

exports.handler = function (event, context, callback) {

  // send mail here
  sendEmail("chethana96@gmail.com");

  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
}