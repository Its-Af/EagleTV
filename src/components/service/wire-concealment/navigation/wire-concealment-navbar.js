import React from 'react';
import './wire-concealment-navbar.css';

import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    return (
        <div className="navbar">
            <h2>Services</h2>
            <ul>
                <HashLink smooth to="/services/wire-concealment/cord-covers"><li>Cord Covers</li></HashLink>
                <HashLink smooth to="/services/wire-concealment/outlet-creation"><li>Outlet Creation</li></HashLink>
            </ul>
        </div>
    );
};

export default NavBar;