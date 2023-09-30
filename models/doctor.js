const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  capacity: Number,
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
