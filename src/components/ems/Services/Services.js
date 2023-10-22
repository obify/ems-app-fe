import React from "react";
import ServiceBlog from "./ServiceBlog";
import bg10 from "../../../assets/images/background/bg10.png";

const Services = () => {
  return (
    <div>
      <section className="clearfix">
        <div className="container-fluid">
          <div
            className="content-inner bg-gray"
            style={{
              backgroundImage: "url(" + bg10 + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="container">
              <div
                className="section-head text-center wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h5 className="sub-title">Services</h5>
                <h2 className="title">Why Akcel</h2>
              </div>
              <div className="row justify-content-center">
                <ServiceBlog />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
