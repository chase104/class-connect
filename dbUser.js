const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
  email: String,
  studentName: String,
  parentName: String,
  accountStatus: String,
  dateJoined: String
})

module.exports = mongoose.model('account', userSchema)
