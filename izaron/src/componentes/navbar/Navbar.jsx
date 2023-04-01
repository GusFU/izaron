import React, { useRef } from 'react';
import Logo from '../../public/img/izaron_logo.png';
import { DropdownActividades } from '../dropdownActividades/dropdownActividades';
import './navbar.css';
export const Navbar = () => {

    const toggleButtonRef = useRef(null);
    const navWrapperRef = useRef(null);

    const handleClick = () => {
        toggleButtonRef.current.classList.toggle('close');
        navWrapperRef.current.classList.toggle('show');
    };

    const handleWrapperClick = (e) => {
        if( e.target.id === 'nav'){
            navWrapperRef.current.classList.remove('show');
            toggleButtonRef.current.classList.remove('close');
        }
    };

    return (
        <>
            <div className='navbar__main-content'>
                <div className='navbar__logo-content'>
                    <img src={Logo} />
                </div>
                <div className='navbar__menu-content'>
                    <div id='button-menu' className='button-menu' ref={toggleButtonRef} onClick={handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>
            <div id="nav" className='main-nav' ref={navWrapperRef} onClick={handleWrapperClick}>
                <div className='nav-links'>
                    <ul>
                        <li>
                            <a>
                                Sobre Irazón
                            </a>
                        </li>
                        <li>
                            <a>
                                Actividades
                            </a>
                            <ul>
                                <li>
                                    <a>
                                        Juegos del Mundo
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Irazón, Ingenio
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Ladrillos de cartón
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Tablitas Mágicas
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a>
                                Blog
                            </a>
                        </li>
                        <li>
                            <a>
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
