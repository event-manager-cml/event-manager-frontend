import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import EventTable from "../components/EventTable";
import EventDialog from "../components/EventDialog";
import { addEvent, updateEvent, deleteEvent, getEvents } from "../services/api";

function EventsManagement() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    eventId: "",
    transId: "",
    transTms: "",
    rcNum: "",
    clientId: 1,
    eventCnt: "",
    locationCd: "",
    locationId1: "",
    locationId2: "",
    addrNbr: "",
  });
  const [editingEvent, setEditingEvent] = useState(null);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getEvents();
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
        setSnackbarMessage("Error fetching events!");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      }
    }
    fetchData();
  }, []);

  const validate = () => {
    let tempErrors = {};

    if (!newEvent.transId)
      tempErrors.transId = "Event transaction ID is required.";
    if (!newEvent.transTms)
      tempErrors.transTms = "Event transaction timestamp is required.";
    if (!newEvent.rcNum) tempErrors.rcNum = "RC Number is required.";
    if (!newEvent.clientId) tempErrors.clientId = "Client ID is required.";
    if (!newEvent.eventCnt) tempErrors.eventCnt = "Event Count is required.";
    if (!newEvent.locationCd)
      tempErrors.locationCd = "Location Code is required.";
    if (!newEvent.locationId1)
      tempErrors.locationId1 = "Location ID1 is required.";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (event) => {
    setNewEvent({ ...newEvent, [event.target.name]: event.target.value });
  };

  const handleAddOrUpdateEvent = async () => {
    if (!validate()) return;

    if (editingEvent) {
      try {
        const response = await updateEvent(editingEvent.eventId, newEvent);
        setEvents(
          events.map((event) =>
            event.eventId === editingEvent.eventId ? response.data : event
          )
        );
        setEditingEvent(null);
        handleCloseDialog();
        setSnackbarMessage("Event updated successfully!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
      } catch (error) {
        console.error("Error updating event:", error);
        setSnackbarMessage("Error updating event!");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      }
    } else {
      try {
        const response = await addEvent(newEvent);
        setEvents([...events, response.data]);
        handleCloseDialog();
        setSnackbarMessage("Event added successfully!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
      } catch (error) {
        console.error("Error adding event:", error);
        setSnackbarMessage("Error adding event!");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      }
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      deleteEvent(id);
      setEvents(events.filter((event) => event.eventId !== id));
      setSnackbarMessage("Event deleted successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error deleting event:", error);
      setSnackbarMessage("Error deleting event!");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setNewEvent(event);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setEditingEvent(null);
    setNewEvent({
      transId: "",
      transTms: "",
      rcNum: "",
      clientId: "",
      eventCnt: 1,
      locationCd: "",
      locationId1: "",
      locationId2: "",
      addrNbr: "",
    });
    setOpen(false);
    setErrors({
      transId: "",
      transTms: "",
      rcNum: "",
      clientId: "",
      eventCnt: "",
      locationCd: "",
      locationId1: "",
      locationId2: "",
      addrNbr: "",
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#1976d2",
          color: "white",
          padding: "16px 0",
          mb: 4,
        }}
      >
        <Typography variant="h4" align="center">
          Event Management
        </Typography>
      </Box>

      <Container sx={{ mt: 2, mb: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
            sx={{
              padding: "10px 20px",
              borderRadius: "8px",
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#115293",
              },
            }}
          >
            Add New Event
          </Button>
        </Box>

        <EventTable
          events={events}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleEditEvent={handleEditEvent}
          handleDeleteEvent={handleDeleteEvent}
        />

        <EventDialog
          open={open}
          editingEvent={editingEvent}
          newEvent={newEvent}
          handleCloseDialog={handleCloseDialog}
          handleInputChange={handleInputChange}
          handleAddOrUpdateEvent={handleAddOrUpdateEvent}
          errors={errors}
        />
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
}

export default EventsManagement;
