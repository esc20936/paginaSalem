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
                        <p className="nav-link">
                            Inicio
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/servicios">
                        <p className="nav-link">
                            Servicios
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about">
                        <p className="nav-link">
                            Sobre nosotros
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contacto">
                        <p className="nav-link">
                            Contáctanos
                        </p>
                    </Link>
                </li>
              </ul>
            </div>
          </nav>
    );
}