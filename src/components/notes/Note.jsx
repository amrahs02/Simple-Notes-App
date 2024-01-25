// components/notes/Note.jsx

import { useContext } from "react";
import { CardContent, CardActions, Typography } from "@mui/material";
import { Delete, Favorite } from "@mui/icons-material";
import { DataContext } from "../../context/DataProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Note = ({ note, showDelete = true, onToggleFavorite }) => {
  const { notes, setNotes, setDeleteNotes, setFavoriteNotes } = useContext(DataContext);

  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeleteNotes((prevArr) => [note, ...prevArr]);

    // Show toast notification
    toast.success('Note deleted successfully!');
  };

  const toggleFavorite = (note) => {
    if (note.isFavorite) {
      // If already a favorite, remove from favorites
      const updatedNotes = notes.map((data) =>
        data.id === note.id ? { ...data, isFavorite: false } : data
      );
      setNotes(updatedNotes);
      setFavoriteNotes((prevArr) => prevArr.filter((item) => item.id !== note.id));

      // Show toast notification
      toast.info('Note removed from favorites!');
    } else {
      // If not a favorite, add to favorites
      const updatedNotes = notes.map((data) =>
        data.id === note.id ? { ...data, isFavorite: true } : data
      );
      setNotes(updatedNotes);
      setFavoriteNotes((prevArr) => [note, ...prevArr]);

      // Show toast notification
      toast.success('Note added to favorites!');
    }

    if (onToggleFavorite) {
      onToggleFavorite(note);
    }
  };

  return (
    <div className="rounded-lg flex justify-center items-center bg-gray-800 border border-gray-700 text-gray-300 m-2">
      <CardContent>
        <Typography className="font-bold text-blue-500 capitalize">{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions className="p-4  m-4">
        <Favorite
          className={`cursor-pointer ml-2 ${note.isFavorite ? "text-green-500" : "text-gray-500"}`}
          fontSize="small"
          onClick={() => toggleFavorite(note)}
        />
        {showDelete && (
          <Delete
            className="cursor-pointer ml-2"
            fontSize="small"
            onClick={() => deleteNote(note)}
          />
        )}
      </CardActions>
    </div>
  );
};

export default Note;
