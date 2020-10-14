import React from 'react';
import './gridsection.css';

import Icon_01 from "../../../assets/images/icon-01.png";
import Icon_02 from "../../../assets/images/icon-02.png";
import Icon_03 from "../../../assets/images/icon-03.png";
import Grid_1 from "../../../assets/images/grid-1.png" ;
import Grid_2 from "../../../assets/images/grid-2.png" ;
import Grid_3 from "../../../assets/images/grid-3.png" ;
import Icon_04 from "../../../assets/images/icon-04.png" ;
import Icon_05 from "../../../assets/images/icon-05.png" ;
import Icon_06 from "../../../assets/images/icon-06.png" ;
import Image_06 from "../../../assets/images/image-06.png" ;
import Icon_achievment from "../../../assets/images/Icon-achievment.png" ;
import Icon_states from "../../../assets/images/Icon_states.png" ;
import Icon_county from "../../../assets/images/Icon_county.png" ;
import Icon_ecdvc from "../../../assets/images/Icon_ecdvc.png" ;
import Icon_projects from "../../../assets/images/Icon_projects.png" ;
import sketch from "../../../assets/images/sketch.png" ;
import Icon_accuracy from "../../../assets/images/Icon_accuracy.png" ;
import draw from "../../../assets/images/draw.png" ;
import parcel from "../../../assets/images/parcel.png" ;
import pj_details from "../../../assets/images/pj_details.png" ;

import $ from 'jquery';
import Jquery from 'jquery';

class Gridsection extends React.Component {
    componentDidMount() {
        // Jquery here $(...)...
        $(window).scroll(testScroll);
        var viewed = false;

        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        function testScroll() {
            if (isScrolledIntoView($(".count")) && !viewed) {
                viewed = true;
                $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                    if(this.Counter %1 != 0)
                    {
                    $(this).text(this.Counter.toFixed(1));
                    }
                    else{
                    $(this).text(Math.ceil(this.Counter));
                    }

                    }
                });
            });
        }
    }
}
    render() {
        return (
            <section className="grid-section" id="projects">
                <div className="item_left">
                    <div className="item_title">
                        All projects done for our partner 
                        Apex software
                    </div>
                    <img src={Image_06}/>
                </div>
                <div className="item_right">
                    <div className="item">
                        <div className="item_detail">
                            <div >
                                USA<br/>
                                States
                            </div>
                            <div className="split"></div>
                            <img src={Icon_states}/>
                        </div>
                        <div className="item_text">
                            <span className = "count">19</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_detail">
                            <div >
                                USA<br/>
                                Countries
                            </div>
                            <div className="split"></div>
                            <img src={Icon_county}/>
                        </div>
                        <div className="item_text">
                            <span className = "count">62</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_detail">
                            <div className="spec">
                                Entire County<br/>
                                Digitization<br/>
                                Verification & <br/>
                                Correction
                            </div>
                            <div className="split"></div>
                            <img src={Icon_ecdvc}/>
                        </div>
                        <div className="item_text">
                        <span className = "count">2</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_detail">
                            <div>
                                Total Projects
                            </div>
                            <div className="split"></div>
                            <img src={Icon_projects}/>
                        </div>
                        <div className="item_text">
                        <span className = "count">79</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_detail">
                            <div className="spec">
                                Sketch Drawn<br/>
                                From paper
                            </div>
                            <div className="split"></div>
                            <img src={sketch}/>
                        </div>
                        <div className="item_text">
                            <span className = "count">1.2</span>
                            <div className="item_text_spec">
                                Millions
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_detail">
                            <div className="spec">
                                Parcel<br/>
                                Verification<br/>
                                for changes
                            </div>
                            <div className="split"></div>
                            <img src={parcel}/>
                        </div>
                        <div className="item_text">
                            <span className = "count">2.2</span>
                            <div className="item_text_spec">
                                Millions
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_detail">
                            <div className="spec">
                                Draw from<br/>
                                Oblique<br/>
                                Imagery
                            </div>
                            <div className="split"></div>
                            <img src={draw}/>
                        </div>
                        <div className="item_text">
                            <span className = "count">0.4</span>
                            <div className="item_text_spec">
                                Millions
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_detail">
                            <div className="spec">
                                Overall<br/>
                                Project<br/>
                                Accuracy
                            </div>
                            <div className="split"></div>
                            <img src={Icon_accuracy}/>
                        </div>
                        <div className="item_text">
                        <span className = "count">98</span>%
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Gridsection;