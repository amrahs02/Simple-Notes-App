
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`


const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
`

const HeaderBar = ({ open, handleDrawer }) => {
  const location = useLocation();
  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
  const pathname = location.pathname;


  let HeadText = 'Keep';
  if (pathname === '/archive') {
    HeadText = 'Archive';
  } else if (pathname === '/note') {
    HeadText = 'Keep';
  } else if (pathname === '/delete') {
    HeadText = 'Trash';
  }




  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: '20px'}}
          edge="start"
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="logo" style={{width: 30}} />
        <Heading>{HeadText}</Heading>
      </Toolbar>
    </Header>
  )
}

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
