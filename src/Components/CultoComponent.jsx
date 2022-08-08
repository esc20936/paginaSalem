import React from "react";
import './CultoComponent.css';
export default function CultoComponent({img, title, description, date, id}) {

    return (
        <div className="containerVideoComponent" >
            <div className="videoPreview">
                <img className="videoPreviewImg" src={img} alt="video" onClick={() => window.open(`https://www.youtube.com/watch?v=${id}`)}/>
            </div>
            <div className="videoInfo">
                <h1 className="videoTitle">{title}</h1>
                <p className="videoDescription">{description}</p>
                <p className="videoDate">Fecha: {date}</p>
            </div>
        </div>
    );
}