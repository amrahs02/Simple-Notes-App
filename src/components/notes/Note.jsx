// import { useContext } from "react";

// import { Card, CardContent, CardActions, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import {
//   ArchiveOutlined as Archive,
//   DeleteOutlineOutlined as Delete,
// } from "@mui/icons-material";

// import { DataContext } from "../../context/DataProvider";

// const StyledCard = styled(Card)`
//   border: 1px solid #e0e0e0;
//   border-radius: 8px;
//   width: 240px;
//   margin: 8px;
//   box-shadow: none;
// `;

// const Note = ({ note }) => {
//   const { notes, setNotes, setArchiveNotes, setDeleteNotes } =
//     useContext(DataContext);

//   const archiveNote = (note) => {
//     const updatedNotes = notes.filter((data) => data.id !== note.id);
//     setNotes(updatedNotes);
//     setArchiveNotes((prevArr) => [note, ...prevArr]);
//   };

//   const deleteNote = (note) => {
//     const updatedNotes = notes.filter((data) => data.id !== note.id);
//     setNotes(updatedNotes);
//     setDeleteNotes((prevArr) => [note, ...prevArr]);
//   };

//   return (
//     <StyledCard>
//       <CardContent>
//         <Typography>{note.heading}</Typography>
//         <Typography>{note.text}</Typography>
//       </CardContent>
//       <CardActions>
//         <Archive
//           fontSize="small"
//           style={{ marginLeft: "auto" }}
//           onClick={() => archiveNote(note)}
//         />
//         <Delete fontSize="small" onClick={() => deleteNote(note)} />
//       </CardActions>
//     </StyledCard>
//   );
// };

// export default Note;

import React, { useState, useContext } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Popover,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
  ColorLensOutlined as ColorLens,
} from "@mui/icons-material";

import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)(({ selectedColor }) => ({
  border: "1px solid #e0e0e0",
  borderRadius: 8,
  width: 240,
  margin: 8,
  boxShadow: "none",
  backgroundColor: selectedColor || "transparent",
}));

const Note = ({ note }) => {
  const { notes, setNotes, setArchiveNotes, setDeleteNotes } =
    useContext(DataContext);

  const [colorPopupOpen, setColorPopupOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const archiveNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setArchiveNotes((prevArr) => [note, ...prevArr]);
  };

  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeleteNotes((prevArr) => [note, ...prevArr]);
  };

  const handleColorButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
    setColorPopupOpen(true);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setColorPopupOpen(false);
  };

  return (
    <>
      <StyledCard selectedColor={selectedColor}>
        <CardContent>
          <Typography>{note.heading}</Typography>
          <Typography>{note.text}</Typography>
        </CardContent>
        <CardActions>
          <Archive
            fontSize="small"
            style={{ marginLeft: "auto" }}
            onClick={() => archiveNote(note)}
          />
          <Delete fontSize="small" onClick={() => deleteNote(note)} />
          <ColorLens fontSize="small" onClick={handleColorButtonClick} />
        </CardActions>
      </StyledCard>
      <Popover
        open={colorPopupOpen}
        anchorEl={anchorEl}
        onClose={() => setColorPopupOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Button
          onClick={() => handleColorSelect("#f44336")}
          style={{
            backgroundColor: "#f44336",
            width: "32px",
            height: "32px",
            margin: "4px",
          }}
        />
        <Button
          onClick={() => handleColorSelect("#2196f3")}
          style={{
            backgroundColor: "#2196f3",
            width: 32,
            height: 32,
            margin: 4,
          }}
        />
        <Button
          onClick={() => handleColorSelect("#4caf50")}
          style={{
            backgroundColor: "#4caf50",
            width: 32,
            height: 32,
            margin: 4,
          }}
        />
        {/* Add more color buttons here */}
      </Popover>
    </>
  );
};

export default Note;
