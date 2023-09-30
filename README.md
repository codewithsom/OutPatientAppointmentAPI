# OutPatientAppointmentAPI

![Node.js](https://img.shields.io/badge/Node.js-14.17.6-green)
![Express](https://img.shields.io/badge/Express-4.17.1-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-4.4.6-brightgreen)

A Node.js and Express API for managing out-patient appointments with MongoDB integration. This API allows doctors to list their weekly schedules, patients to book appointments, and provides details about doctors' practice.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- List available doctors and their specializations.
- View doctor details, including their weekly schedule and available appointment slots.
- Book appointments with doctors based on their availability.
- MongoDB integration for data storage.
- Express middleware for routing and handling HTTP requests.
- Easily extendable for additional features and enhancements.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.17.6 or higher) installed.
- MongoDB server (v4.4.6 or higher) running or a valid MongoDB connection URI.
- Postman or a similar tool for testing API endpoints.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/OutPatientAppointmentAPI.git
   cd OutPatientAppointmentAPI
   
2. Install the project dependencies:
   npm install

3. Create a .env file in the project root directory and add your MongoDB connection URI and a custom port:
   MONGODB_URI=your-mongodb-uri
   PORT=your-port

4. Start the Node.js server:
    node server.js

Usage
API Endpoints
List Doctors: Get a list of all available doctors.

Endpoint: GET /api/doctors
Doctor Detail: Get detailed information about a specific doctor.

Endpoint: GET /api/doctors/:doctorId
Book Appointment: Book an appointment with a doctor.

Endpoint: POST /api/appointments/book
Request Body (JSON):
{
  "doctorId": "doctor-id",
  "patientName": "Patient Name",
  "appointmentTime": "2023-10-15T10:30:00Z"
}

Contributing
Contributions are welcome! If you have ideas, bug reports, or feature requests, please open an issue or create a pull request.

