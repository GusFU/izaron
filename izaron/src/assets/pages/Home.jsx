import React from 'react';
import { Navbar } from '../../componentes/navbar/Navbar';
import { CardsDescription } from '../../componentes/cardsDescription/CardsDescription';
import { ImageGallery } from '../../componentes/imagengalery/ImagenGallery';
import './home.css';
export const Home = ({ text }) => {


  return (
    <div>
      <Navbar />
      <div className='home__body'>
        <ImageGallery />
        <CardsDescription />
      </div>
    </div>
  );
};
