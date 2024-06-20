import React from 'react';
import './Content.css';
import '../../service_components_app.css';
import ServiceNavBar from '../../navigation/ServiceNavBar';

const GeneralTVInstallationsContent = () => {
    return (
      <div className="app">
            <div className="main">
                <ServiceNavBar className="service-navbar" />
                <div className="content">
                    <p>
                        GENERAL TV INSTALLATIONS CONTENT
                    </p>
                    <div className="image-gallery">
                        {/* Add your images here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralTVInstallationsContent;
