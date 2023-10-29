import React from 'react'
import TrendingSlider from './TrendingSlider';
import bg10 from "../../../assets/images/background/bg10.png";
import { Link } from 'react-router-dom';

const UpcomingEvent = () => {

    return (
        <div id="Melas" >
            <section className="clearfix section-wrapper7">
                <div className="container-fluid">
                    <div className="content-inner bg-gray section-inner" style={{ backgroundImage: "url(" + bg10 + ")", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                        <div className="section-head text-center">
                            <h5 className="sub-title">UPCOMING MELAS</h5>
                            <h2>Trending Melas</h2>
                        </div>
                        <TrendingSlider />
                        <div className="text-center m-t30 m-b30 wow fadeInUp" data-wow-delay="1.0s">
                            <Link to={"/map"} className="btn btn-primary" >View All Melas</Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default UpcomingEvent;