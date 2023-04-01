// import Carousel from 'nuka-carousel/lib/carousel';

import React from 'react'
import Carousel from 'nuka-carousel';
export const Imagenes = (props) => {
    const n_slides = 3;
    const slides = [
        ...new Array(
            Math.min(n_slides)
        ),
    ].map((_, index) => (
        <img
            src={`../../public/img/carrousel_${index + 1}.png`}
            key={index}
            alt='imgC'
        />
    ));
    return (
        <div>
            <Carousel>
                {slides}
            </Carousel>
        </div>
    )
}

