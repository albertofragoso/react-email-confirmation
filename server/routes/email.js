const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { sendEmail } = require('../helpers/nodemailer')
const template = require('../helpers/template')

router.get('/', (req, res, next) => {
  const { email } = req.body
  User.find({ email })
    .then(user => {
      if(!user) {
        User.create({ email })
          .then(newUser => sendEmail(newUser.email, template.confirm(newUser._id)))
          .then(() => res.json({ msg: 'Email sent, please check your inbox to confirm.' }))
          .catch(err => console.log(err))
      } else if(user && !user.confirmed) {
        sendEmail(user.email, template.confirm(user._id))
          .then(() => res.json({ msg: 'Confirmation email resent, maybe check your spam?' }))
      } else {
        res.json({ msg: 'Your email was already confirmed.' })
      }
    })
    .catch(err => console.log(err))

})
router.get('/confirm/:id', (req, res, next) => {
  const { id } = req.params
  User.findById(id)
    .then(user => {
      if(!user) res.json({ msg: 'Could not find you.' })
      else if(user && !user.confirmed) {
        User.findByIdAndUpdate(id, { confirmed: true })
          .then(() => res.json({ msg: 'Your has been confformed.' }))
          .catch(err => console.log(err))
      }
      else {
        res.json({ msg: 'Your emial was already confirm.' }) 
      }
    })
    .catch(err => console.log(err))
})

module.exports = router