import React from 'react';
import  './headerBuying.scss'
import ItemList from "../../uiUx/itemList/itemList.jsx";
import check from "../../../assets/img/icons/Check.svg";
import bg from '../../../assets/img/buying/bg.png'
import HeaderBuyingServices from "../../HeaderBuyingServices/HeaderBuyingServices.jsx";

const HeaderBuying = () => {
    return (
        <HeaderBuyingServices isForm='компьютеры' bgColor='#EDEDED' title='Скупка неисправных, б/у телевизоров' bg={bg}>
            <div className="HeaderBuyingServices__list">
                <ItemList icon={check} text='Выезд курьера в течение 30 минут'/>
                <ItemList icon={check} text='Оценка - бесплатно'/>
                <ItemList icon={check} text='Вы получаете деньги на руки!'/>
            </div>
        </HeaderBuyingServices>
    );
};

export default HeaderBuying;