const mongoose = require('mongoose')


const consultationSchema = mongoose.Schema({
  email: String,
  message: String,
  date: String,
})

module.exports = mongoose.model('consultation', consultationSchema)
