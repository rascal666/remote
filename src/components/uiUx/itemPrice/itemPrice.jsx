import React from 'react';
import './itemPrice.scss'

const ItemPrice = ({title, price}) => {
    return (
        <li className='ItemPrice'>{title}<span className="value">{price}</span></li>
    );
};

export default ItemPrice;