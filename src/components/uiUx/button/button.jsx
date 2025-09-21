import React from 'react';
import './button.scss'

const Button = ({children, disabled = false, buttonWhite=false, buttonWhiteBorder=false, ...props}) => {

   let styleButton = ''
    console.log(styleButton)
    if (buttonWhite === true) {
        styleButton = 'button-white'
    }
    if (buttonWhiteBorder === true) {
        styleButton = 'button-whiteBorder'
    }


    return (
        <button {...props} className={`button ${styleButton}`} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;