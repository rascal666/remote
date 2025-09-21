import React from 'react';
import './contacts.scss'
import Form from "../form/form.jsx";
import Title from "../uiUx/title/title.jsx";
import Container from "../../assets/img/container/container.jsx";

const Contacts = () => {


    return (
       <Container>
           <div className='contacts'>
               <Title title='Контакты' />
               <iframe className='contacts__map'
                       src="https://yandex.ru/map-widget/v1/?ll=30.287930%2C59.859876&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzQxMTcxNBJe0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0JrRgNCw0YHQvdC-0L_Rg9GC0LjQu9C-0LLRgdC60LDRjyDRg9C70LjRhtCwLCA2OSIKDbBN8kEVg3BvQg%2C%2C&z=17.06"
                       width="100%" height="400"  ></iframe>

               <div className="contacts__info">
                   <div className="contacts__info_block">
                       <p className="contacts__info_title">Адрес:</p>
                       <p className="contacts__info_text">г.Санкт-Петербург, Краснопутиловская улица, 69</p>
                   </div>
                   <div className="contacts__info_block">
                       <p className="contacts__info_title">Телефон:</p>
                       <a className="contacts__info_text" href="tel:+78006006420"> 8 (800) 600-64-20</a>
                       <a className="contacts__info_text" href="tel:+73433022059"> +7 (343) 302-20-59</a>
                   </div>
                   <div className="contacts__info_block">
                       <p className="contacts__info_title">E-mail:</p>
                       <a href="mailto:support@remont.pro">
                           support@remont.pro
                       </a>
                   </div>
                   <div className="contacts__info_block">
                       <p className="contacts__info_title">Режим работы:</p>
                       <p className="contacts__info_text">Пн. – Вс.: с 09:00 до 21:00 Прием бытовой техники и Электроники осуществляется с 10:00 до 21:00</p>
                   </div>
                   <div className="contacts__info_block">
                       <p className="contacts__info_title">Реквизиты:</p>
                       <p className="contacts__info_text"><b>"Ремонт-Про"</b></p>
                       <p className="contacts__info_text">ОГРНИП: 322665800145401</p>
                       <p className="contacts__info_text">ИНН: 660705820303</p>
                       <p className="contacts__info_text">ИП Бердников Никита Сергеевич</p>
                   </div>
               </div>

               <Form isForm='контакты' buttonTitle='Отправить' title='Обратный звонок:' subtitle='Обратный звонок:'></Form>
           </div>
       </Container>
    );
};

export default Contacts;