

    // import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
    // import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
    // import { Link } from 'react-router-dom';

    // const NavList = () => {

    //     const navList = [
    //         { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
    //         { id: 2, name: 'Archives', icon: <Archive />, route: '/archive' },
    //         { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' },
    //     ]
        
    //     return (
    //         <List>
    //         {
    //             navList.map(list => (
    //                 <ListItem button key={list.id} style={{ textDecoration: 'none', display: 'flex', color: 'inherit', borderRadius:"30px"}}>
    //                     <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
    //                         <ListItemIcon style={{ alignItems: 'center'}}>
    //                             {list.icon}
    //                         </ListItemIcon>
    //                         <ListItemText primary={list.name} />
    //                     </Link>
    //                 </ListItem>
    //             ))
    //         }
    //         </List>
    //     )
    // }

    // export default NavList;


import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavList = () => {

    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
        { id: 2, name: 'Archives', icon: <Archive />, route: '/archive' },
        { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' },
    ]

    return (
        <List>
            {navList.map(list => (
                <ListItem
                    button
                    key={list.id}
                    style={{
                        textDecoration: 'none',
                        display: 'flex',
                        color: 'inherit',
                        borderRadius: '30px',
                        transition: 'background-color 0.3s', // Add a smooth transition
                    }}
                    // Add :hover rule to change background color on hover
                    sx={{
                        '&:hover': {
                            backgroundColor: '#8B4513', // Set your desired hover background color here
                        },
                    }}
                >
                    <Link to={list.route} style={{ textDecoration: 'none', display: 'flex', color: 'inherit' }}>
                        <ListItemIcon style={{ alignItems: 'center' }}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} />
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}

export default NavList;
