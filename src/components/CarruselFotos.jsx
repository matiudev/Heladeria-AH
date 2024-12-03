import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

import carrusel1 from "../assets/img/carrusel/1.jpg";
import carrusel2 from "../assets/img/carrusel/2.jpg";
import carrusel3 from "../assets/img/carrusel/3.jpg";
import carrusel4 from "../assets/img/carrusel/4.jpg";
import carrusel5 from "../assets/img/carrusel/5.jpg";
import carrusel6 from "../assets/img/carrusel/6.jpg";


const images = [
    {
        original: carrusel1
    },
    {
        original: carrusel2
    },
    {
        original: carrusel3
    },
    {
        original: carrusel4
    },
    {
        original: carrusel5
    },
    {
        original: carrusel6
    },
];

function CarruselFotos() {
    return (
        <div className="flex items-center justify-center" style={{ width: "100%" }}>
            <ImageGallery
                items={images}
                showNav={false}
                showThumbnails={false}
                showPlayButton={false}
                showFullscreenButton={false}
                showBullets={true}
                autoPlay={true}
                slideInterval={5000}
            />
        </div>

    )
}

export default CarruselFotos