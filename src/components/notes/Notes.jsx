import React, { useContext } from "react";
import { Box } from "@mui/material";
import { DataContext } from "../../context/DataProvider";
import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "./EmptyNotes";

const Notes = () => {
  const { notes } = useContext(DataContext);

  return (
    <Box className="sm:w-1/2 border w-full mb-16 sm:min-h-96  overflow-y-auto border-gray-700 rounded-xl">
      <h2 className="text-xl font-bold text-blue-500 text-center m-4" >Notes</h2>
      <Form />
      {notes.length > 0 ? (
        <div className="w-full">
          {notes.map((note) => (
            <div key={note.id} className="">
              <Note note={note} />
            </div>
          ))}
        </div>
      ) : (
        <EmptyNotes />
      )}
    </Box>
  );
};

export default Notes;
