import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteNote from "./DeleteNote";
import EmptyDeletedNotes from "./EmptyDeletedNotes";
import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deleteNotes } = useContext(DataContext);

  return (
    <div className=" text-white sm:w-1/2 rounded-xl w-full border border-gray-700 m-2  ">
      <h2 className="text-xl font-bold text-blue-500 text-center  m-4" >Trash</h2>
      <DrawerHeader />
      {deleteNotes.length > 0 ? (
        <Grid container spacing={4} className="mt-4">
          {deleteNotes.map((deleteNote) => (
            <Grid key={deleteNote.id} item xs={12} md={6} lg={4} className="delete-notes-grid">
              <DeleteNote deleteNote={deleteNote} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <EmptyDeletedNotes />
      )}
    </div>
  );
};

export default DeleteNotes;
