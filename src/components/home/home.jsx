import React from 'react';
import './home.scss'
import Slider from "./slider/slider.jsx";
import Request from "./request/request.jsx";
import Container from "../../assets/img/container/container.jsx";


function Home()  {

        return (
            <Container>
                <div className="home">
                    <Slider></Slider>
                    <Request></Request>
                </div>
            </Container>

        )
}

export default Home;