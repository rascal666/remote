import React from 'react';
import Arrow from "../../home/slider/arrow/arrow.jsx";
import arrowLeft from "../../../assets/img/home/slider/arrowLeft.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import Slide from "../slider/slide/slide.jsx";
import './slider.scss'
import 'swiper/css/navigation';

import tv from "../../../assets/servises/slider/1.jpg";
import laptop from "../../../assets/servises/slider/3.jpg";
import computers from "../../../assets/servises/slider/7.jpg";
import karcher from "../../../assets/servises/slider/8.jpg";
import vacuum from "../../../assets/servises/slider/10.jpg";
import coffee from "../../../assets/servises/slider/11.jpg";


import arrowRight from "../../../assets/img/home/slider/ArrowRigth.svg";

const Slider = () => {


    return (

        <div className='sliderServices' >

            <Arrow icon={arrowLeft} classe='left'></Arrow>
            <Swiper

                modules={[Navigation]}
                navigation={{
                    nextEl: '.rigth',
                    prevEl: '.left',
                }}
                spaceBetween={0}
                slidesPerView={2.5}
                breakpoints={{

                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 15,
                        navigation: false,
                    },

                    640: {
                        spaceBetween: 15,
                        slidesPerView: 1.5,

                    },

                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 0,
                    },


                }}

            >
                <SwiperSlide>
                    <Slide icon={tv} title='ремонт телевизоров' link='/tv'></Slide>
                    <Slide icon={laptop} title='ремонт ноутбуков' link='/laptop'></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide icon={computers} title='ремонт компьютеров' link='/pc'></Slide>
                    <Slide icon={karcher} title='ремонт техниеи "karcher"' link='/karcher'></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide icon={vacuum} title='ремонт пылесосв' link='/vacuum'></Slide>
                    <Slide icon={coffee} title='ремонт кофемашин' link='/cofee'></Slide>
                </SwiperSlide>

            </Swiper>
            <Arrow icon={arrowRight} classe='rigth'></Arrow>
        </div>
    );
};

export default Slider;