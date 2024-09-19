import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Button,
  TablePagination,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const EventTable = ({
  events,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  handleEditEvent,
  handleDeleteEvent,
}) => {
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        mb: 4,
        border: "1px solid #1976d2", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" sx={{ mt: 2 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f0f4ff" }}>
              {" "}
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", borderBottom: "2px solid #1976d2" }} 
              >
                Transaction ID
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", borderBottom: "2px solid #1976d2" }}
              >
                Transaction Timestamp
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", borderBottom: "2px solid #1976d2" }}
              >
                RC Number
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", borderBottom: "2px solid #1976d2" }}
              >
                Client ID
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", borderBottom: "2px solid #1976d2" }}
              >
                Event Count
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", borderBottom: "2px solid #1976d2" }}
              >
                Location Code
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", borderBottom: "2px solid #1976d2" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.length > 0 ? (
              events
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((event) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={event.eventId}
                    sx={{
                      transition: "0.3s", 
                      "&:hover": {
                        backgroundColor: "#e3f2fd", 
                        transform: "scale(1.02)", 
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
                      },
                    }}
                  >
                    <TableCell
                      align="center"
                      sx={{ borderBottom: "1px solid #1976d2" }}
                    >
                      {event.transId}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderBottom: "1px solid #1976d2" }}
                    >
                      {event.transTms}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderBottom: "1px solid #1976d2" }}
                    >
                      {event.rcNum}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderBottom: "1px solid #1976d2" }}
                    >
                      {event.clientId}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderBottom: "1px solid #1976d2" }}
                    >
                      {event.eventCnt}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderBottom: "1px solid #1976d2" }}
                    >
                      {event.locationCd}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderBottom: "1px solid #1976d2" }}
                    >
                      <Button
                        color="primary"
                        onClick={() => handleEditEvent(event)}
                        sx={{
                          minWidth: "40px",
                          padding: "5px",
                          "&:hover": {
                            color: "#1565c0",
                          },
                        }}
                      >
                        <EditRoundedIcon />
                      </Button>
                      <Button
                        color="secondary"
                        onClick={() => handleDeleteEvent(event.eventId)}
                        sx={{
                          minWidth: "40px",
                          padding: "5px",
                          "&:hover": {
                            color: "#d32f2f",
                          },
                        }}
                      >
                        <DeleteRoundedIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No Events available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={events.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default EventTable;
