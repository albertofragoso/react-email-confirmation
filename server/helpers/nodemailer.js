require('dotenv').config()

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS}
})

exports.sendEmail = (to, id) => {
  return transporter
    .sendMail({
      from: '"📬 React Mailer" <hola@reactmailer.com>',
      to,
      subject: 'React mailer.',
      html: styleEmail(id),
      text: `Copy and paste this link: ${process.env.ORIGIN}/confirm/${id}`
    })
    .then(response => console.log(response))
    .catch(err => console.log(err))
}

const styleEmail = id => `
  <a href="${process.env.ORIGIN}/confirm/${id}">
    Click to confirm email.
  </a>
`