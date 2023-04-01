import React from 'react'
import  Logo  from '../../assets/imagenes/izaron_logo.png';
import { DropdownActividades } from '../dropdownActividades/dropdownActividades';

export const Navbar = () => {

   
       
    return (
        <div>
            <div>
                <img src={ Logo } sizes='200px'  />
            </div>
            <ul>
                <li>Sobre Izaron</li>
                <DropdownActividades/>
                <li>servicios</li>

            </ul>
        </div>
             )
}
