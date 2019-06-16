
const sendEmail = function (target, callback) {

    const nodemailer = require("nodemailer");
    const smtpTransport = require('nodemailer-smtp-transport');

    const MAILGUN_PASS = require("../config").MAILGUN_PASS || NET_MAILGUN_PASS;
    const MAILGUN_USER = require("../config").MAILGUN_USER || NET_MAILGUN_USER;

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
        text: text
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

module.exports = sendEmail;
