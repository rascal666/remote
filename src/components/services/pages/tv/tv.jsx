import React from 'react';
import HeaderBuyingServices from "../../../HeaderBuyingServices/HeaderBuyingServices.jsx";
import bg from '../../../../assets/img/tw.png';

import {
    TVDepartureJson,
    TVNoConnectPriceJson,
    TVNoImgPriceJson,
    TVNoSoundPriceJson,
    TVNoStripesPriceJson
} from "../../../../json.js";
import PriceBlock from "../ux/priceBlock/priceBlock.jsx";
import AdvantagesBlock from "../ux/advantagesBlock/advantagesBlock.jsx";
import Guarantee from "../ux/guarantee/guarantee.jsx";
import Container from "../../../../assets/img/container/container.jsx";

const Tv = () => {

    const arrayPrice = [
        {title: 'Выезд и диагностика:' , json: TVDepartureJson},
        {title: 'Нет изображения у телевизора:' , json: TVNoImgPriceJson},
        {title: 'Телевизор не включается:' , json: TVNoConnectPriceJson},
        {title: 'Нет звука у телевизора:' , json: TVNoSoundPriceJson},
        {title: 'Полосы искажения на экране телевизора:' , json: TVNoStripesPriceJson},
    ]


    return (
        <div className="tv">
            <HeaderBuyingServices isForm='телевизоры' title='Ремонт телевизоров с выездом' bg={bg} bgColor='#E5E5E5' ></HeaderBuyingServices>

            <Container>
                <PriceBlock arrayPrice={arrayPrice} title='Признак поломки и цена ремонта телевизоров'></PriceBlock>

                <AdvantagesBlock />

                <Guarantee isForm='телевизоры'></Guarantee>
            </Container>
        </div>
    );
};

export default Tv;