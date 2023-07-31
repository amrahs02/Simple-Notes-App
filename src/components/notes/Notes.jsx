// // import { useContext } from "react";
// // import { Box, Grid } from "@mui/material";
// // import { styled } from "@mui/material/styles";
// // import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// // import { DataContext } from "../../context/DataProvider";
// // import { reorder } from "../../utils/common-utils";
// // import Form from "./Form";
// // import Note from "./Note";
// // import EmptyNotes from "./EmptyNotes";

// // const DrawerHeader = styled("div")(({ theme }) => ({
// //   ...theme.mixins.toolbar,
// // }));

// // const Notes = () => {
// //   const { notes, setNotes } = useContext(DataContext);

// //   const onDragEnd = (result) => {
// //     if (!result.destination) return;

// //     const items = reorder(notes, result.source.index, result.destination.index);
// //     setNotes(items);
// //   };

// //   return (
// //     <Box sx={{ display: "flex", width: "100%" }}>
// //       <Box sx={{ p: 3, width: "100%" }}>
// //         <DrawerHeader />
// //         <Form />
// //         {notes.length > 0 ? (
// //           <DragDropContext onDragEnd={onDragEnd}>
// //             <Droppable droppableId="droppable">
// //               {(provided, snapshot) => (
// //                 <Grid
// //                   container
// //                   style={{ marginTop: 16 }}
// //                   {...provided.droppableProps}
// //                   ref={provided.innerRef}
// //                 >
// //                   {notes.map((note, index) => (
// //                     <Draggable
// //                       key={note.id}
// //                       draggableId={note.id}
// //                       index={index}
// //                     >
// //                       {(provided, snapshot) => (
// //                         <Grid
// //                           ref={provided.innerRef}
// //                           {...provided.draggableProps}
// //                           {...provided.dragHandleProps}
// //                           item
// //                         >
// //                           <Note note={note} />
// //                         </Grid>
// //                       )}
// //                     </Draggable>
// //                   ))}
// //                 </Grid>
// //               )}
// //             </Droppable>
// //           </DragDropContext>
// //         ) : (
// //           <EmptyNotes />
// //         )}
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Notes;

import { useState, useContext } from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DataContext } from "../../context/DataProvider";
import Fab from "@mui/material/Fab";
import EditIcon from '@mui/icons-material/Edit';
import { reorder } from "../../utils/common-utils";
import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "./EmptyNotes";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes, setNotes } = useContext(DataContext);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = reorder(notes, result.source.index, result.destination.index);
    setNotes(items);
  };

  const handleAddNoteClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {isMobile ? (
          // Mobile view
          <>
            {!isFormOpen ? (
              <Fab
                style={{ position: "absolute", bottom: 16, right: 16 }}
                color="primary"
                variant="extended"
                aria-label="edit"
                onClick={handleAddNoteClick}
              >
                <EditIcon />
                Add Note
              </Fab>
            ) : (
          // Desktop view
              <Form onCloseForm={handleCloseForm} />
            )}
          </>
        ) : (
          <Form />
        )}
        {notes.length > 0 ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <>
                  {isMobile ? (
                    // Mobile view
                    <Grid
                      container
                      style={{ marginTop: 16 }}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {notes.map((note, index) => (
                        <Draggable
                          key={note.id}
                          draggableId={note.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <Grid
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              item
                            >
                              <Note note={note} />
                            </Grid>
                          )}
                        </Draggable>
                      ))}
                    </Grid>
                  ) : (
                    // Desktop view
                    <Grid
                      container
                      style={{ marginTop: 16 }}
                      spacing={2}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {notes.map((note, index) => (
                        <Draggable
                          key={note.id}
                          draggableId={note.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <Grid
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              item
                              xs={12}
                              sm={6}
                              md={4}
                              lg={3}
                            >
                              <Note note={note} />
                            </Grid>
                          )}
                        </Draggable>
                      ))}
                    </Grid>
                  )}
                </>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
};

export default Notes;
