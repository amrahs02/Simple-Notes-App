import React, { useContext } from "react";
import { CardContent, CardActions, Typography, Box } from "@mui/material";
import { Restore, Delete } from "@mui/icons-material";
import { DataContext } from "../../context/DataProvider";

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
    <div className=" dark:bg-gray-100 dark:text-gray-700 rounded-lg  flex justify-between items-center bg-gray-800 border border-gray-700 text-gray-300">
      <div className="ml-4" >
        <Typography className="font-bold text-blue-500 capitalize">{deleteNote.heading}</Typography>
        <Typography className="">{deleteNote.text}</Typography>
      </div>
      <CardActions className="m-4">
        <Delete className=" ml-2 border-gray-700 border rounded-xl text-gray-500" fontSize="large" onClick={() => removeNote(deleteNote)} />
        <Restore className="cursor-pointer ml-2 border-gray-700 border rounded-xl text-gray-500" fontSize="large" onClick={() => restoreNote(deleteNote)} />
      </CardActions>
    </div>
  );
};

export default DeleteNote;
