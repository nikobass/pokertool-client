import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {showConnectionModal} from 'src/actions/user.js'
import Modal from 'src/components/modal';
import './header.scss';


const Header = ({ isLogged, handleShowModal, showConnectionModal }) => (
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
        <Modal isOpen={showConnectionModal} title='Mon titre' content='Mon contenu'/>
    </>
)

Header.propTypes = {
    isLogged: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    isLogged: state.user.isLogged,
    showConnectionModal: state.user.showConnectionModal
})

const mapDispatchToProps= (dispatch) => ({
    handleShowModal: () => {
        dispatch(showConnectionModal());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);