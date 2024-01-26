import React, { useContext } from "react";
import DeleteNote from "./DeleteNote";
import EmptyDeletedNotes from "./EmptyDeletedNotes";
import { DataContext } from "../../context/DataProvider";



const DeleteNotes = () => {
  const { deleteNotes } = useContext(DataContext);

  return (
    <div className=" text-white sm:w-1/2 w-full rounded-xl overflow-y-auto  border border-gray-700  ">
      <h2 className="te xt-xl font-bold text-blue-500 text-center m-2" >Trash</h2>
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
