// context/DataProvider.js

import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  const storedArchiveNotes = JSON.parse(localStorage.getItem("archiveNotes")) || [];
  const storedDeleteNotes = JSON.parse(localStorage.getItem("deleteNotes")) || [];
  const storedFavoriteNotes = JSON.parse(localStorage.getItem("favoriteNotes")) || [];

  const [notes, setNotes] = useState(storedNotes);
  const [archiveNotes, setArchiveNotes] = useState(storedArchiveNotes);
  const [deleteNotes, setDeleteNotes] = useState(storedDeleteNotes);
  const [favoriteNotes, setFavoriteNotes] = useState(storedFavoriteNotes);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));
  }, [archiveNotes]);

  useEffect(() => {
    localStorage.setItem("deleteNotes", JSON.stringify(deleteNotes));
  }, [deleteNotes]);

  useEffect(() => {
    localStorage.setItem("favoriteNotes", JSON.stringify(favoriteNotes));
  }, [favoriteNotes]);

  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setArchiveNotes,
        deleteNotes,
        setDeleteNotes,
        favoriteNotes,
        setFavoriteNotes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
