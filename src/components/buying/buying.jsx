import React from 'react';
import ItemList from "../uiUx/itemList/itemList.jsx";
import './buying.scss'
import HeaderBuying from "./headerBuying/headerBuying.jsx";
import Price from "./price/price.jsx";
import {buyingDiagonalJson, buyingPriceJson} from "../../json.js";
import prepare from "../../assets/img/buying/prepare.png"
import Advantages from "./advantages/advantages.jsx";

import sale from "../../assets/img/buying/1.svg"
import consultation from "../../assets/img/buying/2.svg"
import departure from "../../assets/img/buying/3.svg"
import Repair from "../../assets/img/buying/4.svg"
import original from "../../assets/img/buying/5.svg"
import Guarantee from "../../assets/img/buying/6.svg"
import Accordion from "../uiUx/accordion/accordion.jsx";
import Form from "../form/form.jsx";
import Modal from "../modal/modal.jsx";
import Container from "../../assets/img/container/container.jsx";
import Subtitle from "../uiUx/subtitle/subtitle.jsx";
import AdvantagesBlock from "../services/pages/ux/advantagesBlock/advantagesBlock.jsx";

const Buying = () => {


    return (
        <div className="buying">

            <HeaderBuying />

            <Container>
                <div className='buyingInfo'>
                    <ItemList number='~' text='Купим любые телевизоры в любом состоянии!'></ItemList>

                    <div className='buyingList__item'>
                        <ItemList number='~' text='Как исправные так и не рабочие (б/у)'></ItemList>
                        <span className='buyingList__item__note'>*кроме старых кинескопных</span>
                    </div>

                    <div className='buyingList__item'>
                        <ItemList number='~' text='Режим работы: Пн. – Вс.: с 09:00 до 21:00'></ItemList>
                        <div className='buyingList__item-phone'>
                            <a className='buyingList__item__link' href="tel:+78006006420">8 (800) 600-64-20</a>
                            <a className='buyingList__item__link' href="tel:+73433022059">+7 (343) 302-20-59</a>
                        </div>
                    </div>
                </div>

                <div className="buying__price">
                    <Subtitle subtitle='Цена выкупа телевизора:'/>
                    <div className="buying__price_contain">
                        <div className="buying__price_block">

                            <Price json={buyingPriceJson} title='Выезд и оценка:'></Price>
                            <span className='buying__price_note'>*После диагностики, стоимость ремонта обязательно согласовывается</span>

                            <Modal button='вызов мастера'>
                                <Form isForm='Телевизоры' title='Пожалуйста, оставьте свои данные' subtitle='И мы свяжемся с Вами в ближайшее время' buttonTitle='Отправить'></Form>
                            </Modal>
                            <span className="buying__price_buttonNote">Наш мастер приедет и исправит
                            простые поломки на месте или увезет в СЦ</span>
                        </div>
                        <div className="buying__price_block">
                            <Price json={buyingDiagonalJson} title='Неисправный или б/у телевизор:'></Price>
                        </div>
                    </div>

                </div>

                <div className="buying__parameters">
                    <div className="buying__parameters_contain">
                        <div className="buying__parameters_block">
                            <p className="buying__parameters_title">
                                Цены зависят
                                от следующих харакетристик:
                            </p>
                            <ItemList number='1' text='Тип телевизора'/>
                            <ItemList number='2' text='Дата выпуска'/>
                            <ItemList number='3' text='Целостность телевизора'/>
                        </div>

                        <div className="buying__parameters_block">
                            <p className="buying__parameters_title">
                                Подготовьте следующую информацию о телевизоре перед звонком:
                            </p>
                            <ItemList number='1' text='Модель'/>
                            <ItemList number='2' text='Год выпуска'/>
                            <ItemList number='3' text='Наличие пульта, подставки'/>
                            <ItemList number='3' text='Наличие документов, чека о покупки'/>
                        </div>

                        <div className="buying__parameters_block">
                            <p className="buying__parameters_title">
                                Как узнать данные?
                            </p>
                            <img src={prepare} alt=""/>
                            <p className='buying__parameters_note'>
                                *Можно посмотреть на шильдике, который находится на задней стенке телевизора.
                            </p>
                        </div>
                    </div>
                </div>

                <AdvantagesBlock />

                <div className="buying__question">
                    <Subtitle subtitle='Вопрос-ответ:'/>

                    <div className="buying__question_container">
                        <div className="buying__question_content">
                            <Accordion text='«Как происходит оценка телевизора?»'>
                                <p>Для того, чтобы получить оценку устройства, Вам необходимо позвонить нам, и сообщить менеджеру модель телевизора, либо назвать технические характеристики (тип телевизора, диагональ или год выпуска), а также описать его техническое состояние.</p>
                            </Accordion>

                            <Accordion text='«Какие критерии вы используете для оценки телевизора?»'>
                                <p>Для того, чтобы получить оценку устройства, Вам необходимо позвонить нам,
                                    и сообщить менеджеру модель телевизора, либо назвать технические
                                    характеристики (тип телевизора, диагональ или год выпуска),
                                    а также описать его техническое состояние.
                                </p>
                            </Accordion>

                            <Accordion text='«Какие телевизоры вы покупаете?»'>
                                <p>Для того, чтобы получить оценку устройства, Вам необходимо позвонить нам,
                                    и сообщить менеджеру модель телевизора, либо назвать технические
                                    характеристики (тип телевизора, диагональ или год выпуска),
                                    а также описать его техническое состояние.
                                </p>
                            </Accordion>

                            <Accordion text='«Почему стоит обратиться именно к нам?»'>
                                <p>Для того, чтобы получить оценку устройства, Вам необходимо позвонить нам,
                                    и сообщить менеджеру модель телевизора, либо назвать технические
                                    характеристики (тип телевизора, диагональ или год выпуска),
                                    а также описать его техническое состояние.
                                </p>
                            </Accordion>
                        </div>

                        <div className="buying__question_form">
                            <Form isForm='телевизовы' title='Обратный звонок:' subtitle='Наш специалист перезвонит вам в течение 5 мин' buttonTitle='вызов мастера'></Form>
                        </div>
                    </div>



                </div>
            </Container>
        </div>
    );
};

export default Buying;