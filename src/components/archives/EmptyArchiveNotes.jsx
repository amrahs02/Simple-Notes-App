// EmptyNotes.js

import React from 'react';
import Archive from '@mui/icons-material/Archive';
import { Typography, Box } from '@mui/material';
import "../global.css"; // Import the global styles



const EmptyNotes = () => {
    return (
        <Box className="empty-notes-container">
            <Archive className="empty-notes-light" />
            <Typography className="empty-notes-text">Your Archive Notes appear here</Typography>
        </Box>
    )
}

export default EmptyNotes;
