import React from 'react'
import Arrow from './Arrow'

export default function MyAccordion(props) {

    const content = React.useRef(null)

    const [setActive,setActionState] = React.useState("");
    const [setHeight,setHeigthState] = React.useState("0px");
    const [setRotate,setRotetaState] = React.useState("accordion__arrow")

    const toggleAccordion = () => {
        setActionState( setActive === "" ? "active" : "" );
        setHeigthState(
            setActive === 'active' ? "0px" : `${content.current.scrollHeight}px`
        )
        setRotetaState(
            setActive === 'active' ? "accordion__arrow" : "accordion__arrow rotate" 
        )
    }

    return (
        <div className='accordion__section'>
            <button className={`accordion ${setActive}`} onClick={ toggleAccordion }>
                <img className='accordion__icon' width={15} src={props.src} alt="" />
                <p className='accoridon__title'>{props.title}</p>
                <Arrow className={`${setRotate}`} width={7} fill={"#444"}/>
            </button>
            <div className='accordion__content' ref={content} style={{maxHeight: `${setHeight}`}}>
                {props.children}
            </div>
        </div>
    )
}

