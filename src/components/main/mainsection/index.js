
import React from 'react';
import './mainsection.css';

import Slider from 'react-slick' ;
import AOS from 'aos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TopsliderImage1 from './../../../assets/images/top_slider1.png' ;
import TopsliderImage2 from './../../../assets/images/top_slider2.jpg' ;
import TopsliderImage3 from './../../../assets/images/top_slider3.png' ;
import TopsliderImage4 from './../../../assets/images/top_slider4.png' ;
import TopsliderImage5_1 from './../../../assets/images/slider_logo_1.png' ;
import TopsliderImage5_2 from './../../../assets/images/slider_logo_2.png' ;
import TopsliderImage5_3 from './../../../assets/images/slider_logo_3.png' ;
import TopsliderItem from './../../../assets/images/slider_item2.png' ;
import Slider1Item from './../../../assets/images/slider1_item.png' ;
import Slider2Item from './../../../assets/images/slider2_item.png' ;
import $ from 'jquery';

class Mainsection extends React.Component {
    state = {
        current: 0
    }
    componentDidMount() {
        if(this.state.current == 0) {
            $(".item1 .item_photo img").addClass('animation');
        } else {
            $(".item1 .item_photo img").removeClass('animation');
        }
    }

    componentDidUpdate() {
        if(this.state.current == 0) {
            $(".item1 .item_photo img").addClass('animation');
        } else {
            $(".item1 .item_photo img").removeClass('animation');
        }
        if(this.state.current == 3) {
            $(".item2 .item_photo img").addClass('animation');
        } else {
            $(".item2 .item_photo img").removeClass('animation');
        }
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed:3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            afterChange: current => this.setState({ current })
        };
        return (
            <section className="main-section">
                <Slider className="mainslider" ref={c => (this.slider = c)} {...settings}>
                    <div className="item1">
                        <img src={TopsliderImage1} alt="TopsliderImage1" />
                        <div className="item_text">
                            <span className="left"></span>
                            <span className="right"></span>
                            <div className="text_title">Sketch verified & Up to date.</div>
                            <div className="text_detail">
                                0.24 Million sketch in an year<br/>
                                35% Sketch were edited & made upto date
                            </div>
                        </div>
                        <div className="item_photo">
                            <img src={Slider1Item} />
                        </div>
                    </div>
                    <div className="item4">
                        <img src={TopsliderImage4} alt="TopsliderImage4" />
                        <div className="item_text">
                            <span className="left"></span>
                            <span className="right"></span>
                            <div className="text_title">Every building verified and corrected using measurable imagery.</div>
                            <div className="text_detail">
                                Quality is assured at every step using in house tools and work flow.<br/>
                                Any size project is assured with closer to 100% accuracy<br/>
                                Entire country digitization project will be default with very strict work<br/>
                                flow procedures
                            </div>
                        </div>
                        <div className = "slider_title"> We provide the best</div>
                        <div className="item_2">
                            <img src={TopsliderItem}/>
                            <div className="text_title">Quality<br/>Service</div>
                            <div className = "text_detail">
                                Workflow to assure<br/>
                                Quality
                            </div>
                        </div>
                    </div>
                    <div className="item3">
                        <img src={TopsliderImage3} alt="TopsliderImage3" />
                        <div className="item_content">
                            <div className = "slider_title"> 0.6 Million Sketches</div>
                            <div className="item_text">
                                <span className="left"></span>
                                <span className="right"></span>
                                <div className="text_title">Entire country digitization.</div>
                                <div className="text_detail">
                                    PRC to Apex<br/>
                                    Apex to overlay verification Mark parcel for editing<br/>
                                    Create new Edit sketches<br/>
                                    Over lay again for perfect checking<br/>
                                    Building layer & up to date sketches
                                </div>
                        </div>
                        </div>
                    </div>
                    <div className="item2">
                        <img src={TopsliderImage2} alt="TopsliderImage2" />
                        <div className="item_text">
                            <span className="left"></span>
                            <span className="right"></span>
                            <div className="text_title">Lightning speed verification.</div>
                            <div className="text_detail">
                                <p>0.6 Million parcels checked in 3 months</p>
                                <p>Most of the result are 30$ has some kind of changes</p>
                            </div>
                        </div>
                        <div className="item_photo">
                            <img src={Slider2Item} />
                        </div>
                    </div>
                    <div className="item5">
                        <div className = "item_1">
                            <img src={TopsliderImage5_1}  />
                            <div className = "text">Fastest on site sketching solution</div>
                        </div>
                        <div className = "item_2">
                            <img src={TopsliderImage5_2}  />
                            <div className = "text">Data analytics to find behavioural pattern</div>
                        </div>
                        <div className = "item_3">
                            <img src={TopsliderImage5_3} />
                            <div className = "text">Lighting speed sketch correction / Parcel Verification / Data Collection Using GIS Technology</div>
                        </div>
                    </div>
                </Slider>
            </section>
        );
    }
}

export default Mainsection;