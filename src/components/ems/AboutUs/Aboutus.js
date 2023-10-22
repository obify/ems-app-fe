
import React, { useState, useContext, useEffect, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CountUp from 'react-countup'
import { Modal } from 'react-bootstrap';
import bg from "../../../assets/images/background/bg2.jpg";

import slide2 from '../../../assets/images/side-images/pic2.png';

const Aboutus = () => {
    return (
        <div>

            <section className="content-inner section-wrapper4">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-xl-5 col-lg-6 ">
                            <div className="donate-form form-wrapper" style={{ backgroundImage: "url(" + bg + ")" }}>
                                <div className="donate-info">
                                    <h2 className="title m-b20">Donate Today</h2>
                                    <p>Charity law within the UK varies among England and Wales, Scotland and Northern Ireland, but the fundamental principles are the same</p>
                                </div>
                                <div className="form-content">
                                    <form className="dzForm" method="POST">
                                        <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                        <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                                        <div className="dzFormMsg"></div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input type="text" name="dzOther[Other_Amount]" className="form-control donate-input" value={donateValue} required placeholder="Other Amount (USD)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="tag-donate style-3">
                                                    {priceBlog.map((data, ind) => (
                                                        <div className="donate-categories" key={ind}>
                                                            <div className="form-check">
                                                                <input defaultChecked={data.price == donateValue ? true : false} className="form-check-input donate-fill"
                                                                    type="radio" name="flexRadioDefault" id={`flexRadioDefault1d${ind + 5}`}
                                                                />
                                                                <label className="form-check-label" htmlFor={`flexRadioDefault1d${ind + 5}`} onClick={() => changeValue(data.price)}>${data.price}</label>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button name="submit" type="submit" value="Submit" className="btn btn-dark">Donate Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-xl-7 col-lg-6 m-b30">
                            <div className="section-inner">
                                <div className="section-head m-b30">
                                    <h5 className="sub-title">About Us</h5>
                                    <h2 className="title">Help is<br /> Our Main Goal</h2>
                                </div>
                                <div className="row m-b30">
                                    <div className="col-xl-7">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it.</p>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <div className="col-xl-5">
                                        <div className="counter-text-wrapper">
                                            <div className="counter-text m-b30">
                                                <h4>Donation Raised</h4>
                                                <div className="counter-num text-primary">
                                                    $<span className="counter">
                                                        <CountUp end="55000" separator=',' />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="counter-text">
                                                <h4>Donation Goal</h4>
                                                <div className="counter-num text-primary">
                                                    $<span className="counter">
                                                        <CountUp end="25000" separator=',' />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to={"/about-us"} className="btn btn-primary">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="img-1" src={slide2} alt="images" />
            </section>
        </div>
    )
}

export default Aboutus