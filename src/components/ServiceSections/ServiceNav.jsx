// ServiceNav.jsx
import React from 'react';


const ServiceNav = ({ services, onSelectService }) => {
  return (
    <div className="service-nav">
      {services.map(service => (
        <button key={service.id} onClick={() => onSelectService(service)}>
          {service.name}
        </button>
      ))}
    </div>
  );
};

export default ServiceNav;
