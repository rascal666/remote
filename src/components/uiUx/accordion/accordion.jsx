import React, {useState} from 'react';
import plus from '../accordion/plus.svg';
import './accordion.scss'

const Accordion = ({text, children}) => {

    const [showAccordion, setShowAccordion] = useState(false)

    return (
        <div
            onClick={() => setShowAccordion(!showAccordion)}
            className={"accordion " + (showAccordion ? 'accordion__show' : 'hidden')}>
            <div
                 className="accordion__header " >

                <div className="accordion__header_text">{text}</div>
                <img className='accordion__header_icon' src={plus} alt=""/>
            </div>
            { showAccordion ? (
                    <div className="accordion__content">
                        {children}
                    </div>
                )
                 : false
            }

        </div>
    );
};

export default Accordion;