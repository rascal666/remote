import React from 'react';
import Title from "../uiUx/title/title.jsx";
import Accordion from "../uiUx/accordion/accordion.jsx";
import ItemList from "../uiUx/itemList/itemList.jsx";
import check from "../../assets/img/icons/Check.svg"
import './vacancies.scss'
import Form from "../form/form.jsx";
import Container from "../../assets/img/container/container.jsx";

const Vacancies = () => {
    return (
       <Container>
           <div className='vacancies'>
               <Title title='Вакансии' />

               <div className="vacancies__container">
                   <div className="vacancies__block">
                       <p className='vacancies__text'>
                           В связи с расширением штата сотрудников требуются специалисты:
                       </p>
                       <Accordion text='Мастер по ремонту бытовой радио-электронной аппаратуры'>
                           <div className="vacancies__accordion_block">
                               <p className='vacancies__accordion_title'>Требования:</p>
                               <div className="vacancies__accordion_list">
                                   <ItemList text='Образование не ниже среднего;' icon={check}></ItemList>
                                   <ItemList text='Опыт работы от 3-х лет;' icon={check}></ItemList>
                                   <ItemList text='Опрятность, коммуникабельность, исполнительность, пунктуальность.' icon={check}></ItemList>
                               </div>
                           </div>
                           <div className="vacancies__accordion_block">
                               <p className='vacancies__accordion_title'>Условия:</p>
                               <div className="vacancies__accordion_list">
                                   <ItemList text='Заработная плата от 35000. Cдельная;' icon={check}></ItemList>
                                   <ItemList text='График работы скользящий.' icon={check}></ItemList>
                               </div>
                           </div>


                       </Accordion>
                   </div>

                   <div className="vacancies__form">
                       <Form title='Обратный звонок:' subtitle='Наш специалист перезвонит вам в течение 5 мин' buttonTitle='Отправить'></Form>

                   </div>
               </div>





           </div>
       </Container>
    );
};

export default Vacancies;