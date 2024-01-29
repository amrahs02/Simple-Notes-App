import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const EmptyNotes = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <DeleteIcon className=" text-center text-gray-500" />
      <p className="text-gray-500 mb-2">No notes in Trash</p>
    </div>
  );
};

export default EmptyNotes;
