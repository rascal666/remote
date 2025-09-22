import React from 'react';
import './request.scss'
import Form from "../../form/form.jsx";


const Request = () => {

    return (
        <div className='request'>
            <div className="request__coolback">
                <div className="request__title">ПОЧИНИМ ТЕЛЕВИЗОВ ПРЯМО У ВАС НА ДОМУ</div>
                <div className="request__form">

                    <Form buttonWhite={true} isForm='начальная страница' title='Заполните заявку'  subtitle='Наш специалист перезвонит вам в течении 5 мин' buttonTitle='вызов мастера'></Form>

                </div>
            </div>
            <div className="request__sale">
                <div className="request__title">
                    Скидка 15% на первый
                    ремонт в нашей мастерской.
                    Просто введите свой
                    Телефон и Имя.
                </div>
                <div className="request__note">
                    Выезд мастера для диагностики
                    по Санкт-Перербургу - бесплатно.
                </div>
            </div>
        </div>
    );
};

export default Request;