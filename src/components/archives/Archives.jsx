// Archives.js

import React, { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../global.css"; // Import the global styles
import EmptyArchiveNotes from "./EmptyArchiveNotes";
import { DataContext } from "../../context/DataProvider";
import Archive from "./Archive";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Archives = () => {
  const { archiveNotes } = useContext(DataContext);

  return (
    <div className="archive-container">
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {archiveNotes.length > 0 ? (
          <Grid container>
            {archiveNotes.map((archive) => (
              <Grid item key={archive.id} className="archive-grid">
                <Archive archive={archive} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyArchiveNotes />
        )}
      </Box>
    </div>
  );
};

export default Archives;
