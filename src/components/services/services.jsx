import React from 'react';
import  './services.scss'
import Slider from "./slider/slider.jsx";
import Title from "../uiUx/title/title.jsx";
import Container from "../../assets/img/container/container.jsx";


const Services = () => {
    return (
        <Container>
            <div className="services">
                <Title title='Услуги и цены'></Title>
                <Slider></Slider>
            </div>
        </Container>
    );
};

export default Services;