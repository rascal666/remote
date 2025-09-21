import React from 'react';
import HeaderBuyingServices from "../../../HeaderBuyingServices/HeaderBuyingServices.jsx";
import bg from '../../../../assets/img/laptop.png';

import {
    PCHelpJson,
    PCNoFrequentLJson,
    PCNoLoadLJson, PCNoOptimizationLJson, PCNoServiceJson,
    PCNoVKLJson, PCNoWindowJson, VacuumHelpJson, VacuumNoFrequentLJson, VacuumNoLoadLJson, VacuumNoOptimizationLJson,
    VacuumNoServiceJson, VacuumNoVKLJson,
    VacuumNoWindowJson,
} from "../../../../json.js";

import PriceBlock from "../ux/priceBlock/priceBlock.jsx";
import AdvantagesBlock from "../ux/advantagesBlock/advantagesBlock.jsx";
import Guarantee from "../ux/guarantee/guarantee.jsx";
import Container from "../../../../assets/img/container/container.jsx";

const Laptop = () => {

    const arrayPrice = [
        {title: 'Не включается:' , json: VacuumNoVKLJson},
        {title: 'Ноутбук не заряжается:' , json: VacuumNoLoadLJson},
        {title: 'Оптимизация операционной системы:' , json: VacuumNoOptimizationLJson},
        {title: 'Частые неисправности ноутбуков:' , json: VacuumNoFrequentLJson},
        {title: 'Не работает экран ноутбука:' , json: VacuumNoWindowJson},
        {title: 'Обслуживание ноутбука:' , json: VacuumNoServiceJson},
        {title: 'Сервисное обслуживание ноутбука:' , json: VacuumHelpJson},
    ]


    return (
        <div className="tv">
            <HeaderBuyingServices isForm='ноутбуков' bgColor='#E2E5F4' title='Профессиональный ремонт ноутбуков' bg={bg} ></HeaderBuyingServices>

            <Container>
                <PriceBlock arrayPrice={arrayPrice} title='Признак поломки
и цена ремонта ноутбуков'></PriceBlock>

                <AdvantagesBlock />

                <Guarantee isForm='ноутбуки'></Guarantee>
            </Container>
        </div>
    );
};

export default Laptop;