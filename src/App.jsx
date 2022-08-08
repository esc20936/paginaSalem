import React from "react";
import fondo from "./assets/fondo.png";
import logo from "./assets/logoF.png";
import {Cultos} from "./Components/Cultos";

import './App.css';
export default function Landing() {
  return (
    <div>
      <img className="heroImage" src={fondo} alt="hero" />
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark" id="navbar-example2" style={{ backgroundColor: "#06183c00" }}>
        <div className="navbar-brand" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto" id="navbarOption">
            <li className="nav-item">
              <a className="nav-link" href="#heroSection">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobreMi">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">Sobre nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactSection">Contáctanos</a>
            </li>
          </ul>
        </div>
      </nav>
      
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