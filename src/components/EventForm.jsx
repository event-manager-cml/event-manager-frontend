import React from "react";
import { TextField } from "@mui/material";

const EventForm = ({ newEvent, handleInputChange, errors }) => {
  return (
    <>
      <TextField
        name="transId"
        label="Transaction ID"
        fullWidth
        margin="normal"
        value={newEvent.transId}
        onChange={handleInputChange}
        error={!!errors.transId}
        helperText={errors.transId}
      />
      <TextField
        name="transTms"
        label="Transaction Timestamp"
        fullWidth
        margin="normal"
        value={newEvent.transTms}
        onChange={handleInputChange}
        error={!!errors.transTms}
        helperText={errors.transTms}
      />
      <TextField
        name="rcNum"
        label="RC Number"
        fullWidth
        margin="normal"
        value={newEvent.rcNum}
        onChange={handleInputChange}
        error={!!errors.rcNum}
        helperText={errors.rcNum}
      />
      <TextField
        name="clientId"
        label="Client ID"
        fullWidth
        margin="normal"
        value={newEvent.clientId}
        onChange={handleInputChange}
        error={!!errors.clientId}
        helperText={errors.clientId}
      />
      <TextField
        name="eventCnt"
        label="Event Count"
        fullWidth
        margin="normal"
        value={newEvent.eventCnt}
        onChange={handleInputChange}
        error={!!errors.eventCnt}
        helperText={errors.eventCnt}
        type="number"
      />
      <TextField
        name="locationCd"
        label="Location Code"
        fullWidth
        margin="normal"
        value={newEvent.locationCd}
        onChange={handleInputChange}
        error={!!errors.locationCd}
        helperText={errors.locationCd}
      />
      <TextField
        name="locationId1"
        label="Location ID 1"
        fullWidth
        margin="normal"
        value={newEvent.locationId1}
        onChange={handleInputChange}
        error={!!errors.locationId1}
        helperText={errors.locationId1}
      />
      <TextField
        name="locationId2"
        label="Location ID 2"
        fullWidth
        margin="normal"
        value={newEvent.locationId2}
        onChange={handleInputChange}
        error={!!errors.locationId2}
        helperText={errors.locationId2}
      />
      <TextField
        name="addrNbr"
        label="Address Number"
        fullWidth
        margin="normal"
        value={newEvent.addrNbr}
        onChange={handleInputChange}
        error={!!errors.addrNbr}
        helperText={errors.addrNbr}
      />
    </>
  );
};

export default EventForm;
