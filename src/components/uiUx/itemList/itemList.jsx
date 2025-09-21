import React from 'react';
import './itemList.scss'

const ItemList = ({ icon, text, number }) => {
    return (
        <div className='itemList' >
            {number !== undefined ? (
                <span className='ItemList__number' >{number}.</span>
            ) : (
                <img src={icon} alt="icon"  />
            )}
            <span>{text}</span>
        </div>
    );
};


export default ItemList;