import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import EventForm from "./EventForm";

const EventDialog = ({
  open,
  editingEvent,
  newEvent,
  handleCloseDialog,
  handleInputChange,
  handleAddOrUpdateEvent,
  errors,
}) => {
  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <DialogTitle>{editingEvent ? "Update Event" : "Add New Event"}</DialogTitle>
      <DialogContent>
        <EventForm
          newEvent={newEvent}
          handleInputChange={handleInputChange}
          errors={errors}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Cancel</Button>
        <Button onClick={handleAddOrUpdateEvent}>
          {editingEvent ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventDialog;
