import React from 'react';
import Subtitle from "../../../../uiUx/subtitle/subtitle.jsx";
import Form from "../../../../form/form.jsx";
import Modal from "../../../../modal/modal.jsx";
import './guarantee.scss'

const Guarantee = ({isForm}) => {
    return (
        <div className="guarantee">
            <Subtitle subtitle='Гарантия'></Subtitle>
            <div className="guarantee__impotent">
                Мы предоставляем гарантию на ремонт техники до 1 года!
            </div>
            <div className="guarantee__text">
                Гарантия распространяется на производимый ремонт и заменяемые запчасти. Это значит, что в гарантийный период, в случае поломки техники, мастер починит её бесплатно. Как правило, качество деталей и производимого ремонта высокое и выполняемый гарантийный ремонт составляет всего 8%. Обратившись к нам вы получаете работоспособное изделие на весь гарантийный срок!
            </div>

            <Modal button='вызвать мастера'>
                <Form isForm={isForm} buttonTitle='отправить'
                      title='Пожалуйста, оставьте свои данные'
                      subtitle='И мы свяжемся с Вами в ближайшее время' ></Form>
            </Modal>
        </div>
    );
};

export default Guarantee;