import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'
import { Home } from './assets/pages/Home';
// import { Navbar } from './componentes/navbar/Navbar'
// import { CardsDescription } from './componentes/cardsDescription/CardsDescription'
// import App from './App'
// import { Carrousel } from './componentes/carrousel/Carrousel'
// import { ImageGallery } from './componentes/imagengalery/ImagenGalery'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
    <Home />
    {/*<App />*/}
    {/* <Carrousel /> */}
 
   
    {/* <ImageGallery /> */}
    </Provider>

  </React.StrictMode>,
)
