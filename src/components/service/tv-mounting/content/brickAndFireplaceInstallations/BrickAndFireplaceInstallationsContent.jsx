import React from 'react';
import '../Content.css';
import '../../service_components_app.css';
import ServiceNavBar from '../../navigation/ServiceNavBar';

const BrickAndFireplaceInstallationsContent = () => {
    return (
      <div className="app">
            <div className="main">
                <ServiceNavBar className="service-navbar" />
                <div className="content">
                    <p>
                        BRICK AND FIREPLACE INSTALLATIONS
                    </p>
                    <div className="image-gallery">
                        {/* Add your images here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrickAndFireplaceInstallationsContent;
