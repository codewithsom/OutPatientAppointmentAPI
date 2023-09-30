const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');
const Doctor = require('../models/doctor');

router.post('/book', async (req, res) => {
  const { doctorId, patientName, appointmentTime } = req.body;

  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      res.status(404).json({ message: 'Doctor not found' });
      return;
    }

    const appointment = new Appointment({ doctorId, patientName, appointmentTime });
    await appointment.save();

    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
