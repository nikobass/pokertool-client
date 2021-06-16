import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { showConnectionModal, changeInputValue } from 'src/actions/user.js'
import Modal from 'src/components/Modal';
import { submitLogin } from '../../actions/user';

import './header.scss';


const Header = ({ 
    isLogged, 
    handleShowModal, 
    showConnectionModal,
    handleLogin,
    handleInputChange }) => {
    
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
                <img className="header__logo_img" src="#" alt="Logo" />
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
                >Mes tournois</NavLink>
                <NavLink
                    to="/chip"
                    className="header__navbar__element"
                    activeClassName="header__navbar__element--selected"
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
                >Mon profil</NavLink>
            </nav>

            <div className="header__connexion">
                <button onClick={handleShowModal} type="button" className={isLogged ? "header__connexion__button invisible" : "header__connexion__button"}>Connexion</button>
                <button type="button" className={!isLogged ? "header__connexion__button invisible" : "header__connexion__button"}>Déconnexion</button>
            </div>
        </header >
        <Modal
            isOpen={showConnectionModal}
            title='Connexion'
            content={(
                <form className="connexionForm" onSubmit={handleLogin}>
                    <label htmlFor="email" className="connexionForm__label">Email</label>
                    <input onChange={handleInputChange} type="email" name="email" className="connexionForm__input" />
                    <label htmlFor="password" className="connexionForm__label">Mot de passe</label>
                    <input onChange={handleInputChange} type="password" name="password" className="connexionForm__input" />
                    <p className="connexionForm__forgotPassword">Mot de passe oublié ? <span onClick={redirectToResetPassword} className="connexionForm__forgotPasswordLink">Cliquez-ici</span></p>
                    <button type="submit" className="connexionForm__submit">Se connecter</button>
                </form>
            )}
        />
    </>
)};

Header.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    handleShowModal: PropTypes.func.isRequired,
    showConnectionModal: PropTypes.bool.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    isLogged: state.user.isLogged,
    showConnectionModal: state.user.showConnectionModal
});

const mapDispatchToProps = (dispatch) => ({
    handleShowModal: () => {
        dispatch(showConnectionModal());
    },
    handleLogin: (event) => {
        event.preventDefault();
        //TODO: controle des saisies.......................

        dispatch(submitLogin());
    },
    handleInputChange: (event) => {
        dispatch(changeInputValue(event.target.value, event.target.name));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
