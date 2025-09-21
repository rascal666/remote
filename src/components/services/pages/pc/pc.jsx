import React from 'react';
import HeaderBuyingServices from "../../../HeaderBuyingServices/HeaderBuyingServices.jsx";
import bg from '../../../../assets/img/pc.png';

import {
    PCHelpJson,
    PCNoFrequentLJson,
    PCNoLoadLJson, PCNoOptimizationLJson, PCNoServiceJson,
    PCNoVKLJson, PCNoWindowJson,
} from "../../../../json.js";

import PriceBlock from "../ux/priceBlock/priceBlock.jsx";
import AdvantagesBlock from "../ux/advantagesBlock/advantagesBlock.jsx";
import Guarantee from "../ux/guarantee/guarantee.jsx";
import Container from "../../../../assets/img/container/container.jsx";

const Pc = () => {

    const arrayPrice = [
        {title: 'Не включается:' , json: PCNoVKLJson},
        {title: 'Не работает экран ПК:' , json: PCNoWindowJson},
        {title: 'Обслуживание компьютера:' , json: PCNoServiceJson},
        {title: 'Сервисное обслуживание ноутбука:' , json: PCHelpJson},
        {title: 'Оптимизация операционной системы:' , json: PCNoOptimizationLJson},
        {title: 'Компьютер не загружается:' , json: PCNoLoadLJson},
        {title: 'Частые неисправности ноутбуков:' , json: PCNoFrequentLJson},
    ]


    return (
        <div className="tv">
            <HeaderBuyingServices isForm='компьютеры' bgColor='#FCEBE0' title='Профессиональный ремонт компьютеров' bg={bg} ></HeaderBuyingServices>

            <Container>
                <PriceBlock arrayPrice={arrayPrice} title='Признак поломки и цена ремонта компьютеров'></PriceBlock>

                <AdvantagesBlock />

                <Guarantee isForm='компьютеры'></Guarantee>
            </Container>
        </div>
    );
};

export default Pc;