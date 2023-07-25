// // // import { useState, useRef, useContext } from 'react';

// // // import { Box, TextField, ClickAwayListener } from '@mui/material';
// // // import { styled } from '@mui/material/styles';
// // // import { v4 as uuid } from 'uuid';

// // // import { DataContext } from '../../context/DataProvider';

// // // const Container = styled(Box)`
// // //     display: flex;
// // //     flex-direction: column;
// // //     margin: auto;
// // //     box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
// // //     border-color: #e0e0e0;
// // //     width: 600px;
// // //     border-radius: 8px;
// // //     min-height: 30px;
// // //     padding: 10px 15px;
// // // `

// // // const note = {
// // //     id: '',
// // //     heading: '',
// // //     text: ''
// // // }

// // // const Form = () => {

// // //     const [showTextField, setShowTextField] = useState(false);
// // //     const [addNote, setAddNote] = useState({ ...note, id: uuid() });

// // //     const { setNotes } = useContext(DataContext);
    
// // //     const containerRef = useRef();

// // //     const handleClickAway = () => {
// // //         setShowTextField(false);
// // //         containerRef.current.style.minheight = '30px'
// // //         setAddNote({ ...note, id: uuid() });

// // //         if (addNote.heading || addNote.text) {
// // //             setNotes(prevArr => [addNote, ...prevArr])
// // //         }
// // //     }
    
// // //     const onTextAreaClick = () => {
// // //         setShowTextField(false);
// // //         containerRef.current.style.minheight = '70px'
// // //     }

// // //     const onTextChange = (e) => {
// // //         let changedNote = { ...addNote, [e.target.name]: e.target.value };
// // //         setAddNote(changedNote);
// // //     }

// // //     return (
// // //         <ClickAwayListener onClickAway={handleClickAway}>
// // //             <Container ref={containerRef}>
// // //                 {   showTextField && 
// // //                     <TextField 
// // //                         placeholder="Title"
// // //                         variant="standard"
// // //                         InputProps={{ disableUnderline: true }}
// // //                         style={{ marginBottom: 10 }}
// // //                         onChange={(e) => onTextChange(e)}
// // //                         name='heading'
// // //                         value={addNote.heading}
// // //                     />
// // //                 }
// // //                 <TextField
// // //                     placeholder="Take a note..."
// // //                     multiline
// // //                     maxRows={Infinity}
// // //                     variant="standard"
// // //                     InputProps={{ disableUnderline: true }}
// // //                     onClick={onTextAreaClick}
// // //                     onChange={(e) => onTextChange(e)}
// // //                     name='text'
// // //                     value={addNote.text}
// // //                 />
// // //             </Container>
// // //         </ClickAwayListener>
// // //     )
// // // }

// // // export default Form;





// // // import { useState, useRef, useContext } from 'react';
// // // import {UndoIcon, Box, TextField, ClickAwayListener, Button } from '@mui/material';
// // // import { styled } from '@mui/material/styles';
// // // import { v4 as uuid } from 'uuid';

// // // import { DataContext } from '../../context/DataProvider';

// // // const Container = styled(Box)`
// // //   display: flex;
// // //   flex-direction: column;
// // //   margin: auto;
// // //   box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
// // //   border-color: #e0e0e0;
// // //   width: 600px;
// // //   border-radius: 8px;
// // //   min-height: 30px;
// // //   padding: 10px 15px;
// // // `;

// // // const note = {
// // //   id: '',
// // //   heading: '',
// // //   text: ''
// // // };

// // // const Form = () => {
// // //   const [showTextField, setShowTextField] = useState(false);
// // //   const [addNote, setAddNote] = useState({ ...note, id: uuid() });

// // //   // Step 1: Create history state variables and a pointer to the current position in history.
// // //   const [history, setHistory] = useState([addNote]);
// // //   const [historyPointer, setHistoryPointer] = useState(0);

// // //   const { setNotes } = useContext(DataContext);
// // //   const containerRef = useRef();

// // //   const handleClickAway = () => {
// // //     setShowTextField(false);
// // //     containerRef.current.style.minheight = '30px';
// // //     setAddNote({ ...note, id: uuid() });

// // //     if (addNote.heading || addNote.text) {
// // //       // When a new note is added, clear the history after the current position.
// // //       setHistory(history.slice(0, historyPointer + 1));
// // //       setHistoryPointer(historyPointer + 1);
// // //       setHistory(prevHistory => [...prevHistory, addNote]);
// // //       setNotes(prevArr => [addNote, ...prevArr]);
// // //     }
// // //   };

// // //   const onTextAreaClick = () => {
// // //     setShowTextField(false);
// // //     containerRef.current.style.minheight = '70px';
// // //   };

// // //   const onTextChange = (e) => {
// // //     let changedNote = { ...addNote, [e.target.name]: e.target.value };
// // //     setAddNote(changedNote);

// // //     // Step 3: Update the history whenever the input fields change.
// // //     setHistory(prevHistory => [...prevHistory.slice(0, historyPointer + 1), changedNote]);
// // //     setHistoryPointer(historyPointer + 1);
// // //   };

// // //   // Step 2: Implement undo and redo functions to navigate through the history.
// // //   const handleUndo = () => {
// // //     if (historyPointer > 0) {
// // //       setHistoryPointer(historyPointer - 1);
// // //       setAddNote(history[historyPointer - 1]);
// // //     }
// // //   };

// // //   const handleRedo = () => {
// // //     if (historyPointer < history.length - 1) {
// // //       setHistoryPointer(historyPointer + 1);
// // //       setAddNote(history[historyPointer + 1]);
// // //     }
// // //   };

// // //   return (
// // //     <ClickAwayListener onClickAway={handleClickAway}>
// // //       <Container ref={containerRef}>
// // //         {showTextField && (
// // //           <TextField
// // //             placeholder="Title"
// // //             variant="standard"
// // //             InputProps={{ disableUnderline: true }}
// // //             style={{ marginBottom: 10 }}
// // //             onChange={(e) => onTextChange(e)}
// // //             name="heading"
// // //             value={addNote.heading}
// // //           />
// // //         )}
// // //         <TextField
// // //           placeholder="Take a note..."
// // //           multiline
// // //           maxRows={Infinity}
// // //           variant="standard"
// // //           InputProps={{ disableUnderline: true }}
// // //           onClick={onTextAreaClick}
// // //           onChange={(e) => onTextChange(e)}
// // //           name="text"
// // //           value={addNote.text}
// // //         />
// // //         {/* Step 4: Add undo and redo buttons below the input form. */}
// // //         <Box> <Button style={{width:'100px' , borderRadius:'30px', color:''}} onClick={handleUndo}>Undo</Button>
// // //         <Button style={{width:'100px' , borderRadius:'30px', color:''}} onClick={handleRedo}>Redo</Button></Box>
// // //       </Container>
// // //     </ClickAwayListener>
// // //   );
// // // };

// // // export default Form;



// // import { useState, useRef, useContext } from 'react';

// // import { Box, TextField, ClickAwayListener, Button } from '@mui/material';
// // import { styled } from '@mui/material/styles';
// // import { v4 as uuid } from 'uuid';

// // import { DataContext } from '../../context/DataProvider';

// // const Container = styled(Box)`
// //   display: flex;
// //   flex-direction: column;
// //   margin: auto;
// //   box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
// //   border-color: #e0e0e0;
// //   width: 600px;
// //   border-radius: 8px;
// //   min-height: 30px;
// //   padding: 10px 15px;
// // `;

// // const note = {
// //   id: '',
// //   heading: '',
// //   text: ''
// // };

// // const Form = () => {
// //   const [showTextField, setShowTextField] = useState(false);
// //   const [addNote, setAddNote] = useState({ ...note, id: uuid() });

// //   const [history, setHistory] = useState([addNote]);
// //   const [historyPointer, setHistoryPointer] = useState(0);

// //   const { setNotes } = useContext(DataContext);
// //   const containerRef = useRef();

// //   const handleClickAway = () => {
// //     setShowTextField(false);
// //     containerRef.current.style.minheight = '30px';
// //     setAddNote({ ...note, id: uuid() });

// //     if (addNote.heading || addNote.text) {
// //       setHistory(history.slice(0, historyPointer + 1));
// //       setHistoryPointer(historyPointer + 1);
// //       setHistory(prevHistory => [...prevHistory, addNote]);
// //       setNotes(prevArr => [addNote, ...prevArr]);
// //     }
// //   };

// //   const onTextAreaClick = () => {
// //     setShowTextField(false);
// //     containerRef.current.style.minheight = '70px';
// //   };

// //   const onTextChange = (e) => {
// //     let changedNote = { ...addNote, [e.target.name]: e.target.value };
// //     setAddNote(changedNote);
// //     setHistory(prevHistory => [...prevHistory.slice(0, historyPointer + 1), changedNote]);
// //     setHistoryPointer(historyPointer + 1);
// //   };

// //   const handleUndo = () => {
// //     if (historyPointer > 0) {
// //       setHistoryPointer(historyPointer - 1);
// //       setAddNote(history[historyPointer - 1]);
// //     }
// //   };

// //   const handleRedo = () => {
// //     if (historyPointer < history.length - 1) {
// //       setHistoryPointer(historyPointer + 1);
// //       setAddNote(history[historyPointer + 1]);
// //     }
// //   };

// //   // Step 1: Implement delete and refresh functions.
// //   const handleDelete = () => {
// //     setAddNote({ ...note, id: uuid() });
// //     setHistory([note]);
// //     setHistoryPointer(0);
// //   };

// //   const handleRefresh = () => {
// //     setAddNote({ ...note });
// //   };

// //   return (
// //     <ClickAwayListener onClickAway={handleClickAway}>
// //       <Container ref={containerRef}>
// //         {showTextField && (
// //           <TextField
// //             placeholder="Title"
// //             variant="standard"
// //             InputProps={{ disableUnderline: true }}
// //             style={{ marginBottom: 10 }}
// //             onChange={(e) => onTextChange(e)}
// //             name="heading"
// //             value={addNote.heading}
// //           />
// //         )}
// //         <TextField
// //           placeholder="Take a note..."
// //           multiline
// //           maxRows={Infinity}
// //           variant="standard"
// //           InputProps={{ disableUnderline: true }}
// //           onClick={onTextAreaClick}
// //           onChange={(e) => onTextChange(e)}
// //           name="text"
// //           value={addNote.text}
// //         />

// //         {/* Step 2: Add undo and redo buttons below the input form. */}
// //         <Box>
// //           <Button style={{width:'100px' , borderRadius:'30px', backgroundColor:'#c7defa' ,margin: "2px"}} onClick={handleUndo}>Undo</Button>
// //           <Button style={{width:'100px' , borderRadius:'30px', backgroundColor:'#c7defa' ,margin: "2px"}} onClick={handleRedo}>Redo</Button>
// //           <Button style={{width:'100px' , borderRadius:'30px', backgroundColor:'#c7defa' ,margin: "2px"}} onClick={handleDelete}>Delete</Button>
// //           <Button style={{width:'100px' , borderRadius:'30px', backgroundColor:'#c7defa' ,margin: "2px"}} onClick={handleRefresh}>Refresh</Button>
// //         </Box>
// //         {/* Step 2: Add delete and refresh buttons */}
// //       </Container>
// //     </ClickAwayListener>
// //   );
// // };

// // export default Form;



// import { useState, useEffect, useRef, useContext } from 'react';

// import { Box, TextField, ClickAwayListener, Button } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { v4 as uuid } from 'uuid';

// import { DataContext } from '../../context/DataProvider';

// const Container = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   margin: auto;
//   box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
//   border-color: #e0e0e0;
//   width: 600px;
//   border-radius: 8px;
//   min-height: 30px;
//   padding: 10px 15px;
// `;

// const note = {
//   id: '',
//   heading: '',
//   text: ''
// };

// const Form = () => {
//   const [showTextField, setShowTextField] = useState(false);
//   const [addNote, setAddNote] = useState({ ...note, id: uuid() });

//   const [history, setHistory] = useState([addNote]);
//   const [historyPointer, setHistoryPointer] = useState(0);

//   const { setNotes } = useContext(DataContext);
//   const containerRef = useRef();

//   // Step 1: Add state to store the live time.
//   const [liveTime, setLiveTime] = useState(new Date());

//   const handleClickAway = () => {
//     setShowTextField(false);
//     containerRef.current.style.minheight = '30px';
//     setAddNote({ ...note, id: uuid() });

//     if (addNote.heading || addNote.text) {
//       setHistory(history.slice(0, historyPointer + 1));
//       setHistoryPointer(historyPointer + 1);
//       setHistory(prevHistory => [...prevHistory, addNote]);
//       setNotes(prevArr => [addNote, ...prevArr]);
//     }
//   };

//   const onTextAreaClick = () => {
//     setShowTextField(false);
//     containerRef.current.style.minheight = '70px';
//   };

//   const onTextChange = (e) => {
//     let changedNote = { ...addNote, [e.target.name]: e.target.value };
//     setAddNote(changedNote);
//     setHistory(prevHistory => [...prevHistory.slice(0, historyPointer + 1), changedNote]);
//     setHistoryPointer(historyPointer + 1);
//   };

//   const handleUndo = () => {
//     if (historyPointer > 0) {
//       setHistoryPointer(historyPointer - 1);
//       setAddNote(history[historyPointer - 1]);
//     }
//   };

//   const handleRedo = () => {
//     if (historyPointer < history.length - 1) {
//       setHistoryPointer(historyPointer + 1);
//       setAddNote(history[historyPointer + 1]);
//     }
//   };

//   const handleDelete = () => {
//     setAddNote({ ...note, id: uuid() });
//     setHistory([note]);
//     setHistoryPointer(0);
//   };

//   const handleRefresh = () => {
//     setAddNote({ ...note });
//   };

//   // Step 2: Use useEffect to update the live time every second.
//   useEffect(() => {
//     const timer = setInterval(() => setLiveTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <ClickAwayListener onClickAway={handleClickAway}>
//       <Container ref={containerRef}>
//         {showTextField && (
//           <TextField
//             placeholder="Title"
//             variant="standard"
//             InputProps={{ disableUnderline: true }}
//             style={{ marginBottom: 10 }}
//             onChange={(e) => onTextChange(e)}
//             name="heading"
//             value={addNote.heading}
//           />
//         )}
//         <TextField
//           placeholder="Take a note..."
//           multiline
//           maxRows={Infinity}
//           variant="standard"
//           InputProps={{ disableUnderline: true }}
//           onClick={onTextAreaClick}
//           onChange={(e) => onTextChange(e)}
//           name="text"
//           value={addNote.text}
//         />
//        <Box>
//           <Button style={{width:'100px' , borderRadius:'30px', backgroundColor:'#c7defa' ,margin: "2px"}} onClick={handleUndo}>Undo</Button>
//           <Button style={{width:'100px' , borderRadius:'30px', backgroundColor:'#c7defa' ,margin: "2px"}} onClick={handleRedo}>Redo</Button>
//           <Button style={{width:'100px' , borderRadius:'30px', backgroundColor:'#c7defa' ,margin: "2px"}} onClick={handleDelete}>Delete</Button>
//           <Button style={{width:'100px' , borderRadius:'30px', backgroundColor:'#c7defa' ,margin: "2px"}} onClick={handleRefresh}>Refresh</Button>
//           <p style={{width:'100px' , borderRadius:'30px', backgroundColor:'#c7defa' ,margin: "2px", padding:'8px', textAlign:'center'}}>{liveTime.toLocaleTimeString()}</p>
//          </Box>
//         {/* Step 3: Display the live time */}
//       </Container>
//     </ClickAwayListener>
//   );
// };

// export default Form;


import { useState, useEffect, useRef, useContext } from 'react';
import { Box, TextField, ClickAwayListener, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { v4 as uuid } from 'uuid';
import { DataContext } from '../../context/DataProvider';
import { Undo as UndoIcon, Redo as RedoIcon, Delete as DeleteIcon, Refresh as RefreshIcon } from '@mui/icons-material';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-color: #e0e0e0;
  width: 600px;
  border-radius: 8px;
  min-height: 30px;
  padding: 10px 15px;
`;

const note = {
  id: '',
  heading: '',
  text: ''
};

const Form = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });

  const [history, setHistory] = useState([addNote]);
  const [historyPointer, setHistoryPointer] = useState(0);

  const { setNotes } = useContext(DataContext);
  const containerRef = useRef();

  const [liveTime, setLiveTime] = useState(new Date());

  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minheight = '30px';
    setAddNote({ ...note, id: uuid() });

    if (addNote.heading || addNote.text) {
      setHistory(history.slice(0, historyPointer + 1));
      setHistoryPointer(historyPointer + 1);
      setHistory(prevHistory => [...prevHistory, addNote]);
      setNotes(prevArr => [addNote, ...prevArr]);
    }
  };

  const onTextAreaClick = () => {
    setShowTextField(false);
    containerRef.current.style.minheight = '70px';
  };

  const onTextChange = (e) => {
    let changedNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(changedNote);
    setHistory(prevHistory => [...prevHistory.slice(0, historyPointer + 1), changedNote]);
    setHistoryPointer(historyPointer + 1);
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

  const handleRefresh = () => {
    setAddNote({ ...note });
  };

  useEffect(() => {
    const timer = setInterval(() => setLiveTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            onChange={(e) => onTextChange(e)}
            name="heading"
            value={addNote.heading}
          />
        )}
        <TextField
          placeholder="Take a note..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={onTextAreaClick}
          onChange={(e) => onTextChange(e)}
          name="text"
          value={addNote.text}
        />

        <Box>
          <Button style={{ width: '30px', borderRadius: '30px', backgroundColor: '#c7defa', margin: "2px" }} onClick={handleUndo}>
            <UndoIcon /> 
          </Button>
          <Button style={{ width: '30px', borderRadius: '30px', backgroundColor: '#c7defa', margin: "2px" }} onClick={handleRedo}>
            <RedoIcon />
          </Button>
          <Button style={{ width: '30px', borderRadius: '30px', backgroundColor: '#c7defa', margin: "2px" }} onClick={handleDelete}>
            <DeleteIcon />
          </Button>
          <Button style={{ width: '30px', borderRadius: '30px', backgroundColor: '#c7defa', margin: "2px" }} onClick={handleRefresh}>
            <RefreshIcon />
          </Button>
          <p style={{ width: '100px', borderRadius: '30px', backgroundColor: '#c7defa', margin: "2px", padding: '8px', textAlign: 'center' }}>
            {liveTime.toLocaleTimeString()}
          </p>
        </Box>
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
