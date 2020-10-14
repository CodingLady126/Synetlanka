import React from 'react';
import './whatwedosection.css';

import MobileItem from './../../../assets/images/workus/top_tap_mobile.png' ;
import DesktopItem from './../../../assets/images/workus/top_tap_desktop.png' ;
import GISItem from './../../../assets/images/workus/top_tap_gis.png' ;
import WebItem from './../../../assets/images/workus/top_tap_web.png' ;
import ContentItem from './../../../assets/images/workus/top_item.png' ;

import $ from 'jquery';

import ExpertiseImage from './../../../assets/images/category_expertise.png' ;
import ProjectNumbersImage from './../../../assets/images/category_projects_numbers.png' ;
import ServiceExcellenceImage from './../../../assets/images/category_service_excellence.png' ;
import WorkusImage from './../../../assets/images/category_work_us.png' ;

class Whatwedosection extends React.Component {
    goAbout() {
        $('html, body').animate({
            scrollTop: $(".welcome-section").offset().top - 200
        }, 1000);
    }
    goClient() {
        $('html, body').animate({
            scrollTop: $(".about-section").offset().top - 200
        }, 1000);
    }
    goWork() {
        $('html, body').animate({
            scrollTop: $(".mobile-section").offset().top - 200
        }, 1000);
    }
    goJob() {
        $('html, body').animate({
            scrollTop: $(".whatwedo-section .section_content").offset().top - 200
        }, 1000);
    }

    render() {
        return (
            <section className = "whatwedo-section">
                <div className = "section_top">
                    <div className = "section_title">
                        What We Do
                    </div>
                    <div className = "section_text">
                        We have created several desktop tools and plugins to other desktop software as part of our work flow to cater the best service in the industry. We have used VC++, C#,WPF as part of it. We have converted more than 1.4 Million paper sketches to proprietory digital formats at closer to 100% accuracy. We are well versed in developing desktop software using various technologies.
                    </div>
                </div>
                <div className = "section_category">
                    <a className="cat_item" onClick={this.goAbout}>
                        <div className="item_photo">
                            <img src={ExpertiseImage} alt="icon"/>
                        </div>
                        <div className="item_detail">
                            About
                        </div>
                    </a>
                    <a className="cat_item" onClick={this.goClient}>
                        <div className="item_photo">
                            <img src={ProjectNumbersImage} alt="icon"/>
                        </div>
                        <div className="item_detail">
                            Client Relations
                        </div>
                    </a>
                    <a className="cat_item" onClick={this.goWork}>
                        <div className="item_photo">
                            <img src={ServiceExcellenceImage} alt="icon"/>
                        </div>
                        <div className="item_detail">
                            Our Work
                        </div>
                    </a>
                    <a className="cat_item" onClick={this.goJob}>
                        <div className="item_photo">
                            <img src={WorkusImage} alt="icon"/>
                        </div>
                        <div className="item_detail">
                            Services Job
                        </div>
                    </a>
                </div>
                <div className = "section_content">
                    <div className = "item item_1">
                        <div className = "item_detail">
                            <div className = "item_title">
                                <span className="point">{'{'}</span>
                                <span className="text">Windows Moblle / iOs / Android / Java / Objective C / Platform independent CPP</span>
                                <span className="point">{'}'}</span>
                            </div>
                            <div className = "item_text">
                                We have developed Windows Mobile / Android / iOS floor plan sketching software using C++, Java & Objective C. We have learned portability and re used the code to the best extent possible without using third party tools. It was a special need at that time to develop and learn everything from basic levels. Industry has evolved and its no longer needed. The new tools like React.Native, Fabric.js (HTML 5 Canvas)  & WebAssembly makes it more easy to be portable across mobile & web.<br/>
                                <br/>
                                We have also evolved to use these new tools to create better software. Lets make something interesting together.
                            </div>
                        </div>
                        <div className = "item_photo">
                            <img src={MobileItem} />
                        </div>
                        <div className = "item_spec_container"></div>
                        <div className = "item_spec">
                            <div className = "spec_text">
                                Mobile Solution
                            </div>
                        </div>
                    </div>
                    <div className = "item item_2">
                        <div className = "item_detail">
                            <div className = "item_title">
                                <span className="point">{'{'}</span>
                                <span className="text"> Windows Moblle / iOs / Android / Java / Objective C / Platform independent CPP</span>
                                <span className="point">{'}'}</span>
                            </div>
                            <div className = "item_text">
                                We have created several desktop tools and plugins to other desktop software as part of our work flow to cater the best service in the industry. We have used VC++, C#,WPF as part of it. We have converted more than 1.4 Million paper sketches to proprietory digital formats at closer to 100% accuracy. We are well versed in developing desktop software using various technologies.<br/>
                                <br/>
                                We continuously update these software to meet the new challenges in the industry. Lets create something interesting ...
                            </div>
                        </div>
                        <div className = "item_photo">
                            <img src={DesktopItem} />
                        </div>
                        <div className = "item_spec_container"></div>
                        <div className = "item_spec">
                            <div className = "spec_text">
                                Desktop Solution
                            </div>
                        </div>
                    </div>
                    <div className = "subcontent">
                        <div className = "content_title">
                            Are you looking for a similar succes in an industry?
                        </div>
                        <div className = "content_detail">
                            <div className="content_text">
                                We partnered with Apex software back in 2009 and we have worked with them consistently and improved the business to have the best service provider to the industry.
                            </div>
                            <div className = "content_description">
                                We are here to write the Next success story.
                            </div>
                        </div>
                        <div className = "content_item">
                            <img src={ContentItem} />
                        </div>
                    </div>
                    <div className = "item item_3">
                        <div className = "item_detail">
                            <div className = "item_title">
                                <span className="point">{'{'}</span>
                                <span className="text"> VC# / VC++ / ESRI API / C++</span>
                                <span className="point">{'}'}</span>
                            </div>
                            <div className = "item_text">
                                We have created custom software and plugins to meet the challenges that we faced in the industry and expanded to cater all the needs for the same. Software was developed using a combination of technologies and open source projects. Plugin development API / C++ / C# were used as part of the GIS workflow tools.<br/>
                                <br/>
                                If you are looking for solution for a big industry at the best cost and need an accuracy that is difficult to achieve using conventional methods, we can do it. Lets do something that can move away from conventional methods to achieve that extra mile to be best ...
                            </div>
                        </div>
                        <div className = "item_photo">
                            <img src={GISItem} />
                        </div>
                        <div className = "item_spec_container second"></div>
                        <div className = "item_spec">
                            <div className = "spec_text">
                                GIS Solution
                            </div>
                        </div>
                    </div>
                    <div className = "item item_4">
                        <div className = "item_detail">
                            <div className = "item_title">
                                <span className="point">{'{'}</span>
                                <span className="text"> ASP.Net / C#.Net / MySQL </span>
                                <span className="point">{'}'}</span>
                            </div>
                            <div className = "item_text">
                                We have created custom web software for work fllow integration with large projects containing more than 0.5Million data sets and also include the CAMA (Computer Aided Mass Appriasal) data for 100% accuracy. 30% of all the work flow is handled using the web software. We have achieved work from home with all the activity made online for work collaboration and delivery<br/>
                                <br/>
                                Lets move from deesktop to web based solutions. Lets build innovative web solutions that is interfaced using mobiles.
                            </div>
                        </div>
                        <div className = "item_photo">
                            <img src={WebItem} />
                        </div>
                        <div className = "item_spec_container second"></div>
                        <div className = "item_spec">
                            <div className = "spec_text">
                                Web Solution
                            </div>
                        </div>
                    </div>
                </div>
			</section>
        );
    }
}

export default Whatwedosection;