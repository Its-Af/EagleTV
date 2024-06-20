import React from 'react';
import './Content.css';
import '../service_components_app.css';
// import tv1 from '../assets/tv1.jpg'; // Example image paths
// import tv2 from '../assets/tv2.jpg';
// import tv3 from '../assets/tv3.jpg';
// import tv4 from '../assets/tv4.jpg';
// import tv5 from '../assets/tv5.jpg';
// import tv6 from '../assets/tv6.jpg';

const Content = () => {
    return (
        <div className="content">
            <p>
                With a variety of offerings and styles to choose from, we are sure you will be happy with us working for you. 
                Look around our website and check out the details and quality of our work, we don't compete on price, we compete 
                on quality of service and client satisfaction.
            </p>
            <div className="image-gallery">
                {/* <img src={tv1} alt="TV Installation 1" />
                <img src={tv2} alt="TV Installation 2" />
                <img src={tv3} alt="TV Installation 3" />
                <img src={tv4} alt="TV Installation 4" />
                <img src={tv5} alt="TV Installation 5" />
                <img src={tv6} alt="TV Installation 6" /> */}
            </div>
        </div>
    );
};

export default Content;
