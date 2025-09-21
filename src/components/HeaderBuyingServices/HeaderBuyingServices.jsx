import React from 'react';
import back from '../../assets/img/icons/back.svg';
import Form from "../form/form.jsx";
import './HeaderBuyingServices.scss'
import Container from "../../assets/img/container/container.jsx";
import BackSvg from "../../svgIcons/backSvg.jsx";
import {useNavigate} from "react-router-dom";

const HeaderBuyingServices = ({bg, title, children, bgColor, isForm}) => {

    const navigate = useNavigate();
    const sectionStyle = {
        backgroundColor: `${bgColor}`,
    };

    return (
        <div style={sectionStyle} className='HeaderBuyingServices'>
            <Container>
                <div className="HeaderBuyingServices__content">
                    <div  className="HeaderBuyingServices__left">
                        <div className="HeaderBuyingServices__back">
                            <BackSvg/>
                            <span onClick={() => navigate(-1)}>Вернуться</span>
                        </div>
                        <p className="HeaderBuyingServices__title">{title}</p>
                        <img className='HeaderBuyingServices__bgImg-mobile' src={bg} alt=""/>

                        <div className='HeaderBuyingServices__block'>
                            {children}
                            <div className="HeaderBuyingServices__form">
                                <Form isForm={isForm} showName={false} buttonTitle='Узнать стоимость'></Form>
                            </div>
                        </div>
                    </div>
                    <div className="HeaderBuyingServices__ritgh">
                        <img className='HeaderBuyingServices__bgImg' src={bg} alt=""/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HeaderBuyingServices;