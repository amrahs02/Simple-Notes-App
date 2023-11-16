// EmptyNotes.js

import React from "react";
import Delete from "@mui/icons-material/Delete";
import { Typography, Box} from "@mui/material";
import "../global.css"; // Import the global styles


const EmptyNotes = () => {
  return (
      <Box className="empty-notes-container">
        <Delete className="empty-notes-light" />
        <Typography className="empty-notes-text">No notes in Trash</Typography>
    </Box>
  );
};

export default EmptyNotes;
