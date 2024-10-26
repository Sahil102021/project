import { React, useRef, useState } from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Typography, Button, Menu, MenuItem, Avatar, Grid2, ButtonGroup, InputBase, Badge, colors } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchBtn from './Search';
import useOutsideClick from './useOutsideClick';
import { Link } from 'react-router-dom';
import { FiAlignCenter } from "react-icons/fi";
import SideNavbar from './SideNavbar';


// Button style for underlining on hover
const btn1 = {
  textTransform: 'capitalize',
  fontSize: '14px',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden', // Ensures the line stays within the button boundaries
  '&:before': {
    content: '""',
    display: 'block',
    height: '1px',
    backgroundColor: '#fff',
    position: 'absolute',
    top: '0%', // Adjust this value as needed
    left: '50%', // Center the line
    transform: 'translateX(-50%)', // Center the line
    transition: 'width 0.5s', // Animate the width
    width: '0', // Start with zero width
  },
  '&:hover:before': {
    width: '75px', // Expand to full width on hover
  },
  '&:focus:before': {
    width: '75px', // Expand to full width on hover
  }
};




const Navbar = () => {

    const dropdownRef1 = useRef(null);
    const [isOpen,setIsOpen] = useOutsideClick(dropdownRef1,false);
    let handleOpen = () => setIsOpen(!isOpen);


    // Mani Manu
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

  return (
    <div>
      <AppBar sx={{ backdropFilter: { xs: 'blur(15px)', sm: 'none' }, backgroundColor: { xs: '#4a4e69d4', sm: 'transparent' }, marginTop: { xs: '0', sm: '10px' }, boxShadow: 'none' }}>
        <Toolbar sx={{}}>
          <Box sx={{ width: '100%', height: { xs: '30px', sm: '40px', md: '50px' }, padding: { xs: '2.5px', sm: '5px' }, borderRadius: { xs: '0', sm: '50px' }, backdropFilter:{xs:'none',sm:'blur(15px)'},boxShadow:{xs:'none',sm:'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}, border: { sm: '0.5px ' } }}>

            {/* Main Grid */}
            <Grid2 container spacing={1} sx={{ height: { xs: '30px', sm: '40px', md: '50px' }, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

              {/* Logo */}
              <Grid2 size={2}>
                <Box sx={{ pl: { xs: '0', sm: '10px' }, fontWeight: '700', fontSize: { xs: '16px', sm: '22px' } }}>
                  <p className='t1'>NextCar</p>
                </Box>
              </Grid2>

              {/* Main Menu */}
              <Grid2 size={{xs:'4',sm:'4',md:'6'}}>
                <Box
                  sx={{
                    display: { xs: 'none', sm: 'none', md: 'flex' },
                    flexDirection: 'column',
                    justifyContent: 'left',
                  }}>
                  <ButtonGroup variant='none' sx={{ textTransform: 'capitalize' }} aria-label="Basic button group">
                    <Link to="/Home"><Button variant='small' sx={btn1}>Home</Button></Link>
                    <Button variant='small' sx={btn1} ref={dropdownRef} onClick={onClick}>Main Manu</Button>

                    {/* Dropdown menu */}
                    <Box
                      className={`${isActive ? "active" : "inactive"}`} 
                      sx={{
                        display: isActive ? 'flex' : 'none',
                        width: { md: '400px', lg: '600px' },
                        height: 'auto',
                        flexDirection: 'row',
                        gap: '5px',
                        position: 'absolute',
                        top: '100%',
                        border: '1px solid #fff',
                        transition: 'opacity 0.5s ease', // Smooth transition
                      }}
                    >
                      <ul className='t2'>
                        <Link to="/Home"><li>Home</li></Link>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>About</li>
                      </ul>
                      <ul className='t2'>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                        <li>Item 5</li>
                      </ul>
                      <ul className='t2'>
                        <li>Link A</li>
                        <li>Link B</li>
                        <li>Link C</li>
                        <li>Link D</li>
                        <li>Link E</li>
                      </ul>
                    </Box>

                    <Link to="/About"><Button variant='small' sx={btn1}>About</Button></Link>
                    <Button variant='small' sx={btn1}>Explore</Button>
                    <Button variant='small' sx={btn1}>New Car</Button>
                    <Button variant='small' sx={btn1}>Used Car</Button>
                  </ButtonGroup>
                </Box>
              </Grid2>

              {/* Icons */}
              <Grid2 size={{xs:'6',sm:'6',md:'4'}}>
                <Box sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#fff'
                }}>
                  <Box sx={{
                    width: '100%',
                    display: 'flex',
                    gap: { xs: '5px', sm: '15px' },
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Badge  sx={{ width: { xs: '20px', sm: '30px' }, height: { xs: '20px', sm: '30px' }, border: '1px solid #e0e1dd', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.3s ', '&:hover': { backgroundColor: '#e0e1dd', color: '#1b263b' } }}>
                      <SearchBtn />
                    </Badge>
                    <Badge badgeContent={4} color="primary" sx={{ width: { xs: '20px', sm: '30px' }, height: { xs: '20px', sm: '30px' }, border: '1px solid #e0e1dd', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.3s ', '&:hover': { backgroundColor: '#e0e1dd', color: '#1b263b' } }}>
                      <NotificationsIcon sx={{ fontSize: { xs: '12px', sm: '16px' } }} />
                    </Badge>
                    <Badge badgeContent={4} color="primary" sx={{ width: { xs: '20px', sm: '30px' }, height: { xs: '20px', sm: '30px' }, border: '1px solid #e0e1dd', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.3s ', '&:hover': { backgroundColor: '#e0e1dd', color: '#1b263b' } }}>
                      <CallIcon sx={{ fontSize: { xs: '12px', sm: '16px' } }} />
                    </Badge>
                    <Badge badgeContent={4} color="primary" sx={{ width: { xs: '20px', sm: '30px' }, height: { xs: '20px', sm: '30px' }, border: '1px solid #e0e1dd', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.3s ', '&:hover': { backgroundColor: '#e0e1dd', color: '#1b263b' } }}>
                      <AddLocationIcon sx={{ fontSize: { xs: '12px', sm: '16px' } }} />
                    </Badge>
                    <Box sx={{ width: { xs: '20px', sm: '30px' }, height: { xs: '20px', sm: '30px' }, border: '1px solid #e0e1dd', borderRadius: '50%', display: {xs:'flex',sm:'flex',md:'none'}, justifyContent: 'center', alignItems: 'center', transition: '0.3s', '&:hover': { backgroundColor: '#e0e1dd', color: '#1b263b' } }}>
                      <SideNavbar  />
                    </Box>
                  </Box>
                </Box>
              </Grid2>

            </Grid2>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )};
  export default Navbar;
