# OutPatientAppointmentAPI

![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=black)
![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/VS_Code-%23007ACC.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-%23FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white)

A Node.js and Express API for managing out-patient appointments with MongoDB integration. This API allows doctors to list their weekly schedules, patients to book appointments, and provides details about doctors' practice.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

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

- Node.js (LATEST_VERSION) installed.
- MongoDB server (LATEST_VERSION) running or a valid MongoDB connection URI.
- Postman or a similar tool for testing API endpoints.
- Visual Studio Code (VS Code) for development.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/OutPatientAppointmentAPI.git
   cd OutPatientAppointmentAPI

2. Install the project dependencies:

    ```bash
    npm install

3. Create a .env file in the project root directory and add your MongoDB connection URI and a custom port:

    ```env
    MONGODB_URI=your-mongodb-uri
    PORT=your-port

4. Start the Node.js server:

    ```bash
    node server.js

  Now, your project is set up and ready to run.

  ## Usage

### API Endpoints

- **List Doctors**: Get a list of all available doctors.

  - **Endpoint**: `GET /api/doctors`

- **Doctor Detail**: Get detailed information about a specific doctor.

  - **Endpoint**: `GET /api/doctors/:doctorId`

- **Book Appointment**: Book an appointment with a doctor.

  - **Endpoint**: `POST /api/appointments/book`

  - **Request Body (JSON)**:

    ```json
    {
      "doctorId": "doctor-id",
      "patientName": "Patient Name",
      "appointmentTime": "2023-10-15T10:30:00Z"
    }
    ```

You can use these API endpoints to interact with the OutPatientAppointmentAPI and manage appointments.

## Contributing
Contributions are welcome! If you have ideas, bug reports, or feature requests, please open an issue or create a pull request.
