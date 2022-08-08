import React from 'react'
import fondo from "../assets/fondo.png";
import logo from "../assets/logoF.png";
import {Cultos} from "./Cultos";
import NavBar from './NavBar';
import './Inicio.css'

export default function Inicio () {
    return (
        <div>
          <img className="heroImage" src={fondo} alt="hero" />
          
          <NavBar/>
          
          <div className="heroContainer">
            <div className="mainContainer">
              <div className="heroText">
                <h1 className="heroTitle">Ministerios</h1>
                <h1 className="heroTitle">Salem</h1>
                <div className="contact">
                <div className="contactContainer">
                  <a className="social-icon" href="https://www.facebook.com/adonaisalemguatemala">
                    <i className="fa-brands fa-facebook icono" />
                  </a>
                  <a className="social-icon" href="https://www.youtube.com/user/AdonaiSalemIglesia">
                    <i className="fa-brands fa-youtube icono" />
                  </a>
                  <a className="social-icon" href="https://radiosalem.radiostream321.com/">
                    <i className="fa-solid fa-radio icono" />
                  </a>
                </div>
              </div>
              </div>
              <div className="heroLogoContainer">
                <img className="heroLogo" src={logo} alt="logo" />
              </div>
            </div>
          </div>
    
          <Cultos></Cultos>
    
        </div>
      );
}

