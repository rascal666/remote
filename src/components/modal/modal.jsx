import React, {useState} from 'react';
import './modal.scss'
import Button from "../uiUx/button/button.jsx";
import CloseSvg from "../../svgIcons/closeSvg.jsx";

const Modal = ({children, button }) => {

    const [isModal, setIsModal] = useState(false);
    console.log(isModal)
    return (
        <div>
            <div className={'modal ' + (isModal? 'modalShow': '')} onClick={() => {setIsModal(false)}}>
                <div className="modal__container" onClick={(e) => e.stopPropagation()}>
                    <div className={'modal__content ' + (isModal? 'modalShow': '')}>
                        <CloseSvg onClick={() => {setIsModal(false)}} className='modal__close'></CloseSvg>

                        {children}
                    </div>
                </div>
            </div>
            <Button onClick={() => {setIsModal(true)}} >{button}</Button>
        </div>
    );
};

export default Modal;