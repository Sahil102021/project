import React from 'react'
import { Box, Button, Container, Grid2, Paper, Typography } from '@mui/material';
import HeroVideo from '../video/HeroVideo2.mp4';
import Slider1 from '../Componet/Slider'; 
import '../App.css';
import styled from '@emotion/styled';
import { FaHandSparkles } from "react-icons/fa";
import { HiColorSwatch } from "react-icons/hi";
import { MdLocalOffer } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoCarSport } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { Scale } from '@mui/icons-material';






const Btn1 = {
  padding:{xs:'3px',sm:'4px',md:'8px'},
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  gap:'5px',
  border:'1px solid #fff',
  borderRadius:'5px',
  color:'#f2e9e4', 
  transition:'0.4s',
  '&:hover':{backgroundColor:'#f2e9e4',color:'#22223b'},
}







const Home = () => {
  return (
    <div>
        <Box width='100%' sx={{marginTop:{xs:'45px' ,sm:'0'},position:'relative'}}>
          <Box sx={{width:'100%'}}>
            <video src={HeroVideo} autoPlay loop muted className='videoCss'  >
            </video>
          </Box>
            <Container maxWidth="xl">
            <Box width="100%" >
              <Box sx={{width:{sm:'calc(300px - 40px)',md:'calc(375px - 40px)'}, position:'absolute',top:'20%',color:"#fff"}} >
                 <Box sx={{mb:'20px',width:'100%',height:'auto',padding:{sm:'5px',md:'15px'},backgroundColor:'#ffffff2c' ,backdropFilter:'blur(10px)',borderRadius:'15px',display:{xs:'none',sm:'flex'},flexDirection:'column'}}>
                  <Box>
                    <Typography sx={{fontFamily:'"Bebas Neue", sans-serif',fontSize:{sm:'30px',md:'38px'},position:'relative'}}>Drive Your Dreams Today!</Typography>
                    <Typography sx={{fontSize:'12px',position:'absolute',top:{xs:'19%',md:'25%'}}}>Performance, Power, and Precision – All in One</Typography><br />
                    <hr />
                  </Box>
                  <Box>
                  <Box sx={{ flexGrow: 1 ,pt:'10px'}}>
                          <Grid2 container spacing={1}>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                            <Button variant="none" sx={{textTransform:'capitalize', p:{sm:'0 0 0 5px',md:'7.5px'}}} startIcon={<FaHandSparkles />}>
                                Luxury Interior
                            </Button>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                            <Button variant="none" sx={{textTransform:'capitalize',p:{sm:'0 0 0 5px',md:'7.5px'}}} startIcon={<HiColorSwatch />}>
                            bright colors 
                            </Button>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                            <Button variant="none" sx={{textTransform:'capitalize',p:{sm:'0 0 0 5px',md:'7.5px'}}} startIcon={<MdLocalOffer />}>
                            Discounts or Financing
                            </Button>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                            <Button variant="none" sx={{textTransform:'capitalize',p:{sm:'0 0 0 5px',md:'7.5px'}}} startIcon={<BiSolidPhoneCall />}>
                            Call-to-Action
                            </Button>
                            </Grid2>
                          </Grid2>
                        </Box>
                  </Box>
                 </Box>
                 <Box sx={{width:{xs:'30px',sm:'100%'},height:'Auto',p:{xs:'5px',sm:'5px',md:'15px'},backgroundColor:'#ffffff2c' ,backdropFilter:'blur(10px)',borderRadius:{xs:'5px',sm:'10px'},position:'absolute',top:{xs:'-30px',sm:'95%',md:'100%'},left:{xs:'-10px',sm:'0'}}}>
                  <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:{xs:'column',sm:'row'},justifyContent:'center',alignItems:'center',gap:{xs:'10px',sm:'10px',md:'20px'}}}>
                        <Box sx={Btn1}>
                            <FaFacebookF />
                        </Box>
                        <Box sx={Btn1}>
                            <AiFillInstagram />
                        </Box>
                        <Box sx={Btn1}>
                            <IoCarSport />
                        </Box>
                        <Box sx={Btn1}>
                            <FaAddressCard />
                        </Box>
                        <Box sx={Btn1}>
                          <IoMdContacts /> <Typography sx={{display:{xs:'none',sm:'block'}}}>Connect</Typography> 
                        </Box>
                  </Box>

                 </Box>
              </Box>
            </Box>
            </Container>
        </Box>

        <Box width='100%' sx={{backgroundColor:'#f2e9e4'}}>
        <Container maxWidth="xl">
              <Slider1 />
            </Container>
        </Box>
        
    </div>
  )
}

export default Home