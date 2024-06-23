import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/homepage.jpg';

const Hero = () => {
    
    return (
        <>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            {/* <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>
                <div className="m-auto overflow-hidden mx-2 mt-4 p-2 md:h-auto h-screen " data-aos="zoom-in">
                    <div id='heroCard' className="flex flex-col py-8 justify-center items-center text-center md:flex-row md:justify-between md:items-center">
                        <div className="w-full md:w-1/2 flex flex-col justify-center centerText" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800" style={{ textShadow: '1.5px 1.5px 3px white, -1px -1px 2px gray' }}>
                                Atlanta's Best Same-Day TV Mounting Service
                            </h1>
                            <div className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight mb-5 text-gray-700" style={{ textShadow: '2px 2px 4px rgba(237, 233, 157, 0.5)' }}>
                                We are a team of highly motivated and skilled technicians dedicated to delivering high-quality TV, soundbar, and security camera mounting
                            </div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <a href="https://m.me/eagletvmountinggeorgia?ref=w15257972" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 hover:bg-blue-800 inline-flex items-center justify-center px-6 py-3 my-4 text-lg md:text-xl shadow-xl rounded-2xl">
                                    Get a Free Quote
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

                                {/* <a href="https://m.me/eagletvmountinggeorgia?ref=w15257972" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 hover:bg-blue-800 inline-flex items-center justify-center px-6 py-3 my-4 text-lg md:text-xl shadow-xl rounded-2xl">
                                    Get a Free Quote
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </a> */}
            <div className="hero-section">
                <div>
                    <NavBar />
                </div>
                {/* <img src="./images/homepage.jpg" alt="Home theater setup" className="hero-image"/> */}
                <div className="hero-content">
                    <h1>Atlanta's Best Same Day TV Mounting Service</h1>
                    <p>We are a team of skilled technicians and an insured professional service dedicated to delivering high-quality TV, soundbar, and security camera mounting</p>
                    <div className="hero-ctas">
                        <div className="call-now-btn">CALL US NOW! 470-206-0288</div>
                        <a className="setup-appointment-btn" href="https://m.me/eagletvmountinggeorgia?ref=w15257972" target="_blank">
                            Or Get a Free Quote
                        </a>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Hero;