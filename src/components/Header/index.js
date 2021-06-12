import React from 'react';
import './header.scss';

const Header = () => (
<header className="header">

    <div className="header__logo">
        {/* En attente du logo */}
        <img className="header__logo_img" src="#" alt="Logo" />
        <span className="header__logo__title">Poker Tool</span>
    </div>

    <nav className="header__navbar">
        <ul className="header__navbar__list">
            <li className="header__navbar__list__element">Accueil</li>
            <li className="header__navbar__list__element">Mes tournois</li>
            <li className="header__navbar__list__element">Mes jetons</li>
            <li className="header__navbar__list__element">Répartiteur</li>
            <li className="header__navbar__list__element">FAQ</li>
            <li className="header__navbar__list__element">Mon profil</li>
        </ul>
    </nav>

    <div className="header__connexion">
        <button className="header__connexion__button">Connexion</button>
    </div>

</header>

)

export default Header;