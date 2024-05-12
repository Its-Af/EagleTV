// ServicePage.jsx
import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import ServiceNav from '../components/ServiceSections/ServiceNav';
import ServiceContent from '../components/ServiceSections/ServiceContent';
import '../components/ServiceSections/ServicePage.css';

const servicesList = [
  { id: 1, name: "General TV Installations", content: "Content for General TV Installations" },
  { id: 2, name: "LED Backlights", content: "Content for LED Backlights" },
  { id: 3, name: "Brick and Fireplace Installations", content: "Content for Brick and Fireplace Installations" },
  // Add other services here
];

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(servicesList[0]);

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  return (
    <>
      <NavBar />
      <div className="service-page-container">
        <ServiceNav services={servicesList} onSelectService={handleSelectService} />
        <ServiceContent service={selectedService} />
      </div>
    </>
  );
};

export default ServicePage;
