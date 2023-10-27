import React, { useContext, useEffect, useState } from 'react'
import Header from './Header/Header'
import { IMAGES } from '../../constant/theme';
import { useNavigate } from 'react-router-dom';

// layouts 


import { ThemeContext } from "../../context/ThemeContext";
import Carousel from './Home/Carousel';
import Aboutus from './AboutUs/Aboutus';
import Services from './Services/Services';
import UpcomingEvent from './UpcomingEvents/UpcomingEvent';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import CitySelect from './CitySelect/CitySelect';
import ContactUs from './ContactUs/ContactUs';
import MapChart from './Map/Map';

const priceBlog = [
  { price: "10" },
  { price: "25" },
  { price: "50" },
  { price: "100" },
];
const LandingPage = () => {

  const { changeBackground, changePrimaryColor } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "data-typography-1", label: "data-typography-1" });
    changePrimaryColor("color-skin-2");
  }, []);

  const [donateValue, setDonateValue] = useState(priceBlog[0].price);
  function changeValue(price) {
    setDonateValue(price);
  }
  const nav = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    nav("/contact-us");
  };

  return (
    <div >
      <Header logoStyle={IMAGES.logo2} />
      <Carousel />
      <CitySelect />
      <Aboutus />
      {/* <Services /> */}
      <UpcomingEvent />
      <Gallery />
      <UpcomingEvent />
      <ContactUs />
      <Footer />

    </div>
  )
}

export default LandingPage