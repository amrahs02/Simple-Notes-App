import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Archive, Delete, Notes, Person2 } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavList = () => {

  const navList = [
    { id: 1, name: 'Notes', icon: <Notes />, route: '/' },
    { id: 2, name: 'Archives', icon: <Archive />, route: '/archive' },
    { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' },
    { id: 4, name: 'You', icon: <Person2 />, route: '/you' },
  ]
  const ListItemStyle = {
    textDecoration: 'none',
    display: 'flex',
    color: 'white',
    marginTop: '2px',
    borderRadius: "30px"

  }

  const LinkStyle = {
    textDecoration: 'none',
    display: 'flex',
    color: 'inherit'
  }

  const NavListStyle = {
    backgroundColor: '#263248',
    width: '280px',
    marginTop: '70px',
    height: '100%'
  }
  const ListItemTextStyle = {

  }


  return (
    <List style={NavListStyle}>{
      navList.map(list => (
        <ListItem key={list.id} style={ListItemStyle}>
          <Link to={`${list.route}`} style={LinkStyle}>
            <ListItemIcon style={{
              alignItems: 'center',
              color: 'white'
            }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText style={ListItemTextStyle} primary={list.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

export default NavList;
