import React from 'react';
import  './slide.scss'
import {useNavigate} from "react-router-dom";


const Slide = ({link, icon, title}) => {

    const navigate = useNavigate()

    return (
        <div onClick={() => {navigate(link)}} className="slideServices">
            <p className='slideServices__title'>{title}</p>
            <img src={icon} alt=""/>
        </div>
    );
};

export default Slide;