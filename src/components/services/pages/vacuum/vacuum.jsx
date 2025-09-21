import React from 'react';
import HeaderBuyingServices from "../../../HeaderBuyingServices/HeaderBuyingServices.jsx";
import bg from '../../../../assets/img/vacuum.png';

import {
    PCHelpJson,
    PCNoFrequentLJson,
    PCNoLoadLJson, PCNoOptimizationLJson, PCNoServiceJson,
    PCNoVKLJson, PCNoWindowJson, VacuumDepartureJson, VacuumNoisesJson, VacuumNoSucksJson, VacuumNoTurnJson,
    VacuumVibratesJson,
} from "../../../../json.js";

import PriceBlock from "../ux/priceBlock/priceBlock.jsx";
import AdvantagesBlock from "../ux/advantagesBlock/advantagesBlock.jsx";
import Guarantee from "../ux/guarantee/guarantee.jsx";
import Container from "../../../../assets/img/container/container.jsx";

const Vacuum = () => {

    const arrayPrice = [
        {title: 'Выезд и диагностика:' , json: VacuumDepartureJson},
        {title: 'Посторонние (повышенные) шумы:' , json: VacuumNoisesJson},
        {title: 'Пылесос не включается:' , json: VacuumNoTurnJson},
        {title: 'Не всасывает пыль:' , json: VacuumNoSucksJson},
        {title: 'Вибрирует:' , json: VacuumVibratesJson},
    ]


    return (
        <div className="tv">
            <HeaderBuyingServices isForm='Пылесосы' bgColor='#F0F2DF' title='Профессиональный ремонт Пылесосов' bg={bg} ></HeaderBuyingServices>

            <Container>
                <PriceBlock arrayPrice={arrayPrice} title='Цена ремонта пылесосов'></PriceBlock>

                <AdvantagesBlock />

                <Guarantee isForm='пылесосы'></Guarantee>
            </Container>
        </div>
    );
};

export default Vacuum;