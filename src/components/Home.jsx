// components/Home.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import NavList from "./NavList";
import BottomNav from "./BottomNav";
import Notes from "./notes/Notes";
import DeleteNotes from "./delete/DeleteNotes";
import You from "./Profile/You";
import Favourites from "./favourite/Favourites"; // Import the Favourites component
import Switcher from "../darkmode/Switcher";

const Home = () => {
  const isMobile = useMediaQuery("(max-width:750px)");

  return (
    <Box className="dark:bg-gray-100 dark:text-gray-200 bg-dark-gray h-screen p-2 text-gray-200 flex border border-gray-700 items-center flex-col">

      <Router>
        {isMobile ? <BottomNav /> : <NavList />}
        <div className=" border border-gray-700 w-full rounded-xl p-2 flex justify-between items-center sm:hidden" >
          <p className="text-gray-400 dark:text-gray-700 text-md " >Your Personal Notes</p>
          {isMobile ? <Switcher /> : <Switcher />}
        </div>

        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/delete" element={<DeleteNotes />} />
          <Route path="/you" element={<You />} />
          <Route path="/favourites" element={<Favourites />} /> {/* Add Favourites route */}
        </Routes>
      </Router>
    </Box>
  );
};

export default Home;
