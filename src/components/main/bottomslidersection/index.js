import React from 'react';
import './bottomslidersection.css';

import Slider from 'react-slick' ;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Icon_1 from "../../../assets/images/slider_left.png"
import Icon_2 from "../../../assets/images/slider_right.png"
import BG_1 from "../../../assets/images/bottom_slider.png"
import BG_2 from "../../../assets/images/bottom_slider_2.png"
import BG_3 from "../../../assets/images/bottom_slider_3.png"
import BG_4 from "../../../assets/images/bottom_slider_4.png"
import BG_5 from "../../../assets/images/bottom_slider_5.png"

class Bottomslidersection extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <section className="slide-section">
                <Slider {...settings}>
                    <div className="slide-item">
                        <div className="slide_photo">
                            <img className="bg" src={BG_1} />
                        </div>
                        <div className="slide_content">
                            <div className="content_title">
                                Fire Department Sketches
                            </div>
                            <div className="content_detail">
                                We are experts in Paper To Digital , Draw sketches From measurable Imagery, Sketch verification / Sketch check process. We provide 100% accuracy for the Paper to Digital and 98% for other services no matter how big the project is and we deliver all our projects on time. We can deliver extensive data collection on parcels based online or offline imagery at a lightning speed.
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="slide_photo">
                            <img className="bg" src={BG_2} />
                        </div>
                        <div className="slide_content">
                            <div className="content_title">
                                Detroit project
                            </div>
                            <div className="content_detail">
                                We are experts in Paper To Digital , Draw sketches From measurable Imagery, Sketch verification / Sketch check process. We provide 100% accuracy for the Paper to Digital and 98% for other services no matter how big the project is and we deliver all our projects on time. We can deliver extensive data collection on parcels based online or offline imagery at a lightning speed.
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="slide_photo">
                            <img className="bg" src={BG_3} />
                        </div>
                        <div className="slide_content">
                            <div className="content_title">
                                Clark project
                            </div>
                            <div className="content_detail">
                                We are experts in Paper To Digital , Draw sketches From measurable Imagery, Sketch verification / Sketch check process. We provide 100% accuracy for the Paper to Digital and 98% for other services no matter how big the project is and we deliver all our projects on time. We can deliver extensive data collection on parcels based online or offline imagery at a lightning speed.
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="slide_photo">
                            <img className="bg" src={BG_4} />
                        </div>
                        <div className="slide_content">
                            <div className="content_title">
                                Detroit project
                            </div>
                            <div className="content_detail">
                                We are experts in Paper To Digital , Draw sketches From measurable Imagery, Sketch verification / Sketch check process. We provide 100% accuracy for the Paper to Digital and 98% for other services no matter how big the project is and we deliver all our projects on time. We can deliver extensive data collection on parcels based online or offline imagery at a lightning speed.
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="slide_photo">
                            <img className="bg" src={BG_5} />
                        </div>
                        <div className="slide_content">
                            <div className="content_title">
                                Clark project | Detroit project
                            </div>
                            <div className="content_detail">
                                We are experts in Paper To Digital , Draw sketches From measurable Imagery, Sketch verification / Sketch check process. We provide 100% accuracy for the Paper to Digital and 98% for other services no matter how big the project is and we deliver all our projects on time. We can deliver extensive data collection on parcels based online or offline imagery at a lightning speed.
                            </div>
                        </div>
                    </div>
                </Slider>
			</section>
        );
    }
}

export default Bottomslidersection;