import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FiAlignCenter } from "react-icons/fi";
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import InfoIcon from '@mui/icons-material/Info';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CollectionsIcon from '@mui/icons-material/Collections';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { Link } from 'react-router-dom';




export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const data = [
    {
        Name:'Home',
        icon:<HomeIcon />
    },
    {
        Name:'Manu',
        icon:<FormatListBulletedIcon />

    },
    {
        Name:'Contact',
        icon:<AddIcCallIcon />
    },
    {
        Name:'About',
        icon:<InfoIcon />
    },
    {
        Name:'Service',
        icon:<MiscellaneousServicesIcon />
    },
    {
        Name:'Booking',
        icon:<BookmarkBorderIcon />
    },
    {
        Name:'Collection',
        icon:<CollectionsIcon />
    },
  ]

  const list = (anchor) => (
    <Box 
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : {xs:185 , sm:250} }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      
    >
      
      <List >
        {data.map((el, index) => (
        <Link to={`/${el.Name}`} >
          <ListItem key={el.text} disablePadding sx={{color:'#22223b'}}>
            <ListItemButton>
              <ListItemIcon>
                {el.icon}
              </ListItemIcon>
              <ListItemText primary={el.Name} />
            </ListItemButton>
          </ListItem>
        </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <Box >
        <React.Fragment  >
          <Button onClick={toggleDrawer('right', true)}  sx={{minWidth:'10px',color:'#f2e9e4'}}><FiAlignCenter /></Button>
          <Drawer

            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}


          </Drawer>
          <Box>
        </Box>
        </React.Fragment>
        </Box>
     
    </div>
  );
}
