import React from 'react';
import './arrow.scss'

const Arrow = ({icon, classe}) => {
    return (
        <div className={'arrow ' + `${classe}`}>
            <img src={icon} alt=""/>
        </div>
    );
};

export default Arrow;