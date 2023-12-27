import React from 'react'
import ButtonProps from '../Interfaces/ButtonInterface';
import { Row, Col } from 'antd'

const ButtonComponent: React.FC<ButtonProps> = ({ text, image, backgroundColor, color, borderStyle, borderColor, boxShadow }) => {


    console.log('backgroundColor:', backgroundColor); 

    return (
        <>
            <button className=''>
                {image && <img src={image} alt="Button Image" />}
                {text}
            </button>
        </>
    )
}

export default ButtonComponent