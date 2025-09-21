import React from 'react';
import logo from '../../assets/img/icons/logo.svg';
import modul from '../../assets/img/icons/mobul.svg';
import './footer.scss'
import Container from "../../assets/img/container/container.jsx";

const Footer = () => {
    return (
        <Container>
            <div className="footer">
                <div className="footer__logo">
                    <img src={logo} alt=""/>
                </div>

                <div className="footer__adress">
                    г. Санкт-Петербург, Краснопутиловская 69
                </div>
                <a className='footer__email' href="mailto:support@remont.pro">
                    support@remont.pro
                </a>
            </div>
        </Container>
    );
};

export default Footer;