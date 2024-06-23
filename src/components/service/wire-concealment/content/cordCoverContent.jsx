import React from 'react';
import '../../Content.css';
import '../../service_components_app.css';
import ServiceNavBar from '../navigation/wire-concealment-navbar';

const CordConcealment = () => {
    return (
      <div className="app">
            <div className="main">
                <ServiceNavBar className="service-navbar" />
                <div className="content">
                    <p>
                        WIRE CONCEALMENT - CORD COVER
                    </p>
                    <div className="image-gallery">
                        {/* Add your images here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CordConcealment;
