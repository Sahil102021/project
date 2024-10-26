import React from "react";
import Slider from "react-slick";
import { Box, Container } from '@mui/material';
import img1 from '../img/carlogo1.png';
import img2 from '../img/carlogo2.png';
import img3 from '../img/carlogo3.png';
import img4 from '../img/carlogo4.png';
import img5 from '../img/carlogo5.png';
import img6 from '../img/carlogo6.png';
import img7 from '../img/carlogo7.png';
import img8 from '../img/carlogo8.png';
import img9 from '../img/carlogo9.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", display:'none'}}
        onClick={onClick}
      />
    );
  }
  

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", display:'none' }}
        onClick={onClick}
      />
    );
  }


function AutoPlay() {
    const data = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    
    const settings = {
        infinite: true,
        slidesToShow: 10, // Adjust for larger screens
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    };

    return (
        <Box sx={{backgroundColor:'#f2e9e4'}}>
            <Container maxWidth='xl' >
                <div className="slider-container" >
                    <Slider {...settings}>
                        {data.map((el, i) => (
                            <div key={i}>
                               <div style={{width:{sm:'20px',md:'75px' ,xl:'100px'}, height:{sm:'20px',md:'75px',xl:'100px'},padding:'5px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                               <img src={el} alt={`Car logo ${i + 1}`} style={{ width: '75%', height: 'auto' }} />
                               </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </Box>
    );
}

export default AutoPlay;
