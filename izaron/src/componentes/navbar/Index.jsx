import React, { useRef, useState } from 'react';
import Logo from '../../public/img/izaron_logo.png';
import { useDispatch, useSelector } from 'react-redux'
import { selectPagina } from "../../store/slices/paginas";
import './navbar.css';


export const Navbar = () => {
    const dispatch = useDispatch();
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleButtonRef = useRef(null);
    const navWrapperRef = useRef(null);

    const handleClick = () => {
        toggleButtonRef.current.classList.toggle('close');
        navWrapperRef.current.classList.toggle('show');
    };

    // const handleWrapperClick = (e) => {
    //     if( e.target.id === 'nav'){
    //         navWrapperRef.current.classList.remove('show');
    //         toggleButtonRef.current.classList.remove('close');
    //     }
    // };

   
    return (
        <>
            <div className='navbar__main-content'>
                <div className='navbar__logo-content'>
                    <img src={Logo} onClick={()=> dispatch( selectPagina('Home'))}/>
                </div>
                <div className='navbar__menu-content'>
                    <div id='button-menu' className='button-menu' ref={toggleButtonRef} onClick={handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>
            <div id="nav" className='main-nav' ref={navWrapperRef} onClick={handleClick}>
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
                            <ul >
                                <li>
                                    <a onClick={()=> dispatch( selectPagina('JuegosDelMundo'))}>
                                        Juegos del Mundo
                                    </a>
                                </li>
                                <li>
                                    <a onClick={()=> dispatch( selectPagina('IzaronIngenio'))}>
                                        Irazón, Ingenio
                                    </a>
                                </li>
                                <li>
                                    <a onClick={()=> dispatch( selectPagina('LadrillosDeCarton'))}>
                                        Ladrillos de cartón
                                    </a>
                                </li>
                                <li>
                                    <a onClick={()=>dispatch( selectPagina('TablitasMagicas'))}>
                                        Tablitas Mágicas
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={()=>dispatch( selectPagina('Servicios'))}>
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a onClick={()=>dispatch( selectPagina('Blog'))}>
                                Blog
                            </a>
                        </li>
                        <li>
                            <a onClick={()=>dispatch( selectPagina('Contacto'))}>
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
