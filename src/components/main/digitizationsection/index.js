import React from 'react';
import AOS from 'aos';
import './digitizationsection.css';
import Icon_1 from "../../../assets/images/digital_icon_1.png"
import Icon_2 from "../../../assets/images/digital_icon_2.png"
import BG_1 from "../../../assets/images/digital_content_1.png"
import BG_2 from "../../../assets/images/digital_content_2.png"
import BG_3 from "../../../assets/images/digital_content_3.png"

import AnimatorImage1 from '../../../assets/images/digital_animator1.png' ;
import AnimatorImage2 from '../../../assets/images/digital_animator2.png' ;

class Digitizationsection extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
          // initialise with other settings
          duration : 2000
        });
    }
    render() {

        return (
            <section className="digitization-section" id="service">
                <div className="photo_item">
                    <div className="photo_detail">
                        <img src={Icon_1}/>
                        <div>
                            Entire county digitization project
                        </div>
                    </div>
                    <div className="photo">
                        <div className="photo_title">Service excellence</div>
                        <div className="photocontainer">
                            <img src={BG_1}/>
                            <img className = "item_animator" src = {AnimatorImage1} data-aos="zoom-in" />
                            <div className="line" data-aos="zoom-in"></div>
                            <div className="item_text" >
                                <span data-aos="fade-right">0.6 Million Buildings</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="photo_content">
                    <div className="content_1">
                        <img src={BG_3}/>
                    </div>
                    <div className="content_2">
                        <div>
                            Established in 2004, Synet Technologies has grown and evolved to meet the changing needs of the industries it serves. We can provide superior quality and cost-effective solutions to meet client demands. A key objective is to provide a single-point reference solution designed to increase customer satisfaction. SynetTechnologies strives to achieve excellence in the areas of custom business software and web development by delivering cutting edge technology solutions that help enterprises enhance their range of business activities as well as enhance levels of efficiency. Synet Technologies possesses a skilled team of dedicated software developers and designers who continuously upgrade their abilities to meet the ever growing demands of businesses worldwide. Synet Technologies is achieving vertical and lateral growth in its areas of expertise by enhancing in-house competency levels as well as through strategic partnerships with other organizations. We have always considered our alliances to be essential in our growth and are looking forward to join hands with like-minded companies globally to satisfy mutual business interests.
                        </div>
                        <div className="spec">
                            We have been in partnership with Apex Software since our inception and we work exclusively for them in the service sector. We have completed many prestigeous projects for them and got awarded for our excellence in service quality, which is second to none and stands at 98%. We are currently working on a prestigeous project for a county where we are digitizing all the building sketches (680,000) and verifying it over imagery / updating all the changes to reflect existing condition including data collection for all the 820,000 parcels.
                        </div>
                        <div>
                            <div className="content_title">
                                Core Competence
                            </div>
                            <div className="content_detail">
                                Operating System : Windows / Android / iOS<br/>
                                Data Base : Oracle / SQL Server<br/>
                                Programming Languages : C++ / C# / ASP.Net / WPF
                            </div>
                        </div>
                    </div>
                </div>
                <div className="photo_item second">
                    <div className="photo_detail">
                        <img src={Icon_2}/>
                        <div>
                            Entire county digitization verification 
                            correction in an year
                        </div>
                    </div>
                    <div className="photo">
                        <div className="photo_title">Detroit</div>
                        <div className="photocontainer">
                            <img src={BG_2}/>
                            <img className = "item_animator" src = {AnimatorImage2} data-aos="zoom-in"/>
                            <div className="line" data-aos="zoom-in"></div>
                            <div className="item_text">
                                <span data-aos="fade-right">0.24 Million Buildings</span>
                            </div>
                        </div>
                    </div>
                </div>
			</section>
        );
    }
}

export default Digitizationsection;