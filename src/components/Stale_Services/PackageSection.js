// PackageSection.jsx
import React from 'react';
import PackageCard from './TVmountPackageCard';
import NavBar from '../Navbar/NavBar';
import './PackageSection.css'; // Make sure to create corresponding CSS for styling

const packages = [
  {
    title: 'BRONZE PACKAGE',
    price: '$5499',
    features: [
      'Vivitek projector 1080p',
      'Innovations screen fixed 110 inch',
      '5.1 monitor audio',
      '6.5 inch in wall speaker',
      // ...other features
    ],
  },
  {
    title: 'SILVER PACKAGE',
    price: '$7999',
    features: [
      'Yamaha 7.1 receiver',
      'Sony projector 1080p',
      // ...other features
    ],
  },
  {
    title: 'GOLD PACKAGE',
    price: '$12500',
    features: [
      'JBC projector 4k',
      // ...other features
    ],
  },
  // ...other packages
];

const PackageSection = () => {
  return (
    <div>

        <div className="package-sectiondiv mt-20 md:mt-20">
        {packages.map((packageItem, index) => (
            <PackageCard key={index} {...packageItem} />
        ))}
        </div>
    </div>
  );
};

export default PackageSection;
