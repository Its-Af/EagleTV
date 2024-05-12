import React from 'react';
import './PackageSection.css'; // Make sure to create corresponding CSS for styling

const PackageCard = ({ title, price, features }) => {
    return (
      <div className="package-card">
        <div className="card-content">
          <div className="package-header">
            <h2 className="package-title">{title}</h2>
            <span className="package-price">{price}</span>
          </div>
          <ul className="package-features">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    );
  };

export default PackageCard;
