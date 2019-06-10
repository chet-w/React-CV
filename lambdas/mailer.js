const mg = require("nodemailer-mailgun-transport");
const nodemailer = require("nodemailer");

const sendVerification = async function ({ name, email, message }) {
    const auth = {
        auth: {
            api_key: MAILGUN_KEY,
            domain: MAILGUN_API
        }
    };
    const nodemailerMailgun = nodemailer.createTransport(mg(auth));
    nodemailerMailgun.sendMail({
        from: 'contact@chet-w.com',
        to: email,
        subject: `New enquiry at chet-w.com`,
        html: ``
    }, (err, info) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        else {
            console.log(`Response: ${info}`);
        }
    });
}