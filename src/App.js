import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import GeneralTVInstallations from './pages/services/tv-mounting/GeneralTVInstallations';
import BrickAndFireplaceInstallations from './pages/services/tv-mounting/BrickAndFireplaceInstallations';
import CordCovers from './pages/services/wire-concealment/CordCovers';
import OutletCreations from './pages/services/wire-concealment/OutletCreations';


function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Eagle TV Moutning | Atlanta, GA");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 

            {/* TV Mounting Endpoints */}
            <Route path="/services/tv-installations/general-tv-installations" element={<GeneralTVInstallations />} />
            <Route path="/services/tv-installations/brick-and-fireplace" element={<BrickAndFireplaceInstallations />} />
            
            {/* Wire Concealment Endpoints */}
            <Route path="/services/wire-concealment/cord-covers" element={<CordCovers />} />
            <Route path="/services/wire-concealment/outlet-creation" element={<OutletCreations />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
