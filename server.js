const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const doctorRoutes = require('./routes/doctors');
const appointmentRoutes = require('./routes/appointments');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 7000;

app.use(bodyParser.json());

// Connect to MongoDB 
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Doctor and Appointment routes
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
