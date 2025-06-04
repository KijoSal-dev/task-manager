# task-manager

# Task Manager

This is a simple Task Manager application built with the MERN stack (MongoDB, Express.js, React, and Node.js).  
It allows users to create, view, update, and delete tasks.  
The backend is built with Express and MongoDB, and the frontend can be developed using React.

## Features

- Add new tasks
- View all tasks
- Update existing tasks
- Delete tasks

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```
2. Start the backend server with nodemon for automatic restarts:
   ```
   npm start
   ```
   or, if you want to run nodemon directly:
   ```
   npx nodemon server.js
   ```
3. Make sure MongoDB is running locally (default: `mongodb://localhost:27017/taskdb`).

## Folder Structure

- `server.js` – Express server and API routes
- `routes.js` – Task API endpoints
- `Task.js` – Mongoose model for tasks

---

Feel free to extend the project with a React frontend!
