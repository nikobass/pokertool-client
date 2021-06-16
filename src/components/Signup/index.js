import React from 'react';
import Modal from 'src/components/Modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './signup.scss';
import { changeInputValue } from '../../actions/user';
// import { showSignUpModal } from 'src/actions/user.js';

const Signup = ({ 
	
	showSignUpModal,
    //Fonction qui gère la modification des inputs: pseudo, email emailConfirm password et passwordConfirm (champs controlés)
	handleSignUpChange
}) => {
	return (
		<div>
			<Modal 
			    isOpen={ showSignUpModal }
					title="inscription"
					content={(
						<form className="inscriptionForm">
								<label htmlFor="email" className="inscriptionForm__label">Pseudo</label>
								<input onChange={ handleSignUpChange } type="text" name="signUpPseudoInput" className="inscriptionForm__input" />

								<label htmlFor="email" className="inscriptionForm__label">Email</label>
								<input onChange={ handleSignUpChange } type="email" name="SignUpEmailInput" className="inscriptionForm__input" />

								<label htmlFor="emailConfirmation" className="inscriptionForm__label">Confirmation de l'Email</label>
								<input onChange={ handleSignUpChange } type="email" name="signUpEmailConfirmInput" className="inscriptionForm__input" />

								<label htmlFor="passwordConfirmation" className="inscriptionForm__label">Mot de passe</label>
								<input onChange={ handleSignUpChange } type="password" name="signUpPasswordInput" className="inscriptionForm__input" />

								<label htmlFor="password" className="inscriptionForm__label">Confirmation du mot de passe</label>
								<input onChange={ handleSignUpChange } type="password" name="signUpPasswordConfirmInput" className="inscriptionForm__input" />

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

const mapDispatchToProps = (dispatch) => ({
	handleSignUpChange: (event) => {
		dispatch(changeInputValue(event.target.value, event.target.name))
	}
});

Signup.propTypes = {
  showSignUpModal: PropTypes.bool.isRequired,
}

export default connect (mapStateToProps, mapDispatchToProps)(Signup);