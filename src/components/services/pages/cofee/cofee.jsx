import React from 'react';
import HeaderBuyingServices from "../../../HeaderBuyingServices/HeaderBuyingServices.jsx";
import bg from '../../../../assets/img/cofee.png';

import {
    CofeeHelpJson, CofeeLeaksJson, CofeeNoisesJson, CofeeNoWaterlJson, CofeeValvesJson,
} from "../../../../json.js";

import PriceBlock from "../ux/priceBlock/priceBlock.jsx";
import AdvantagesBlock from "../ux/advantagesBlock/advantagesBlock.jsx";
import Guarantee from "../ux/guarantee/guarantee.jsx";
import Container from "../../../../assets/img/container/container.jsx";

const Cofee = () => {

    const arrayPrice = [
        {title: 'Выезд и диагностика:' , json: CofeeHelpJson},
        {title: 'Посторонние (повышенные) шумы:' , json: CofeeNoisesJson},
        {title: 'Кофемашина не включается:' , json: CofeeValvesJson},
        {title: 'Не набирает воду:' , json: CofeeNoWaterlJson},
        {title: 'Протекает:' , json: CofeeLeaksJson},
    ]


    return (
        <div className="tv">
            <HeaderBuyingServices isForm='кофемашины' bgColor='#F8EACF' title='Ремонт кофемашин' bg={bg} ></HeaderBuyingServices>

            <Container>
                <PriceBlock arrayPrice={arrayPrice} title='Стоимость ремонта кофемаш'></PriceBlock>

                <AdvantagesBlock />

                <Guarantee isForm='кофемашины'></Guarantee>
            </Container>
        </div>
    );
};

export default Cofee;