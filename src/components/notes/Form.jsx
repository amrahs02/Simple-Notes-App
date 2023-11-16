
import { useState, useRef, useContext, useEffect } from "react";
import { Box, TextField, ClickAwayListener, Button, Snackbar, Alert } from "@mui/material";
import { styled } from "@mui/material/styles";
import { v4 as uuid } from "uuid";
import { DataContext } from "../../context/DataProvider";
import { Delete, Redo, Save, Undo } from "@mui/icons-material";


const Container = styled(Box)`
display: flex;
flex-direction: column;
margin: auto;
border-radius: 100px;
background-color: #37474f;
padding: 5px 5px;
`;

const note = {
  id: "",
  heading: "",
  text: "",
};

const Form = () => {
  const [historyPointer, setHistoryPointer] = useState(0);
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });
  const [history, setHistory] = useState([addNote]);

  const { notes, setNotes } = useContext(DataContext);
  const containerRef = useRef();

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, [setNotes]);

  const saveToLocalStorage = (newNotes) => {
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = "30px";
    containerRef.current.style.borderRadius = "30px";
    setAddNote({ ...note, id: uuid() });

    if (addNote.heading || addNote.text) {
      const updatedNotes = [addNote, ...notes];
      setNotes(updatedNotes);
      saveToLocalStorage(updatedNotes);
    }
  };

  const onTextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = "70px";
    containerRef.current.style.borderRadius = "10px";
  };

  const onTextChange = (e) => {
    let changedNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(changedNote);
  };
  const handleSave = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = "30px";
    setAddNote({ ...note, id: uuid() });

    if (addNote.heading || addNote.text) {
      setHistory(history.slice(0, historyPointer + 1));
      setHistoryPointer(historyPointer + 1);
      setHistory((prevHistory) => [...prevHistory, addNote]);
      setNotes((prevArr) => [addNote, ...prevArr]);
    }
  };
  const handleUndo = () => {
    if (historyPointer > 0) {
      setHistoryPointer(historyPointer - 1);
      setAddNote(history[historyPointer - 1]);
    }
  };

  const handleRedo = () => {
    if (historyPointer < history.length - 1) {
      setHistoryPointer(historyPointer + 1);
      setAddNote(history[historyPointer + 1]);
    }
  };

  const handleDelete = () => {
    setAddNote({ ...note, id: uuid() });
    setHistory([note]);
    setHistoryPointer(0);
  };


  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showTextField && (
          <TextField
            variant="outlined"
            InputProps={{ disableUnderline: true }}
            className="textfield1"
            onChange={(e) => onTextChange(e)}
            name="heading"
            label="Title"
            value={addNote.heading}
          />
        )}
        <TextField
          placeholder="Take a note..."
          multiline
          defaultValue="foo"
          className="textfield2"
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={onTextAreaClick}
          onChange={(e) => onTextChange(e)}
          name="text"
          value={addNote.text}
        />
        {showTextField && (
          <Box className='function-buttons' >
            <Button onClick={handleUndo} variant="contained" >
              <Undo />
            </Button>
            <Button onClick={handleRedo} variant="contained">
              <Redo />
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              <Delete />
            </Button>
            <Button variant="contained" color="success" onClick={handleSave}>
              <Save />
            </Button>
          </Box>

        )}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
