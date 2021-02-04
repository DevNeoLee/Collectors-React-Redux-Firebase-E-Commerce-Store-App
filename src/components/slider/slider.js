import React, { useState, useEffect } from 'react';
import sliderStyle from './slider.module.scss';
import SliderImage from '../slider-image/slider-image';
import Movie from '../../slider-pics/movie.png';
import Animation from '../../slider-pics/animation.png';
import TVSeries from '../../slider-pics/tv-series.png';
import SportMusic from '../../slider-pics/sports-music.png';
import RareMovie from '../../slider-pics/rare-movie.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { fas, faChevronCircleLeft, faChevronCircleRight }  from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
    const SLIDER = [
        <SliderImage src={Movie} index={ 1 } text={"Timeless Movies in DVD/Blu-ray"}/>,
        <SliderImage src={Animation} index={ 2 }  text={"Animations in Highest Quality"}/>,
        <SliderImage src={TVSeries} index={ 3 }  text={"Own Acclaimed TV-Series"}/>,
        <SliderImage src={SportMusic} index={ 4 } text={"Feel the Excitement"}/>,
        <SliderImage src={RareMovie} index={ 5 } text={"Collect Rare Filims on DVD"}/>
    ];

    const [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? 
            setX((SLIDER.length - 1) * -100)
            :
            setX(x + 100)
        };

    const goRight= () => {
        x === (SLIDER.length - 1) * -100 ?
            setX(0)
            :
            setX(x - 100)
        };  
    
    useEffect(() => {
        const id = setTimeout(() => goRight(), 3000);
        return () => clearTimeout(id);
    }, [x]);

    return(
        <div className={sliderStyle.slider}>
            { SLIDER.map((item, idx) => {
                return(
                    <div key={idx} className={sliderStyle.slide} style={{ transform: `translateX(${x}%)`}}>
                        {item}
                    </div>
                );
            })}
            <button id={sliderStyle.goLeft} onClick={() => goLeft()}><FontAwesomeIcon icon={ fas, faChevronCircleLeft } className={sliderStyle.i} size="3x" /></button>
            <button id={sliderStyle.goRight} onClick={() => goRight()}><FontAwesomeIcon icon={ fas, faChevronCircleRight} className={sliderStyle.i} size="3x" /></button>
        </div>
    );
}

export default Slider; 