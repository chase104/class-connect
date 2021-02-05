const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
  email: String,
  applicationData: Array,
  submitDate: Date,
  studentName: String,
  applicationStatus: String
})

module.exports = mongoose.model('application', userSchema)
