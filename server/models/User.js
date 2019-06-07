const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1
  },
  confirmed: {
    type: Boolean,
    default: false
  }
},
{
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('User', userSchema)