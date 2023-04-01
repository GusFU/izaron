import React from 'react'
import Logo from '../../public/img/izaron_logo.png';

export const Navbar = () => {
    return (
        <div>
            <div>
                <img src={Logo} alt='logo' sizes='200px' />
            </div>
            <ul>
                <li>Sobre Izaron</li>
                <li>Actividades
                    <ul>
                        <li>Juegos del mundo</li>
                        <li>Izaron, ingenio</li>
                        <li>Ladrillos de carton</li>
                        <li>Tablitas magicas</li>
                    </ul>
                    </li>
                <li>servicios</li>

            </ul>
        </div>
             )
}
