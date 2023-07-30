import { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import EmptyDeletedNotes from "./EmptyDeletedNotes";
import { DataContext } from "../../context/DataProvider";
import DeleteNote from "./DeleteNote";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deleteNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {deleteNotes.length > 0 ? (
          <Grid container>
            {deleteNotes.map((deleteNote) => (
              <Grid item>
                <DeleteNote deleteNote={deleteNote} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyDeletedNotes />
        )}
      </Box>
    </Box>
  );
};

export default DeleteNotes;
