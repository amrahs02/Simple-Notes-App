// EmptyNotes.js

import React from "react";
import { Lightbulb } from "@mui/icons-material";
import "../global.css"; // Import the global styles
import { Container, Typography } from "@mui/material";


const EmptyNotes = () => {
  return (
    <Container className="empty-notes-container">
      <Lightbulb className="empty-notes-light" />
      <Typography className="empty-notes-text">Notes you add appear here</Typography>
    </Container>
  );
};

export default EmptyNotes;
