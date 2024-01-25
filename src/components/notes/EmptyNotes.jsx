import React from "react";
import { Lightbulb } from "@mui/icons-material";

const EmptyNotes = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Lightbulb className="text-4xl text-center w-full text-gray-500" />
      <p className="text-gray-500">Notes you add appear here</p>
      <p className="text-gray-500 mb-2">Click away from textfield to 
        <span className="text-green-300"> save</span> note
      </p>
    </div>
  );
};

export default EmptyNotes;
