// ServiceContent.jsx
import React from 'react';

const ServiceContent = ({ service }) => {
  console.log("Rendering ServiceContent for:", service.name);
  return (
    <div className="service-content">
      <h1>{service.name}</h1>
      <p>{service.content}</p>
    </div>
  );
};

export default ServiceContent;