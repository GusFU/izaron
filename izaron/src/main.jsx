import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { Navbar } from './componentes/navbar/Navbar'
import './index.css'
// import App from './App'
// import { Carrousel } from './componentes/carrousel/Carrousel'
// import { ImageGallery } from './componentes/imagengalery/ImagenGalery'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
    {/*<App />*/}
    {/* <Carrousel /> */}
    <Navbar/>
    {/* <ImageGallery /> */}
    </Provider>

  </React.StrictMode>,
)
