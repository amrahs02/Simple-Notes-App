// components/notes/Favourites.jsx

import React, { useContext } from "react";
import { Box } from "@mui/material";
import { DataContext } from "../../context/DataProvider";
import Note from "../notes/Note";

const Favourites = () => {
  const { favoriteNotes, setFavoriteNotes } = useContext(DataContext);

  const handleToggleFavorite = (note) => {
    setFavoriteNotes((prevArr) => prevArr.filter((item) => item.id !== note.id));
  };

  return (
    <div className="sm:w-1/2 border w-full border-gray-700 rounded-xl m-2">
      <h2 className="text-xl font-bold text-blue-500 text-center  m-4">Favorites</h2>
      {favoriteNotes.length > 0 ? (
        <div className="m-2 w-fit flex flex-row flex-wrap text-green-500 justify-center items-center">
          {favoriteNotes.map((note) => (
            <div className="m-2 w-fit text-green-500" key={`favorite-${note.id}`}>
              {/* Pass onToggleFavorite callback to handle unfavorite action */}
              <Note note={note} showDelete={false} className="bg-green-500" onToggleFavorite={handleToggleFavorite} />
            </div>
          ))}
        </div>
      ) : (
        <p className="m-4">No favorites yet.</p>
      )}
    </div>
  );
};

export default Favourites;
