import React from 'react'
import TrendingSlider from './TrendingSlider';
import bg10 from "../../../assets/images/background/bg10.png";
import { Link } from 'react-router-dom';



const EventShow = () => {
  return (
    <div id="Events">
          <section className="clearfix section-wrapper7">
                <div className="container-fluid">
                    <div className="content-inner bg-gray section-inner" style={{ backgroundImage: "url(" + bg10 + ")", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                        <div className="section-head text-center">
                            <h5 className="sub-title">LATEST EVENTS</h5>
                            <h2>Trending Events</h2>
                        </div>
                        <TrendingSlider />
                        {/* <div className="text-center m-t30 m-b30 wow fadeInUp" data-wow-delay="1.0s">
                            <Link to={"#"} className="btn btn-primary" >View All Causes</Link>
                        </div> */}
                    </div>
                </div>
            </section>

    </div>
  )
}

export default EventShow