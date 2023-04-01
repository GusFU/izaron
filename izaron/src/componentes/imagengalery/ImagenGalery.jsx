import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageGallery = () => {
  const images = Object.values(
    import.meta.globEager('../../assets/imagenes/*.{png,jpg,jpeg,gif,svg,jfif}')
  );
  
 



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed:3000,
    autoplay: true,
    
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.default} alt={`image-${index}`} />
        </div>
      ))}
    </Slider>
  );
};
