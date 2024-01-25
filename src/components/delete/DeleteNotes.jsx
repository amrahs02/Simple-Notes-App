import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteNote from "./DeleteNote";
import EmptyDeletedNotes from "./EmptyDeletedNotes";
import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deleteNotes } = useContext(DataContext);

  return (
    <div className=" text-white sm:w-1/2 w-full rounded-xl  border border-gray-700  ">
      <h2 className="text-xl font-bold text-blue-500 text-center m-2" >Trash</h2>
      {deleteNotes.length > 0 ? (
        <div className="">
          {deleteNotes.map((deleteNote) => (
            <div key={deleteNote.id} className="m-2 delete-notes-grid">
              <DeleteNote deleteNote={deleteNote} />
            </div>
          ))}
        </div>
      ) : (
        <EmptyDeletedNotes />
      )}
    </div>
  );
};

export default DeleteNotes;
