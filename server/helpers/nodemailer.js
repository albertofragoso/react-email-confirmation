const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS}
})

exports.SendEmail = async (to, id) => {
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to,
    subject: '⚛ React mailer.',
    html: styleEmail(id),
    text: `Copy and paste this link: ${process.env.ORIGIN}/confirm/${id}`
  })
}

const styleEmail = id => `
  <a href="${procces.env.ORIGIN}/confirm/${id}">
    Click to confirm email
  </a>
  `