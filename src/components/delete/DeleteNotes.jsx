// DeleteNotes.js

import React, { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../global.css"; // Import the global styles
import DeleteNote from "./DeleteNote";
import EmptyDeletedNotes from "./EmptyDeletedNotes";
import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deleteNotes } = useContext(DataContext);

  return (
    <div className="delete-notes-container">
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {deleteNotes.length > 0 ? (
          <Grid container>
            {deleteNotes.map((deleteNote) => (
              <Grid item key={deleteNote.id} className="delete-notes-grid">
                <DeleteNote deleteNote={deleteNote} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyDeletedNotes />
        )}
      </Box>
    </div>
  );
};

export default DeleteNotes;
