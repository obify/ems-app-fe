import React,{useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const contactRef = useRef();
    const nav = useNavigate();
    const FormSubmit = (e) => {
        e.preventDefault();
        nav("/contact-us");
    };
    return (
        <div id="Contact" ref={contactRef}>
            <section className="bg-primary form-wrapper1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="section-head">
                                <h5 className="sub-title text-white">Contact US</h5>
                                <h2 className="title text-white">Do You Have Any Query?</h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <form className="dzForm" onSubmit={(e) => FormSubmit(e)}>
                                <div className="dzFormMsg"></div>
                                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />

                                <div className="row g-4">
                                    <div className="col-md-4 col-sm-6">
                                        <input name="dzFirstName" required="" type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <input name="dzLastName" required="" type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <input name="dzEmail" required="" type="text" className="form-control" placeholder="Email Address" />
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <input name="dzPhoneNumber" required="" type="text" className="form-control" placeholder="Phone Number" />
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <input name="dzMessage" required="" type="text" className="form-control" placeholder="Your Message" />
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <button name="submit" type="submit" value="Submit" className="btn btn-dark btn-block h-100">Submit Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ContactUs