// routes/doctors.js
const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');

// Get list of doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:doctorId', async (req, res) => {
  const doctorId = req.params.doctorId;

  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      res.status(404).json({ message: 'Doctor not found' });
    } else {
      res.json(doctor);
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
