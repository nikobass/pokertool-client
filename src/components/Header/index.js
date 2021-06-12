import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';


const Header = () => (
    <header className="header">

        <div className="header__logo">
            {/* En attente du logo */}
            <img className="header__logo_img" src="#" alt="Logo" />
            <span className="header__logo__title">Poker Tool</span>
        </div>

        <nav className="header__navbar">
            <NavLink
                to="/accueil"
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
            <button className="header__connexion__button">Connexion</button>
        </div>

    </header >

)

export default Header;