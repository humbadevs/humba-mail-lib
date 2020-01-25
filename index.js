const sgMail = require('@sendgrid/mail');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const MAIL_FROM = "noreply@hu.mba"

const sendVerificationMail = (name, email, url) => {
  sgMail.send({
    to: email,
    from: MAIL_FROM,
    templateId: 'd-7a80067be93249169be7b2519336245c',
    dynamic_template_data: {
      name: name,
      verify: {
        url: url
      }
    }
  });
}

const ping = (foo, bar) => {
  console.log(foo, bar);
}

const sendPlainMail = (name, email, subject, text) => {
  sgMail.send({
    to: email,
    from: MAIL_FROM,
    subject: subject,
    text: text
  });
}

exports.sendVerificationMail = sendVerificationMail;
exports.sendPlainMail = sendPlainMail;
