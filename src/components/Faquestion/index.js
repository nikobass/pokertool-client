import React from 'react';
import PropTypes from 'prop-types';

import './faquestion.scss';

const Faquestion = ({ question, answer }) => (

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

);

Faquestion.protoTypes = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
};

export default Faquestion;