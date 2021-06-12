import React from 'react';
import { NavLink } from 'react-router-dom';

import './footer.scss';

const Footer = () => (

    <footer className="footer">
        <nav className="footer__nav">

            <NavLink
                to="/about"
                className="footer__nav__element">
                A propos
            </NavLink>

            <NavLink
                to="/CGU"
                className="footer__nav__element">
                CGU
            </NavLink>
            
        </nav>
    </footer>

)

export default Footer;