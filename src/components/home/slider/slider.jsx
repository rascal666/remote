import React from 'react';
import './slider.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper/modules';

import arrowLeft from "../../../assets/img/home/slider/arrowLeft.svg"
import arrowRight from "../../../assets/img/home/slider/ArrowRigth.svg"
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from "./slide/slide.jsx";

import tv from "../../../assets/img/home/slider/1.svg";
import laptop from "../../../assets/img/home/slider/3.svg";
import computers from "../../../assets/img/home/slider/6.svg";
import karcher from "../../../assets/img/home/slider/7.svg";
import vacuum from "../../../assets/img/home/slider/9.svg";
import coffee from "../../../assets/img/home/slider/10.svg";


import Arrow from "./arrow/arrow.jsx";


const Slider = () => {
    return (
        <div className='sliderHome'>
            <Arrow icon={arrowLeft} classe='left'></Arrow>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.rigth',
                    prevEl: '.left',
                }}
                spaceBetween={50}
                breakpoints={{

                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 15,
                        navigation: false,
                    },

                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                        navigation: true,
                    },

                    660: {
                        slidesPerView: 1.8,
                        spaceBetween: 30,
                    },

                    1024: {
                        slidesPerView: 2.8,
                        spaceBetween: 40,

                    },
                    1366: {
                        slidesPerView: 3 ,
                        spaceBetween: 40,

                    },
                }}

            >
                <SwiperSlide>
                    <Slide icon={tv} title='Ремонт телевизоров' price='350' link='/tv'></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide icon={laptop} title='Ремонт ноутбуков' price='200' link='/laptop'></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide icon={computers} title='Ремонт компьютеров' price='200' link='/pc'></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide icon={karcher} title='Ремонт техники Karcher' price='300' link='/karcher'></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide icon={vacuum} title='Ремонт пылесосов' price='300' link='/vacuum'></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide icon={coffee} title='Ремонт кофемашин' price='300' link='/cofee'></Slide>
                </SwiperSlide>
            </Swiper>
            <Arrow icon={arrowRight} classe='rigth'></Arrow>
        </div>
    );
};

export default Slider;