import React from "react";
import { Lightbulb } from "@mui/icons-material";

const EmptyNotes = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Lightbulb className="text-4xl text-center w-full text-gray-500" />
      <p className="text-gray-500">Notes you add appear here</p>
      <p className="text-gray-500 text-sm text-center mb-2">Click away from textfield
        or press enter to save notes
      </p>
    </div>
  );
};

export default EmptyNotes;
