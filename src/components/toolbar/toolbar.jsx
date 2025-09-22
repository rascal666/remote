import React, {useEffect, useState} from 'react';
import logo from "../../assets/img/icons/logo.svg";
import phone from "../../assets/img/icons/phone.svg";
import './toolbar.scss'
import {NavLink, useNavigate} from 'react-router-dom';
import Hamburger from 'hamburger-react'


const Toolbar = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setOpen] = useState(false)

    const handleScroll = () => {
        console.log(window.scrollY)
        if (window.scrollY > 50) {
            console.log(window.scrollY)
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };



    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menu = [
        {title: 'Главная', link:'/' },
        {title: 'Услуги и цены', link:'/services'},
        {title: 'Скупка техники', link:'/buying'},
        {title: 'Вакансии', link:'/vacancies'},
        {title: 'Контакты', link:'/contacts'},
    ]

    function onClickMenu(link, index) {
        setActiveIndex(index)
        navigate(link)
        setOpen(false)
    }


    const navigate = useNavigate();
    return (
        <nav className={"navbar " + (isVisible && isOpen == false ? " navbar__absolute" : "") + (isOpen ? ' navbar__mobile' : '')}>
            <a href='#' className="navbar-logo">
                <img src={logo} alt=""/>
            </a>
            <div className="navbar-menu">
                {
                    menu.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.link}
                            // className может быть функцией в React Router v6+
                            // Она получает объект с isActive, isPending, и т.д.
                            className={({ isActive }) => isActive ? 'menuActive' : ''}
                            // 'end' гарантирует, что ссылка активна только
                            // при точном совпадении пути, а не просто при его начале.
                            // Это важно, чтобы '/' не был активен, когда вы на '/contacts'.
                            end
                        >
                            {item.title}
                        </NavLink>
                    ))
                }
            </div>

            <div className="navbar-phone">
                <div className="navbar-phone--icon">
                    <img src={phone} alt=""/>
                    <a href="tel:+78006006420">8 (800) 600-64-20</a>
                </div>

                <a href="tel:+73433022059">+7 (343) 302-20-59</a>
            </div>

            <div className={`${isOpen ? ' humburger_mobile' : ''}`}>
                <Hamburger direction="right" toggled={isOpen} toggle={setOpen} />
            </div>

        </nav>
    );
};

export default Toolbar;