const mg = require("nodemailer-mailgun-transport");
// const nodemailer = require("nodemailer");

// const MAILGUN_API = require("../config").MAILGUN_API;
// const MAILGUN_KEY = require("../config").MAILGUN_KEY;

// const sendMail = async function (email) {
//     const auth = {
//         auth: {
//             api_key: MAILGUN_KEY,
//             domain: MAILGUN_API
//         }
//     };
//     const nodemailerMailgun = nodemailer.createTransport(mg(auth));
//     nodemailerMailgun.sendMail({
//         from: 'contact@chet-w.com',
//         to: email,
//         subject: `New enquiry at chet-w.com`,
//         html: ``
//     }, (err, info) => {
//         if (err) {
//             console.log(`Error: ${err}`);
//         }
//         else {
//             console.log(`Response: ${info}`);
//         }
//     });
// };
console.log("hello")

module.exports = sendMail;