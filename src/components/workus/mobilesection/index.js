import React from 'react';
import './mobilesection.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IconDesktop from './../../../assets/images/workus/new_icon_desktop.png' ;
import IconMobile from './../../../assets/images/workus/new_icon_mobile.png' ;
import IconWeb from './../../../assets/images/workus/new_icon_web.png' ;
import IconDatabase from './../../../assets/images/workus/new_icon_database.png' ;
import MobileItem from './../../../assets/images/workus/software_mobile.png' ;
import DesktopItem from './../../../assets/images/workus/software_desktop.png' ;
import WebItem from './../../../assets/images/workus/software_web.png' ;
import GISItem from './../../../assets/images/workus/software_gis.png' ;

class Mobilesection extends React.Component {
    // constructor (props) {
    //     super(props)
    //     this.state = { 
    //         tabTitle : 'desktop'
    //     }
    // }

    // SetTabBar = (title) => {
    //     this.setState({ tabTitle: title })
    // }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <section className="mobile-section">
                <Slider className="softwareslider" {...settings}>
                    <div className="item">
                        <div className="item_title">
                            <img src={IconMobile} />
                            Mobile Software Development
                        </div>
                        <div className="item_detail">
                            <div className="detail_text">Our work speaks <br/>for itself</div>
                            <div className="detail_photo">
                                <img src={MobileItem} />
                            </div>
                        </div>
                        <div className="item_description">
                            We have created various mobile products with rich features. DraftEzy has made the on site sketching the easiest with a mobile / tab and a laser meter. Draw like paper and pen ,  Draw in free form, infinite undo redo are the interestng features of this product. Form filling made it easy to create custom forms and collect data, run exams etc...<br/>
                            <br/>
                            Apex Mobile sketch is the iPad version of DraftEzy developed in C++ / Objetive C platform.<br/>
                            <br/>
                            We have created various mobile products with rich features. DraftEzy has made the on site sketching the easiest with a mobile / tab and a laser meter. Draw like paper and pen ,  Draw in free form, infinite undo redo are the interestng features of this product. Form filling made it easy to create custom forms and collect data, run exams etc...
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_title">
                            <img src={IconMobile} />
                            Desktop Software Development
                        </div>
                        <div className="item_detail">
                            <div className="detail_text">Our work speaks <br/>for itself</div>
                            <div className="detail_photo">
                                <img src={DesktopItem} />
                            </div>
                        </div>
                        <div className="item_description">
                            We have created various desktop tools for our service sector work flow and process management. Our data management tool handles 2.5 Million data points on one single session. We have developed plugin for proprietory software to get the work flow work seamlessly across the tools involved to deliver a 100% accuracy in much needed sector. We have used VC++, C# technologies to achive the best results and the number of jobs completed speaks for the trust in quality.<br/>
                            <br/>
                            We have developed a complete set of tools that can effectively handle any project size at the best quality / best time and the projects get executed in an effortless way.
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_title">
                            <img src={IconMobile} />
                            Database Software Development
                        </div>
                        <div className="item_detail">
                            <div className="detail_text">Our work speaks <br/>for itself</div>
                            <div className="detail_photo">
                                <img src={GISItem} />
                            </div>
                        </div>
                        <div className="item_description">
                            We have created various gis tools for our services division. The workflow is built into it and handled over 70 projects and more than 2milllion parcels. The plugin can collect a lot of information based on parcel boundary. Parcel Scan / Data collection / Query search and jump through the results and many more features are built in to it. The plugin can create a 1 Million building layer under2 hours and the work allocation is done based on grid allottment. Random QC / Report generation is effective features to meet the quality guidelines for the project. 
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_title">
                            <img src={IconMobile} />
                            Web Software Development
                        </div>
                        <div className="item_detail">
                            <div className="detail_text">Our work speaks <br/>for itself</div>
                            <div className="detail_photo">
                                <img src={WebItem} />
                            </div>
                        </div>
                        <div className="item_description">
                            We have created various  web app for our internal use. Web interface handles over 3 million data sets and generate report based on it. Our services platform work distribution is handled entirely by the web platform. Daily statics update and daily report generation is part of it. Every one associated with the project will get daily updates. We have made our services to work from any location and yet achieve the best quality.
                        </div>
                    </div>
                </Slider>
            </section>
        );
    }
}

export default Mobilesection;