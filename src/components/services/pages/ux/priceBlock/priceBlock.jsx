import React from 'react';
import Subtitle from "../../../../uiUx/subtitle/subtitle.jsx";
import Price from "../../../../buying/price/price.jsx";
import './priceBlock.scss'
import Modal from "../../../../modal/modal.jsx";
import Form from "../../../../form/form.jsx";

const PriceBlock = ({title, arrayPrice}) => {



    return (
        <div className="priceBlock">
            <Subtitle subtitle={title}></Subtitle>



            <div className='priceBlock__block'>

                {
                    arrayPrice.map((item, index) => {
                        return (
                            <Price key={index} title={item.title} json={item.json}></Price>
                        )
                    })
                }
            </div>

            <span className='priceBlock__note'>*После диагностики, стоимость ремонта обязательно согласовывается</span>

            <Modal button='вызвать мастера'>
                <Form buttonTitle='отправить'
                      title='Пожалуйста, оставьте свои данные'
                      subtitle='И мы свяжемся с Вами в ближайшее время'></Form>
            </Modal>

        </div>
    );
};

export default PriceBlock;