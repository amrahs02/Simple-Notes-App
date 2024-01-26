import { useState, useRef, useContext } from "react";
import { Box, TextField, ClickAwayListener, Button } from "@mui/material";
import { v4 as uuid } from "uuid";
import { DataContext } from "../../context/DataProvider";


const note = {
  id: "",
  heading: "",
  text: "",
};

const Form = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });

  const { notes, setNotes } = useContext(DataContext);
  const containerRef = useRef();

  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = "30px";
    setAddNote({ ...note, id: uuid() });

    if (addNote.heading || addNote.text) {
      setNotes((prevArr) => [addNote, ...prevArr]);
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


  const onEnterPress = (e) => {
    if (e.key === 'Enter') {
      handleClickAway();
    } else if (e.key === '/') {
      // Focus on the text field when "/" key is pressed
      containerRef.current.querySelector('.textfield2').focus();
    }
  };

  



  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box className="bg-dark-gray flex flex-col my-10 border border-gray-700 p-4 rounded-xl m-2" ref={containerRef}>
        {showTextField && (
          <TextField
            className="textfield1"
            variant="standard"
            InputProps={{
              disableUnderline: true,
              style: { color: 'white' },
            }}
            onChange={(e) => onTextChange(e)}
            onKeyPress={onEnterPress}
            name="heading"
            placeholder="Title"
            value={addNote.heading}
          />

        )}
        <TextField
          className="textfield2"
          placeholder="Write Your Note Here..."
          variant="standard"
          multiline
          defaultValue="foo"
          maxRows={Infinity}
          InputProps={{
            disableUnderline: true,
            style: { color: 'white' },
          }}
          onClick={onTextAreaClick}
          onChange={(e) => onTextChange(e)}
          onKeyPress={onEnterPress}
          name="text"
          value={addNote.text}
        />


      </Box>
    </ClickAwayListener>
  );
};

export default Form;
