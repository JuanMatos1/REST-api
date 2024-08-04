# REST API

This is a simple REST API built with Node.js, Express, and PostgreSQL.

## Prerequisites

- Node.js (v14.x or later)
- PostgreSQL (v12 or later)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/rest-api.git
   cd rest-api

2.Install the dependencies:
npm install

Usage
Starting the Server
To start the server in production mode:

npm run serve

To start the server in development mode (with automatic restarts on file changes):

npm run dev

API Endpoints
GET /api/v1/students: Get all students.
GET /api/v1/students/:id: Get a student by ID.
POST /api/v1/students: Add a new student.
PUT /api/v1/students/:id/name: Update a student's name.
PUT /api/v1/students/:id/email: Update a student's email.
DELETE /api/v1/students/:id: Remove a student.
Testing with Postman
To test the API with Postman, follow these steps:

Open Postman.

Set the request URL to http://localhost:3000/api/v1/students.

Use the appropriate HTTP method (GET, POST, PUT, DELETE) for the desired endpoint.

For POST and PUT requests, set the request body to JSON format and include the necessary fields. For example, to add a student:


{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 25,
  "dob": "1997-05-12"
}

Click Send to execute the request.

rest-api/
├── src/
│   ├── student/
│   │   ├── controller.js
│   │   ├── queries.js
│   │   ├── routes.js
│   └── db.js
├── server.js
├── package.json
└── README.md

Dependencies
express: A minimal and flexible Node.js web application framework.
pg: PostgreSQL client for Node.js.
Dev Dependencies
nodemon: A utility that will monitor for any changes in your source and automatically restart your server.

