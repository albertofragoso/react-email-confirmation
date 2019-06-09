const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS}
})

exports.SendEmail = async (to, content) => {
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to,
    subject: '⚛ React mailer.',
    content
  })
}