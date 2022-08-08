import React, {useState, useEffect} from "react";
import CultoComponent from "./CultoComponent";
import AliceCarousel from 'react-alice-carousel';
import './Cultos.css';

const handleDragStart = (e) => e.preventDefault();

const Cultos = () => {
    const [cultos, setCultos] = useState([]);

    useEffect(() => {
        fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUXwQ_cRgzHjE49t_RS5iR2g&maxResults=15&key=AIzaSyBsB5nixFUFK6K6uFVmBsedTT06-bFWFmY')
        .then(res => res.json())
        .then(data => {
            setCultos(
            data.items.map((culto,index) => {
                const date = new Date(culto.snippet.publishedAt);
                const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
                return (
                    <CultoComponent  key={index} className="culto" img={culto.snippet.thumbnails.high.url} title={culto.snippet.title} description={culto.snippet.description} date={dateString} id={culto.snippet.resourceId.videoId} />
                )
            }))
        })
    }, []);

    


    return (
        <div className="cultosContainer">
            <div className="titleContainer">
                <h1 className="title">Cultos recientes</h1>
            </div>
            <div className="videosContainer">
                <div className="carousel">
                {   
                    cultos
                }
                </div>
            </div>
            <div className="pseduo-track"></div>
        </div>
    );
}

export { Cultos };