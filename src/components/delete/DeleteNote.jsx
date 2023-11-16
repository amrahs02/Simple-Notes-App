// DeleteNote.js

import React, { useContext } from "react";
import {  CardContent, CardActions, Typography, Box } from "@mui/material";
import { Restore, Delete } from "@mui/icons-material";
import { DataContext } from "../../context/DataProvider";
import "../global.css"; // Import the global styles



const DeleteNote = ({ deleteNote }) => {
  const { deleteNotes, setNotes, setDeleteNotes } = useContext(DataContext);

  const restoreNote = (deleteNote) => {
    const updatedNotes = deleteNotes.filter((data) => data.id !== deleteNote.id);
    setDeleteNotes(updatedNotes);
    setNotes((prevArr) => [deleteNote, ...prevArr]);
  };

  const removeNote = (deleteNote) => {
    const updatedNotes = deleteNotes.filter((data) => data.id !== deleteNote.id);
    setDeleteNotes(updatedNotes);
  };

  return (
    <Box className="delete-note-card">
      <CardContent>
        <Typography>{deleteNote.heading}</Typography>
        <Typography>{deleteNote.text}</Typography>
      </CardContent>
      <CardActions>
        <Delete fontSize="small" style={{ marginLeft: "auto" }} onClick={() => removeNote(deleteNote)} />
        <Restore fontSize="small" onClick={() => restoreNote(deleteNote)} />
      </CardActions>
    </Box>
  );
};

export default DeleteNote;
