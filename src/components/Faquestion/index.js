import React from 'react';

import './faquestion.scss';

const Faquestion = ({question, answer}) => (

    <div className="faq">
        <ul>
            <li className="question">
                {question}
            </li>
            <li className="answer">
                {answer}
            </li>
        </ul>
    </div>

)

export default Faquestion;