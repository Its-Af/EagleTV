import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';



const Services = () => {
    if (isMobile) {
        return (
        <div id="services" className="mt-20 md:mt-20 bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-600 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-600'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-600">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-duration="300">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <HashLink smooth to="/services/tv-installations/general-tv-installations">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <Link to="/services/tv-installations/general-tv-installations" className="text-white bg-blue-600 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                        TV Mounting
                                    </Link>                                        
                                    <p className="text-md font-medium">Elevate your viewing experience with our basic TV mounting and installation service. Our skilled team ensures a secure setup and precise placement, turning your entertainment space into a modern marvel.</p>
                                </HashLink>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    {/* <h2 className="font-semibold my-4 text-2xl text-center text-blue-600">Wire Concealment</h2> */}
                                    <Link to="/services/wire-concealment/cord-covers" className="text-white bg-blue-600 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                        Wire Concealment
                                    </Link>
                                    <p className="text-md font-medium">
                                    Experience a cleaner, more professional look with our wire concealment service for TV mounting. Let our skilled technicians expertly hide cables and cords, transforming your space into a sleek, clutter-free environment.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <Link to="/services/security-cameras/general-camera-installations" className="text-white bg-blue-600 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                        Security Camera Installations
                                    </Link>                                    
                                    <p className="text-md font-medium">
                                    Ensure peace of mind with our professional security camera installation service. Our expert technicians provide customized solutions to enhance the safety and security of your business.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                <Link to="/services/home-theaters/general-theater-installations" className="text-white bg-blue-600 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                    Home Theater Installations
                                </Link>                                    
                                    <p className="text-md font-medium">
                                    Transform your entertainment space with our premium home theater installation service. Our experts specialize in advanced mounting solutions and audio setup to create the ultimate cinematic experience right in your home.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="centerText lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-600 mb-4' style={{justifyContent:"center", display:"flex"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-600 
                            font-bold">Community <span className='font-black'>Centered</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                Serving Residential & Commercial Clients In The Greater Atlanta Area Since 2008.
                                </p>
                            </div>
                        </div>

                        <div className="centerText lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-600 mb-4' style={{justifyContent:"center", display:"flex"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-600 font-bold">Readily <span className='font-black'>Available</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Eagle TV Mounting experts are available 7 days a week to hang your TV perfectly.</p>
                            </div>
                        </div>

                        <div className="centerText lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-600 mb-4' style={{justifyContent:"center", display:"flex"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-600 font-bold">Hassle <span className='font-black'>Free</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Don’t have a mounting bracket? We can bring one for you! Want the wires hidden? We got you!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
        )
    }
    return (
        <div id="services" className="mt-20 md:mt-20 bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-600 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-600'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-600">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-duration="300">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <HashLink smooth to="/services/tv-installations/general-tv-installations">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                        <h2 className="font-semibold my-4 text-2xl text-center">TV Mounting</h2>
                                        <p className="text-md font-medium">Elevate your viewing experience with our basic TV mounting and installation service. Our skilled team ensures a secure setup and precise placement, turning your entertainment space into a modern marvel.</p>
                                </HashLink>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <HashLink smooth to="/services/wire-concealment/cord-covers">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                        <h2 className="font-semibold my-4 text-2xl text-center">Wire Concealment</h2>
                                        <p className="text-md font-medium">
                                        Experience a cleaner, more professional look with our wire concealment service for TV mounting. Let our skilled technicians expertly hide cables and cords, transforming your space into a sleek, clutter-free environment.
                                        </p>
                                </HashLink>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Security Camera Installation</h2>
                                    <p className="text-md font-medium">
                                    Ensure peace of mind with our professional security camera installation service. Our expert technicians provide customized solutions to enhance the safety and security of your business.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Home Theater Installation</h2>
                                    <p className="text-md font-medium">
                                    Transform your entertainment space with our premium home theater installation service. Our experts specialize in advanced mounting solutions and audio setup to create the ultimate cinematic experience right in your home.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="centerText lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-600 mb-4' style={{justifyContent:"center", display:"flex"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-600 
                            font-bold">Community <span className='font-black'>Centered</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                Serving Residential & Commercial Clients In The Greater Atlanta Area Since 2008.
                                </p>
                            </div>
                        </div>

                        <div className="centerText lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-600 mb-4' style={{justifyContent:"center", display:"flex"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-600 font-bold">Readily <span className='font-black'>Available</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Eagle TV Mounting experts are available 7 days a week to hang your TV perfectly.</p>
                            </div>
                        </div>

                        <div className="centerText lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-600 mb-4' style={{justifyContent:"center", display:"flex"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-600 font-bold">Hassle <span className='font-black'>Free</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Don’t have a mounting bracket? We can bring one for you! Want the wires hidden? We got you!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
        )
}

export default Services;