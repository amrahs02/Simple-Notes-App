import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 24px;
  margin-left: 25px;
`;

const HeaderBar = ({ open, handleDrawer }) => {
  const location = useLocation();
  let logo =
    "https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png";
  const pathname = location.pathname;

  let HeadText = "Keep";
  if (pathname === "/archive") {
    HeadText = "Archive";
    // logo = "";
  } else if (pathname === "/note") {
    HeadText = "Keep";
    // logo = "";
  } else if (pathname === "/delete") {
    HeadText = "Trash";
    // logo = "";
  }

  const [liveTime, setLiveTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setLiveTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: "20px" }}
          edge="start"
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="logo" style={{ width: 30 }} />
        <Heading>{HeadText}</Heading>
        <Box
          style={{
            width: "180px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            color: "black",
            right: "0",
            top: "0",
            borderRadius: "20px",
            backgroundColor: "#F5F5DC",
            margin: "10px",
            textAlign: "center",
          }}
        >
          <img
            src="/profile-pic_3.png"
            alt="profile"
            style={{
              width: "30px",
              borderRadius: "30px",
              margin: "10px",
            }}
          />
          <p
            style={{
              width: "100px",
              margin: "10px",
            }}
          >
            {liveTime.toLocaleTimeString()}
          </p>
        </Box>
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;

// const Heading = styled(Typography)`
//   color: #5F6368;
//   font-size: 24px;
//   margin-left: 25px;
// `

// const HeaderBar = ({ open, handleDrawer }) => {
//   const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
//   const HeadText = "Keep";

//   return (
//     <Header open={open}>
//       <Toolbar>
//         <IconButton
//           onClick={() => handleDrawer()}
//           sx={{ marginRight: '20px'}}
//           edge="start"
//         >
//           <Menu />
//         </IconButton>
//         <img src={logo} alt="logo" style={{width: 30}} />
//         <Heading src={HeadText}/>
//       </Toolbar>
//     </Header>
//   )
// }

// export default HeaderBar;
