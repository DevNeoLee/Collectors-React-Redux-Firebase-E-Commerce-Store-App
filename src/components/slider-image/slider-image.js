import React from 'react'
import sliderStyle from './slider-image.module.scss'

export default function SliderImage({ src, text }) {
    return (
        <div>
           <img src={src} alt="slide-img" className={sliderStyle.image}></img>
           <span className={sliderStyle.text}>{text}</span>
        </div>
    )
}
