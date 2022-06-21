import React from 'react'
import dataSlier from './dataSlider'
import BtnSlider from './BtnSlider'
import './Slider.css'

export default function Slider() {

    const [slideIndex,setSlideIndex] = React.useState(1)

    const next = () => {
        if(slideIndex < dataSlier.length){
            setSlideIndex(slideIndex + 1)
        }else if(slideIndex === dataSlier.length){
            setSlideIndex(1)
        }
    }

    const prev = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }else if(slideIndex === 1) {
            setSlideIndex(dataSlier.length)
        }
    }

    const moveDot = (index) => {
        setSlideIndex(index);
    }

    return (
        <div className='container-slider'>
            {
                dataSlier.map( (obj,index) => {
                    return(
                        <div 
                            key={obj.id}
                            className={slideIndex === (index  + 1) ? 'slide active-anim' : "slide"}>
                            <img src={process.env.PUBLIC_URL + `/img/img${index + 1}.jpg`} alt="img"/>
                            <p>{obj.title}</p>
                        </div>
                    )
                })
            }
            <BtnSlider direction={"next"} moveSlider={ next } />
            <BtnSlider direction={"prev"} moveSlider={ prev }/>
            <div className="container-dots">
                {
                    Array.from({length:5}).map( (item,index) => (
                        <div
                            onClick={ () => moveDot(index + 1) } 
                            className={slideIndex === (index+1) ? "dot active" :"dot"}></div>
                    ))
                }
            </div>
        </div>
    )
}
