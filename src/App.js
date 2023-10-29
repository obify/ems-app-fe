import React from 'react';
// import Route from './pages/Route';	
import { Route, Routes } from "react-router-dom";


import "./assets/css/style.css";
//import "./assets/css/skin/skin-1.css";
import "swiper/css";
import LandingPage from './components/ems/LandingPage';
import Footer from './components/ems/Footer/Footer';
import Header from './components/ems/Header/Header';
import { IMAGES } from '../src/constant/theme';
import MapChart from './components/ems/Map/Map';
import ScrollToTop from './components/ems/ScrollToTop/ScrollToTop';
import CorrectMaps from './components/ems/Map/CorrectMaps';

function App() {
  const scrollToRef = (id) => {
    const element = document.getElementById(id);
    console.log(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with id "${id}" not found.`);
    }
  };
  return (
    <>
      {/* <Route /> */}


      <Header scrollToRef={scrollToRef} logoStyle={IMAGES.logo2} />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/map' element={<MapChart />} />
      </Routes>
      <Footer />
      <ScrollToTop />

    </>
  );
}

export default App;
