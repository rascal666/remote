import React from 'react';
import './price.scss'
import ItemPrice from "../../uiUx/itemPrice/itemPrice.jsx";


const Price = ({json, title}) => {


    const priceList = json.map((item, index) => (
        <ItemPrice key={index} price={item.price} title={item.title} />
    ));


    return (
        <div className='price'>
            <p className='price__title'>{title}</p>

            <ul className="ingredients">
                {priceList}
            </ul>

        </div>
    );
};

export default Price;