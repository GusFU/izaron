import { Navbar } from '../../componentes/navbar/Index';
import { Footer } from '../../componentes/footer/Index';
import { Home } from './Home';
import { SobreIzaron } from './SobreIzaron';

import { useSelector, useDispatch } from 'react-redux';
import './principal.css';
export const Principal = ({ text }) => {
  const { pagina } = useSelector( state => state.paginas)


  return (
    <div>
      <Navbar />
      {pagina==="Home" ?<Home/>:""}
      {pagina==="SobreIzaron" ?<SobreIzaron/>:""}
      {pagina==="home" ?<Home/>:""}
      {pagina==="home" ?<Home/>:""}
      {pagina==="home" ?<Home/>:""}
      {pagina==="home" ?<Home/>:""}
      {pagina==="home" ?<Home/>:""}
      {pagina==="home" ?<Home/>:""}
      {pagina==="home" ?<Home/>:""}
      {pagina==="home" ?<Home/>:""}
      <Footer />  

    </div>
  );
};
