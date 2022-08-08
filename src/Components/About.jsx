import React from 'react';
import fondo from "../assets/fondo.png";
import NavBar from './NavBar';
import apostol from "../assets/final.png";
import './About.css';
export default function About() {
    return (
       
            <div>
                <img className="heroImage" src={fondo} alt="hero" />
                <NavBar/>
                <div className="aboutContainer">
                    <div className="aboutSection">
                        <div className="aboutSectionText">
                            <h1 className="aboutTitle">Apóstol Miguel Angel Archila Vasquez</h1>
                            <div className="aboutText">
                                <p className="aboutTextP">
                                Apóstol de ministerios Salem. Pastor de Adonai Salem y Salem Villa Hermosa. Fundador de Ministerios Salem en octubre de 1996 y parte de la familia Archila. 
                                </p> 
                                <p className="aboutTexta">Por medio de un retiro de jóvenes de Ministerios Elim en 1995, su vida fue impactada por la visitación del Espíritu Santo, donde su vida nunca más fue la misma, por lo que inmediatamente inicio a desarrollar un fluir evangelístico alcanzando almas para Cristo por medio de la predicación en buses y calles de nuestra Guatemala, en ese mismo año desarrolla un fluir dirigido hacia la juventud, donde en Ciudad San Cristóbal alcanza a mucha juventud para Cristo.</p>
                                <p className="aboutTexta">En octubre de 1996 es llamado juntamente con su familia a realizar la obra pastoral en Villa Hermosa, al pasar los años es llamado a un ministerio profético y después de la siembra de su hermano Pastor Juan Carlos Archila es llamado a un ministerio apostólico. ha impactado muchas vidas por medio del ministerio apostólico y profético, actualmente cubre Iglesias En Guatemala, Estados Unidos, México y Nicaragua. dirige un programa de radio de lunes a domingo en la sintonía 1120 AM. es pastor general de Adonaí-Salem y es parte del equipo pastoral de Salem Villa Hermosa.</p>
                            </div>
                        </div>
                        <div className="aboutSectionImage">
                            <img className="aboutSectionImageImg" src={apostol} alt="apostol" />
                        </div>
                    </div>
                </div>
            </div>
        
    );
}