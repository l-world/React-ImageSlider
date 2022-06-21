import React from 'react'
import './Slider.css'
import leftArrow from './icon/left-arrow.svg'
import rightArrow from './icon/right-arrow.svg'

export default function BtnSlider({direction,moveSlider}) {

    return (
        <button
            onClick={ moveSlider }
            className={ direction === "next" ? "btn-slide next" :"btn-slide prev" }
        >
            <img src={direction === "next" ? rightArrow : leftArrow } alt="slide-btn" />
        </button>
    )
}
