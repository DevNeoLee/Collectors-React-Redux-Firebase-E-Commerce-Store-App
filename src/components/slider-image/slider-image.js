import React from 'react';
import { Link } from 'react-router-dom';
import sliderStyle from './slider-image.module.scss';

export default function SliderImage({ src, index, text }) {
    const MAP_LINK = {
        1: "movie",
        2: "animation",
        3: "tvseries",
        4: "sportsart",
        5: "rarecollection"
    }

    return (
        <div>
            <Link to={`/shop/${MAP_LINK[index]}`}>
                <span className={sliderStyle.text}>{text}</span>
            </Link>
            <img src={src} alt="slide-img" className={sliderStyle.image}></img>
        </div>
 );
}
