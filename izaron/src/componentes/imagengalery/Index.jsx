import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

export const ImageGallery = ({imagenes,parrafo,settings}) => {
 
  
  const parrafos1 = {
   carrousel_1: "dasdasdasdasdasdlkajsdlakjsd",
  carrousel_2: "jnkjfhgkjhkdfjhgkjfhgkjh",
  carrousel_3: "ppppppppppppppppppppppppppppp"
  }

  return (
    
    <Slider {...settings} className='sliderContainer'>
      {imagenes.map((image, index) => (
        <div className='carrouselContent' key={index}>
          <img className='carrousel__images' src={image.default} alt={`image-${index}`} />
         <p className='parCarrousel'>{parrafos1[image.default.split('/').splice(-1)[0].split(".")[0]]}</p>
        </div>
      ))}
    </Slider>
  );
};
