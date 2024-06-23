import React from 'react';
import TechsMountingTV_2 from '../images/TechsMountingTV_2.jpeg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
                <div className="mt-20 md:mt-20 m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={TechsMountingTV_2} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-duration="300">
                            
                            <h3 className="text-3xl  text-blue-600 font-bold">Our mission is to provide exceptional service and high-quality installations for all of our clients.</h3>
                            {/* <h3 className="text-3xl  text-blue-600 font-bold"> We strive to exceed customer expectations and ensure that every installation is completed with the utmost attention to detail and safety.</h3> */}
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We understand the importance of having a properly mounted TV for both aesthetics and functionality. Whether it’s for a home theater setup or a business display, we are committed to delivering the best possible result.</p>
                            </div>
                            
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Our team of experienced technicians is trained and certified to handle any installation, no matter the size or complexity.</p>
                            </div>

                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We guarantee safe installations with 100% lifetime "No Fall" warranty.</p>
                            </div>
                            <Link to="/contact" className="text-white bg-blue-600 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Contact us
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;