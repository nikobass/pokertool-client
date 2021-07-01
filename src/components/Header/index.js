import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { 
    showConnectionModal, 
    showUnauthorizedModal, 
    changeConnectionInput, 
    submitLogin, 
    hideModal, 
    submitLogout ,
    signUpForm
} from 'src/actions/user.js'
import Modal from 'src/components/Modal';

import './header.scss';
// import logo from 'src/assets/images/logo.png';
import logo from 'src/assets/images/logo_blanc.svg';
// import logo from 'src/assets/images/logo_noir_text.svg';
// import logo from 'src/assets/images/logo_noir.svg';


const Header = ({
    isLogged,
    handleShowModal,
    showConnectionModal,
    showUnauthorizedModal,
    handleLogin,
    handleConnectionInput,
    handleUnauthorizedModal,
    handleLogout,
    isSigninError,
    emailValue,
    passwordValue,
    handleShowSignupModal
}) => {

    const history = useHistory();

    const redirectToResetPassword = () => {
        history.push('/resetPassword');
    }

    return (
        <>
            <header className="header">

                <NavLink
                    to="/"
                    exact
                    className="header__logo"
                >
                    {/* En attente du logo */}
                    <img className="header__logo__img" src={logo} alt="Logo" />
                    <span className="header__logo__title">Poker Tool</span>
                </NavLink>

                <nav className="header__navbar">
                    <NavLink
                        to="/"
                        exact
                        className="header__navbar__element"
                        activeClassName="header__navbar__element--selected"
                    >Accueil</NavLink>
                    <NavLink
                        to="/tournaments"
                        className="header__navbar__element"
                        activeClassName="header__navbar__element--selected"
                        onMouseDown={!isLogged ? handleUnauthorizedModal : undefined}
                    >Mes tournois</NavLink>
                    <NavLink
                        to="/chip"
                        className="header__navbar__element"
                        activeClassName="header__navbar__element--selected"
                        onMouseDown={!isLogged ? handleUnauthorizedModal : undefined}
                    >Mes jetons</NavLink>
                    <NavLink
                        to="/distributor"
                        className="header__navbar__element"
                        activeClassName="header__navbar__element--selected"                       
                    >Répartiteur</NavLink>
                    <NavLink
                        to="/faq"
                        className="header__navbar__element"
                        activeClassName="header__navbar__element--selected"
                    >FAQ</NavLink>
                    <NavLink
                        to="/profil"
                        className="header__navbar__element"
                        activeClassName="header__navbar__element--selected"
                        onMouseDown={!isLogged ? handleUnauthorizedModal : undefined}
                    >Mon profil</NavLink>
                </nav>

                <div className="header__connexion">
                    <button onClick={handleShowModal} type="button" className={isLogged ? "header__connexion__button invisible" : "header__connexion__button"}>Connexion</button>
                    <NavLink
                      to="/">
                      <button 
                        type="button" 
                        className={!isLogged ? "header__connexion__button invisible" : "header__connexion__button"}
                        onClick={handleLogout}
                        >
                          Déconnexion
                      </button>
                    </NavLink>
                </div>
            </header >
            <Modal
                isOpen={showConnectionModal}
                title='Connexion'
                content={(
                    <form className="connexionForm" onSubmit={handleLogin}>
                        <label htmlFor="email" required className="connexionForm__label">Email</label>
                        <input onChange={handleConnectionInput} type="email" name="email" required value={emailValue} className="connexionForm__input" />
                        <label htmlFor="password" className="connexionForm__label">Mot de passe</label>
                        <input onChange={handleConnectionInput} type="password" name="password" required value={passwordValue} className="connexionForm__input" />
                        <p className="connexionForm__forgotPassword">Mot de passe oublié ? <span onClick={redirectToResetPassword} className="connexionForm__forgotPasswordLink">Cliquez-ici</span></p>
                        {isSigninError && <p>{isSigninError}</p>}
                        {<button type="submit" className="connexionForm__submit">Se connecter</button>}
                    </form>
                )}
            />
            <Modal
                isOpen={showUnauthorizedModal}
                title="Contenu inaccessible"
                content={(
                    <div className="modalUnauthorized">
                        <p className="modalUnauthorized__paragraph">Vous devez être connecté pour accéder à ce contenu.</p>
                        <p className="modalUnauthorized__paragraph">Déjà inscrit ? <button onClick={handleShowModal} className="modalUnauthorized__button">Me connecter</button></p>
                        <p className="modalUnauthorized__paragraph">Pas encore inscrit ? <button onClick={handleShowSignupModal} className="modalUnauthorized__button">Créer un compte</button></p>
                    </div>
                )}
            />
        </>
    )
}

Header.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    handleShowModal: PropTypes.func.isRequired,
    showConnectionModal: PropTypes.bool.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleConnectionInput: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    isLogged: state.user.isLogged,
    showConnectionModal: state.user.showConnectionModal,
    showUnauthorizedModal: state.user.showUnauthorizedModal,
    emailValue: state.user.email,
    passwordValue: state.user.password,
    isSigninError: state.user.loginError
})

const mapDispatchToProps = (dispatch) => ({
    handleShowModal: () => {
        dispatch(showConnectionModal());
    },
    handleShowSignupModal: () => {
      dispatch(signUpForm());
    },
    handleLogin: (event) => {
        event.preventDefault();
        //TODO: controle des saisies.......................
        dispatch(submitLogin());
    },
    handleConnectionInput: (event) => {
        dispatch(changeConnectionInput(event.target.value, event.target.name));
    },
    handleUnauthorizedModal: () => {
        dispatch(showUnauthorizedModal());
    },
    handleShowModal: () => {
        dispatch(hideModal());
        dispatch(showConnectionModal());
    },
    handleLogout: () => {
        dispatch(submitLogout());
        localStorage.removeItem('token');
        localStorage.removeItem('userId');  
        localStorage.removeItem('nickname');  
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
