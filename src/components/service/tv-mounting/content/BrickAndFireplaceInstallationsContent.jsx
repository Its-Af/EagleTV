import React from 'react';
import '../../Content.css';
import '../../service_components_app.css';
import ServiceNavBar from '../navigation/tv-mounting-navbar';

import { isMobile } from 'react-device-detect';


const BrickAndFireplaceInstallationsContent = () => {
    if (isMobile) {
        return (
            <div className="app">
                    <div className="main">
                        <ServiceNavBar className="service-navbar" />
                        <div className="content">
                            <p>
                                MOBILE VIEW - BRICK AND FIREPLACE INSTALLATIONS
                            </p>
                            <div className="image-gallery">
                                {/* Add your images here */}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
    return (
        <div className="app">
            <div className="main">
                <ServiceNavBar className="service-navbar" />
                <div className="content">
                    <p>
                        DESKTOP VIEW - BRICK AND FIREPLACE INSTALLATIONS
                    </p>
                    <div className="image-gallery">
                        {/* Add your images here */}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BrickAndFireplaceInstallationsContent;
