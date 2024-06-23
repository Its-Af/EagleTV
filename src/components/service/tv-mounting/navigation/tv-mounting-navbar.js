import React from 'react';
import './tv-mounting-navbar.css';

import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    return (
        <div className="navbar">
            <h2>Services</h2>
            <ul>
                <HashLink smooth to="/services/tv-installations/general-tv-installations"><li>General TV Installations</li></HashLink>
                <HashLink smooth to="/services/tv-installations/brick-and-fireplace"><li>Brick and Fireplace Installationts</li></HashLink>
            </ul>
        </div>
    );
};

export default NavBar;