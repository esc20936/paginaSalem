import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './Components/Inicio'
import About from './Components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
