# Event Manager Frontend

A responsive event management application frontend built with **React** and **Material UI**. The app allows users to view, add, edit, and delete event records.

## Features

- **View Events**: Display a list of events in a table with pagination.
- **Add Event**: Add new events with validation.
- **Edit Event**: Modify existing events.
- **Delete Event**: Remove events from the database.

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Material UI**: React components for faster and easier web development.
- **Axios**: Promise-based HTTP client to communicate with the backend API.
- **JavaScript (ES6+)**: For logic implementation.

### Deployment

- **Docker Compose**: To containerize and run the frontend services.

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16+)
- **npm**
- **Docker** & **Docker Compose**

## Getting Started

### 1. Unzip and Navigate to the project directory:

```bash
cd event-manager-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the React frontend

```bash
npm start
```

This will start the frontend on http://localhost:3000.

### 4. Used API Endpoints

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| GET    | `/api/events`      | Get all events           |
| POST   | `/api/events`      | Add a new event          |
| PUT    | `/api/events/{id}` | Update an existing event |
| DELETE | `/api/events/{id}` | Delete an event          |
