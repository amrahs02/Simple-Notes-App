import React, { useContext } from "react";
import { Box } from "@mui/material";
import { DataContext } from "../../context/DataProvider";
import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "./EmptyNotes";

const Notes = () => {
  const { notes } = useContext(DataContext);

  return (
    <Box className="sm:w-1/2 border w-full border-gray-700 rounded-xl m-2">
      <h2 className="text-xl font-bold text-blue-500 text-center  m-4" >Notes</h2>
      <Form />
      {notes.length > 0 ? (
        <div className="m-2 w-fit flex flex-row flex-wrap justify-center items-center">
          {notes.map((note) => (
            <div key={note.id} className="m-2 w-fit">
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
