import React from 'react';
import Advantages from "../../../../buying/advantages/advantages.jsx";
import sale from "../../../../../assets/img/buying/1.svg";
import consultation from "../../../../../assets/img/buying/2.svg";
import departure from "../../../../../assets/img/buying/3.svg";
import Repair from "../../../../../assets/img/buying/4.svg";
import original from "../../../../../assets/img/buying/5.svg";
import Guarantee from "../../../../../assets/img/buying/6.svg";
import './advantagesBlock.scss'
import Subtitle from "../../../../uiUx/subtitle/subtitle.jsx";

const AdvantagesBlock = () => {
    return (

        <div className='advantagesBlock'>
            <Subtitle  subtitle='19 лет безупречной работы'></Subtitle>
            <div className="advantagesBlock__block">
                <Advantages text='19 лет безупречной работы' image={sale}></Advantages>
                <Advantages text='Бесплатная консультация с экспертом' image={consultation}></Advantages>
                <Advantages text='Бесплатный выезд специалиста' image={departure}></Advantages>
                <Advantages text='Ремонт без предоплаты' image={Repair}></Advantages>
                <Advantages text='Используем только оригинальные запчасти' image={original}></Advantages>
                <Advantages text='Гарантия до 1 года' image={Guarantee}></Advantages>
            </div>
        </div>
    );
};

export default AdvantagesBlock;