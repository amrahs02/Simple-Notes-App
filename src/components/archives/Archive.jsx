// Archive.js
import React, { useContext } from "react";
import { CardContent, CardActions, Typography, Box } from "@mui/material";
import { DataContext } from "../../context/DataProvider";
import { Unarchive, Delete } from "@mui/icons-material";
import "../global.css"; // Import the global styles



const Archive = ({ archive }) => {
  const { archiveNotes, setNotes, setArchiveNotes, setDeleteNotes } = useContext(DataContext);

  const unArchiveNote = (archive) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== archive.id);
    setArchiveNotes(updatedNotes);
    setNotes((prevArr) => [archive, ...prevArr]);
  };

  const deleteNote = (archive) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== archive.id);
    setArchiveNotes(updatedNotes);
    setDeleteNotes((prevArr) => [archive, ...prevArr]);
  };

  return (
    <Box className="custom-card"> {/* Apply the global class */}
      <CardContent>
        <Typography>{archive.heading}</Typography>
        <Typography>{archive.text}</Typography>
      </CardContent>
      <CardActions>
        <Unarchive fontSize="small" className="unarchive-icon" onClick={() => unArchiveNote(archive)} />
        <Delete fontSize="small" onClick={() => deleteNote(archive)} />
      </CardActions>
    </Box>
  );
};

export default Archive;
