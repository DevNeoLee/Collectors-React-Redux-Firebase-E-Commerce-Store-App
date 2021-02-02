import React from 'react'
import sliderStyle from './slider-image.module.scss'

export default function SliderImage({ src, text }) {
    return (
        <div>
           <span className={sliderStyle.text}>{text}</span>
           <img src={src} alt="slide-img" className={sliderStyle.image}></img>
        </div>
    )
}
