import React from 'react';
import './ServiceNavBar.css';

import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    return (
        <div className="navbar">
            <h2>Services</h2>
            <ul>
                <HashLink smooth to="/services/general-tv-installations"><li>General TV Installations</li></HashLink>
                <HashLink smooth to="/services/general-tv-installations"><li>LED Back Lights</li></HashLink>
                <HashLink smooth to="/services/brick-and-fireplace-installations"><li>Brick and Fireplace Installations</li></HashLink>
                <HashLink smooth to="/services/general-tv-installations"><li>Artwork & Mirror Installations</li></HashLink>
                <HashLink smooth to="/services/general-tv-installations"><li>Sonos Installations</li></HashLink>
                <HashLink smooth to="/services/general-tv-installations"><li>Televisions on Columns</li></HashLink>
                <HashLink smooth to="/services/general-tv-installations"><li>Before & After TV on My Wall</li></HashLink>
                <HashLink smooth to="/services/general-tv-installations"><li>Business and Commercial Installations</li></HashLink>
            </ul>
        </div>
    );
};

export default NavBar;