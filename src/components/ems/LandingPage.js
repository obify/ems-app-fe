import React, { useContext, useEffect, useState } from 'react'
import Header from './Header/Header'
import { IMAGES } from '../../constant/theme';
import { useNavigate } from 'react-router-dom';

// layouts 


import { ThemeContext } from "../../context/ThemeContext";
const priceBlog = [
    {price:"10"},
    {price:"25"},
    {price:"50"},
    {price:"100"},
];
const LandingPage = () => {

     const { changeBackground, changePrimaryColor } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "data-typography-1", label: "data-typography-1" });
		changePrimaryColor("color-skin-2");
	}, []);

    const [donateValue, setDonateValue] = useState(priceBlog[0].price);
    function changeValue(price){
        setDonateValue(price);
    }
    const nav = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        nav("/contact-us");
    };

  return (
    <div>
    <Header logoStyle={IMAGES.logo2}/>

 
    </div>
  )
}

export default LandingPage