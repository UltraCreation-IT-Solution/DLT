# MERN App

## Overview

This is a MERN stack application built with the following technologies:

- **MongoDB**: NoSQL database used to store application data.
- **Express.js**: Web framework for Node.js to build the backend API.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime to run the server-side code.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (Node Package Manager)
- MongoDB (locally or MongoDB Atlas)

## Getting Started

### 1. Clone the Repository

- git clone https://github.com/your-username/your-repo.git
- cd your-repo

### 2. Set Up Environment Variables

- MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-db-name?retryWrites=true&w=majority
- PORT=5000

### 3. Install Dependencies

# Install backend dependencies

- cd backend
- npm install

# Install frontend dependencies

- cd ../frontend
- npm install

### 4. Run the Application

# In the backend directory

- cd backend
- npm start

# In the frontend directory

- cd frontend
- npm run dev

### 5. Access the Application

- The backend will run on http://localhost:5000
- The frontend will run on http://localhost:3000

### 6. Build and Run the Application

- docker-compose up --build

### 7. Stopping the Application

- docker-compose down
