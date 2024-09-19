import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getEvents = () => {
  return api.get("/events");
};

export const addEvent = (eventData) => {
  return api.post("/events", eventData);
};

export const updateEvent = (id, eventData) => {
  return api.put(`/events/${id}`, eventData);
};

export const deleteEvent = (id) => {
  return api.delete(`/events/${id}`);
};

export default api;
