import React, { useContext } from "react";
import { CardContent, CardActions, Typography, Box } from "@mui/material";
import { Restore, Delete } from "@mui/icons-material";
import { DataContext } from "../../context/DataProvider";

const DeleteNote = ({ deleteNote }) => {
  const { deleteNotes, setNotes, setDeleteNotes } = useContext(DataContext);

  const restoreNote   = (deleteNote) => {
    const updatedNotes = deleteNotes.filter((data) => data.id !== deleteNote.id);
    setDeleteNotes(updatedNotes);
    setNotes((prevArr) => [deleteNote, ...prevArr]);
  };

  const removeNote = (deleteNote) => {
    const updatedNotes = deleteNotes.filter((data) => data.id !== deleteNote.id);
    setDeleteNotes(updatedNotes);
  };

  return (
    <Box className=" rounded-lg flex w-52 justify-center items-center bg-gray-800 border border-gray-700  text-gray-300 sm:1/2 p-4 m-4">
      <CardContent>
        <Typography className="text-xl font-semibold mb-2">{deleteNote.heading}</Typography>
        <Typography className="text-gray-300">{deleteNote.text}</Typography>
      </CardContent>
      <CardActions className="flex justify-end">
        <Delete className="text-gray-300 cursor-pointer" fontSize="small" onClick={() => removeNote(deleteNote)} />
        <Restore className="text-gray-300 cursor-pointer ml-auto" fontSize="small" onClick={() => restoreNote(deleteNote)} />
      </CardActions>
    </Box>
  );
};

export default DeleteNote;
