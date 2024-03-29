// components/notes/Favourites.jsx

import React, { useContext } from "react";
import { Box } from "@mui/material";
import { DataContext } from "../../context/DataProvider";
import Note from "../notes/Note";
import { Favorite } from "@mui/icons-material";

const Favourites = () => {
  const { favoriteNotes, setFavoriteNotes } = useContext(DataContext);

  const handleToggleFavorite = (note) => {
    setFavoriteNotes((prevArr) => prevArr.filter((item) => item.id !== note.id));
  };

  return (
    <>
      <h2 className=" text-xl font-bold text-blue-500 text-center  m-4">Favorites</h2>
      <div className="dark:bg-gray-100 dark:text-gray-700 sm:w-3/5 border w-full mb-16 border-gray-700 overflow-y-auto rounded-xl ">
        {favoriteNotes.length > 0 ? (
          <div className="">
            {favoriteNotes.map((note) => (
              <div className=" text-green-500" key={`favorite-${note.id}`}>
                {/* Pass onToggleFavorite callback to handle unfavorite action */}
                <Note note={note} showDelete={false} className="bg-green-500" onToggleFavorite={handleToggleFavorite} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Favorite fontSize="medium" className="text-2xl text-center text-gray-500" />
            <p className="text-gray-500 mb-2">No favourites yet</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Favourites;
