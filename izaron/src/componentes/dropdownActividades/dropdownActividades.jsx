import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { selectPagina } from "../../store/slices/paginas";


export const DropdownActividades = () => {
    const [openClose,setOpenclose]=useState(false);
    //const { pagina } = useSelector( state => state.paginas)
    const dispatch = useDispatch();
  
  




    return (
       

        <li  onMouseEnter={()=>setOpenclose(true)} onMouseLeave={()=>setOpenclose(false)}  >Actividades
           {openClose ?<ul>
                <li className="actividades" onClick={()=> dispatch( selectPagina('juegosDelMundo'))}>Juegos del mundo</li>
                <li className="actividades" onClick={()=> dispatch( selectPagina('izaronIngenio'))}>Izarón, ingenio</li>
                <li className="actividades" onClick={()=> dispatch( selectPagina('ladrillosDeCarton'))}>Ladrillos de cartón</li>
                <li className="actividades" onClick={()=>dispatch( selectPagina('TablitasMagicas'))}>Tablitas mágicas</li>
            </ul>:''} 
        </li>
        
    )

}



