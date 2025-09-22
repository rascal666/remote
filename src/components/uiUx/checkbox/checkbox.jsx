import React from 'react';
import './checkbox.scss'

const Checkbox = ({ checked, onCheckboxChange }) => {

    const handleChange = () => {
        onCheckboxChange(!checked); // Передаем новое состояние родителю
    };


    return (
        <div className='checkbox' >
            <input className='checkbox__input' type="checkbox" checked={checked}  onChange={handleChange} />
            <p  className='checkbox__note'>Нажимая кнопку, вы даете согласие на обработку персональных данных</p>
        </div>
    );
};

export default Checkbox;