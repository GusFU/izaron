import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import { Carrousel } from './componentes/carrousel/Carrousel'
// import { Navbar } from './componentes/navbar/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    {/* <Navbar/> */}
    <Carrousel />
  </React.StrictMode>,
)
