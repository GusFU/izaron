import React,  { useState, useRef, useEffect } from 'react';
import VintageToy from '../../public/img/vintage_toy.png'
import './index.css';

export const ToyAnimation = () => {
    const [ toyVisible, setToyVisible ] = useState(false);
    const ref_toy = useRef(null);

    useEffect(() => {
        function handleScroll(){
            const imageElement = ref_toy.current;
            const top = imageElement.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if(top < windowHeight){
                setToyVisible(true);
            }else{
                setToyVisible(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })
  return (
    <>
        <img 
        src={ VintageToy } 
        alt='vingate_toy' 
        ref={ref_toy}
        className={toyVisible ? "vintageToy" : "vintageToyNone"}/>
    </>
  )
}
