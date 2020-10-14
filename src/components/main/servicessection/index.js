
import React from 'react';
import './servicessection.css';

import P2d from './../../../assets/images/service_p2a.png' ;
import Sv from './../../../assets/images/service_sv.png' ;
import Dfi from './../../../assets/images/service_dfi.png' ;

import Background from './../../../assets/images/service_bg.png';

import VideoMp4 from './../../../assets/videos/video.mp4' ;

import VideoJpg from './../../../assets/images/video_content.png' ;

import TeamworkImage from './../../../assets/images/service_team-work.png' ;
import IntegrityImage from './../../../assets/images/service_integrity.png' ;
import AutomationImage from './../../../assets/images/service_automation.png' ;
import FocusImage from './../../../assets/images/service_focus.png' ;
import QualityImage from './../../../assets/images/service_quality.png' ;
import EmployeeImage from './../../../assets/images/service_employee.png' ;

class Servicessection extends React.Component {
    render() {
        return (
            <section className="services-section">
                <div className="item_1">
                    <div className="item_1_1">
                        <div className="item_list">
                            <div className="item">
                                <img src={P2d}/>
                                <div className="item_text">Paper to Apex</div>
                            </div>
                            <div className="item">
                                <img src={Sv}/>
                                <div className="item_text">Sketch Verifcation</div>
                            </div>
                            <div className="item">
                                <img src={Dfi}/>
                                <div className="item_text">Draw from Imagery</div>
                            </div>
                        </div>
                        <div className="item_detail">
                            Complete Solution for county Digitization & Verification
                        </div>
                    </div>
                    <div className="item_1_2">
                        <video autoPlay loop muted poster={VideoJpg}>
                            <source type="video/mp4" src={VideoMp4} />
                        </video>
                    </div>
                </div>
                <div className="item_2">
                    <div className="item_2_1">
                        <div className="item_photo">
                            <img src={Background}/>
                        </div>
                    </div>
                    <div className="item_2_2">
                        <div className="item">
                            <img src={TeamworkImage}/>
                            <div className="item_text">Team Work</div>
                        </div>
                        <div className="item">
                            <img src={IntegrityImage}/>
                            <div className="item_text">Integrity</div>
                        </div>
                        <div className="item">
                            <img src={AutomationImage}/>
                            <div className="item_text">Automation</div>
                        </div>
                        <div className="item">
                            <img src={FocusImage}/>
                            <div className="item_text">Focus</div>
                        </div>
                        <div className="item">
                            <img src={QualityImage}/>
                            <div className="item_text">Quality closer to 100%</div>
                        </div>
                        <div className="item">
                            <img src={EmployeeImage}/>
                            <div className="item_text">Employee friendly</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Servicessection;