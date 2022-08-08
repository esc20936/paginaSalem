import React, {useState, useEffect} from "react";
import CultoComponent from "./CultoComponent";
import AliceCarousel from 'react-alice-carousel';
import './Cultos.css';
// const peticion = fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUXwQ_cRgzHjE49t_RS5iR2g&maxResults=15&key=AIzaSyBsB5nixFUFK6K6uFVmBsedTT06-bFWFmY')

const handleDragStart = (e) => e.preventDefault();

const Cultos = () => {
    const [cultos, setCultos] = useState([]);

    useEffect(() => {
        fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUXwQ_cRgzHjE49t_RS5iR2g&maxResults=15&key=AIzaSyBsB5nixFUFK6K6uFVmBsedTT06-bFWFmY')
        .then(res => res.json())
        .then(data => {
            setCultos(
            data.items.map(culto => {
                return (
                    <CultoComponent  className="culto" img={culto.snippet.thumbnails.high.url} title={culto.snippet.title} description={culto.snippet.description} date={culto.snippet.publishedAt} id={culto.snippet.resourceId.videoId} />
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



                {/* <CultoComponent img="https://i.ytimg.com/vi/9UaV9qlQk9A/hqdefault.jpg"/> */}
            </div>
            <div class="pseduo-track"></div>
        </div>
    );
}

export { Cultos };
// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUXwQ_cRgzHjE49t_RS5iR2g&maxResults=15&key=AIzaSyBsB5nixFUFK6K6uFVmBsedTT06-bFWFmY