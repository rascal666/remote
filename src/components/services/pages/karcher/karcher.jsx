import React from 'react';
import HeaderBuyingServices from "../../../HeaderBuyingServices/HeaderBuyingServices.jsx";
import bg from '../../../../assets/img/karcher.png';

import {
    KarcherHelpJson, KarcherNoisesJson, KarcherNoPuskJson, KarcherNoVklJson, KarcherValvesJson,
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

const Karcher = () => {

    const arrayPrice = [
        {title: 'Выезд и диагностика:' , json: KarcherHelpJson},
        {title: 'Посторонние (повышенные) шумы и вибрация:' , json: KarcherNoisesJson},
        {title: 'Неисправность клапанов:' , json: KarcherValvesJson},
        {title: 'Нет включения:' , json: KarcherNoVklJson},
        {title: 'Нет запуска:' , json: KarcherNoPuskJson},
    ]


    return (
        <div className="tv">
            <HeaderBuyingServices isForm={'Kärcher'} bgColor='#FEEB17' title='Ремонт техники Kärcher™' bg={bg} ></HeaderBuyingServices>

            <Container>
                <PriceBlock arrayPrice={arrayPrice} title='Цена на ремонт'></PriceBlock>

                <AdvantagesBlock />

                <Guarantee isForm='karcher'></Guarantee>
            </Container>
        </div>
    );
};

export default Karcher;