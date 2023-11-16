import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, useMediaQuery} from "@mui/material";
import BottomNav from './BottomNav';
import HeaderBar from "./HeaderBar";
import SwipeDrawer from "./SwipeDrawer";
import Notes from "./notes/Notes";
import Archives from "./archives/Archives";
import DeleteNotes from "./delete/DeleteNotes";
import You from "./Profile/You";

const Home = () => {
  const isMobile = useMediaQuery('(max-width:750px)');

  return (
    <Box style={{ display: "flex", width: "100%", backgroundColor: '#263238' }}>
      <Router>
        <HeaderBar />
        {isMobile ? <BottomNav /> : <SwipeDrawer />}
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/delete" element={<DeleteNotes />} />
          <Route path="/you" element={<You />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default Home;
