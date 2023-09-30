const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorId: mongoose.Schema.Types.ObjectId,
  patientName: String,
  appointmentTime: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
