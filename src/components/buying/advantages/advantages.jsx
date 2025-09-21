import React from 'react';
import './advantages.scss'

const Advantages = ({image, text}) => {
    return (
        <div className='advantages' >
            <img className='advantages__img' src={image} alt=""/>
            <p className='advantages__text'>{text}</p>
        </div>
    );
};

export default Advantages;