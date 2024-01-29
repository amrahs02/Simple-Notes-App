import React, { useContext } from "react";
import DeleteNote from "./DeleteNote";
import EmptyDeletedNotes from "./EmptyDeletedNotes";
import { DataContext } from "../../context/DataProvider";



const DeleteNotes = () => {
  const { deleteNotes } = useContext(DataContext);

  return (
    <>
      <h2 className="text-xl font-bold text-blue-500 text-center m-4" >Trash</h2>
      <div className=" text-white sm:w-1/2 w-full mb-16 rounded-xl overflow-y-auto border border-gray-700">
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
    </>
  );
};

export default DeleteNotes;
