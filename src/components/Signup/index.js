import React from 'react';
import Modal from 'src/components/Modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './signup.scss';
// import { showSignUpModal } from 'src/actions/user.js';

const Signup = ({ showSignUpModal }) => {
	return (
		<div>
			<Modal 
			    isOpen={ showSignUpModal }
					title="inscription"
					content={(
						<form className="inscriptionForm">
								<label htmlFor="email" className="inscriptionForm__label">Pseudo</label>
								<input type="email" name="inscriptionEmailInput" className="inscriptionForm__input" />

								<label htmlFor="email" className="inscriptionForm__label">Email</label>
								<input type="email" name="inscriptionEmailInput" className="inscriptionForm__input" />

								<label htmlFor="emailConfirmation" className="inscriptionForm__label">Confirmation de l'Email</label>
								<input type="email" name="inscriptionEmailInput" className="inscriptionForm__input" />

								<label htmlFor="passwordConfirmation" className="inscriptionForm__label">Mot de passe</label>
								<input type="password" name="inscriptionPasswordInput" className="inscriptionForm__input" />

								<label htmlFor="password" className="inscriptionForm__label">Confirmation du mot de passe</label>
								<input type="password" name="inscriptionPasswordInput" className="inscriptionForm__input" />

								<button type="submit" className="inscriptionForm__submit">Valider</button>
						</form>
				)}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isLogged: state.user.isLogged,
	showSignUpModal: state.user.showSignUpModal,
});

Signup.propTypes = {
  showSignUpModal: PropTypes.bool.isRequired,
}

export default connect (mapStateToProps)(Signup);