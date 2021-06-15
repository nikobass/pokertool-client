import React from 'react';
import Modal from 'src/components/Modal';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import './signup.scss';

const Signup = ({ showSignUpModal }) => {
	return (
		<div>
			<Modal 
			    isOpen={ showSignUpModal }
					title="inscription"
					content="testContent"
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	showSignUpModal: state.user.showSignUpModal,
});

export default connect (mapStateToProps)(Signup);