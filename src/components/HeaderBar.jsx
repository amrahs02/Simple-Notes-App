import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";


const Header = styled(AppBar)`
  z-index: 1201;
  height: 70px;
`;

const Heading = styled(Typography)`
  color: white;
  font-size: 24px;
  margin: auto;
`;

const HeaderBar = ({ open, handleDrawer }) => {
  const location = useLocation();
  const pathname = location.pathname;

  let HeadText = "Notes";
  if (pathname === "/archive") {
    HeadText = "Archive";
  } else if (pathname === "/note") {
    HeadText = "Keep";
  } else if (pathname === "/delete") {
    HeadText = "Trash";
  } else if (pathname === "/you") {
    HeadText = "Profile";
  }



  return (
    <Header open={open}>
      <Toolbar>
        <Heading>{HeadText}</Heading>
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;
