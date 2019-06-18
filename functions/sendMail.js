// const sendEmail = require("../lambdas/mailer");

exports.handler = function (event, context, callback) {

  // send mail here
  sendEmail(event.body, callback);
}

const sendEmail = function (body, callback) {

  const nodemailer = require("nodemailer");
  const smtpTransport = require('nodemailer-smtp-transport');

  const parsed = JSON.parse(body);

  const { name, email, message } = parsed;

  // Local configs
  // const MAILGUN_PASS = require("../config").MAILGUN_PASS
  // const MAILGUN_USER = require("../config").MAILGUN_USER
  
  // Prod configs
  const MAILGUN_PASS = process.env.NET_MAILGUN_PASS;
  const MAILGUN_USER = process.env.NET_MAILGUN_USER;

  const transporter = nodemailer.createTransport(smtpTransport({
      service: "Mailgun",
      auth: {
          user: MAILGUN_USER,
          pass: MAILGUN_PASS
      }
  }));

  var text = 'Email body goes here';
  //
  var mailOptions = {
      from: 'enquiries@chet-w.com',
      to: "chethana96@gmail.com",
      subject: 'New enquiry from Chet-w.com',
      text: `
      Hi Chet,
      
      You just got a new message on your website from ${name}. This was their message:

      ${message}.

      To here's the contact email they gave us: ${email}.

      Best wishes,
      Virtual Chet

      `
  };

  transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
          const response = {
            statusCode: 500,
            body: JSON.stringify({
              error: error.message,
            }),
          };
          console.log(error);
          callback(null, response);
      } else {
          console.log("Done!");
          const response = {
              statusCode: 200,
              body: JSON.stringify({
                message: `Email processed succesfully!`
              }),
            };
            callback(null, response);
      }
  });

};