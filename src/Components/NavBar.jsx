import React from 'react';
import {Link} from 'react-router-dom';
export default function NavBar(){
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark" id="navbar-example2" style={{ backgroundColor: "#06183c00" }}>
            <div className="navbar-brand" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto" id="navbarOption">
                <li className="nav-item">
                    <Link to="/">
                        <a className="nav-link">
                            Inicio
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/servicios">
                        <a className="nav-link">
                            Servicios
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about">
                        <a className="nav-link">
                            Sobre nosotros
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contacto">
                        <a className="nav-link">
                            Contáctanos
                        </a>
                    </Link>
                </li>
              </ul>
            </div>
          </nav>
    );
}