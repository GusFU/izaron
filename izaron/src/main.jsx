import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
// import App from './App'
import './index.css'
import { Navbar } from './componentes/navbar/Navbar'
import { ImageGallery } from './componentes/imagengalery/ImagenGalery'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
    {/*<App />*/}
    <Navbar/>
    <ImageGallery />
    </Provider>
  </React.StrictMode>,
)
