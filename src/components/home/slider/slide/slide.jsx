import React from 'react';
import './slide.scss'
import {useNavigate} from "react-router-dom";

const Slide = ({icon, title , button, price, link}) => {

    const navigate = useNavigate()

    return (
        <div  className="slideHome">
            <div className="slideHome-icon">
                <img src={icon} alt=""/>
            </div>
            <div className="slideHome-title">{title}</div>
            <div onClick={() => {navigate(link)}} className="slideHome-button">узнать подробнее</div>
            <div className="slideHome-note">Стоимость ремонта от {price} руб </div>
        </div>
    );
};

export default Slide;