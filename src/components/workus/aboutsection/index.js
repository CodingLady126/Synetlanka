import React from 'react';

import './aboutsection.css';

import StepBg from './../../../assets/images/workus/about_step_item.png';
import Item_1 from './../../../assets/images/workus/about_item_1.png';
import Item_2 from './../../../assets/images/workus/about_item_2.png';
import Item_3 from './../../../assets/images/workus/about_item_3.png';
import Item_4 from './../../../assets/images/workus/about_item_4.png';

class Aboutsection extends React.Component {
    render() {
        return (
            <section class="about-section">
                <div class="content_1">
                    <div class="item_1">
                        <div class="item_title">
                            Our commitment
                        </div>
                        <div class="item_content">
                            <div class="content_title">
                                Product / Service
                            </div>
                            <div class="subcontent">
                                <div class="content_photo">
                                    <img src={Item_1} />
                                </div>
                                <div class="content_detail">
                                    Achieve best perfromance.<br/>
                                    <br/>
                                    Expand.<br/>
                                    <br/>
                                    Improvise use of technology.
                                </div>
                            </div>
                        </div>
                        <div class="item_spec">
                            Learn
                        </div>
                    </div>
                    <div class="item_2">
                        <div class="item_title">
                            Welcome
                        </div>
                        <div class="item_content">
                            <div class="content_title">
                                Client Relations
                            </div>
                            <div class="subcontent">
                                <div class="content_photo">
                                    <img src={Item_2} />
                                </div>
                                <div class="content_detail">
                                    Improvise business.<br/>
                                    <br/>
                                    Long term commitment.<br/>
                                    <br/>
                                    Achieve results.
                                </div>
                            </div>
                        </div>
                        <div class="item_spec">
                            Requirement
                        </div>
                    </div>
                    <div class="item_step">
                        {/* <img src={StepBg} /> */}
                        <div class="step_1 step_title">
                            Discuss<br/>
                            <span>with us</span>
                        </div>
                        <div class="step_2 step_title">
                            Feasibility<br/>
                            <span>study</span>
                        </div>
                        <div class="step_3 step_title">
                            Delivered.<br/>
                            <span>on time</span>
                        </div>
                    </div>
                </div>
                <div class="content_2">
                    <div class="content_detail">
                        <div class="detail">
                            <div class="detail_title">
                                Discuss<br/>
                                <span>with us</span>
                            </div>
                            <div class="detail_text">
                                We have created various mobile products with rich features. DraftEzy has made the on site sketching the easiest with a mobile / tab and a laser meter. Draw like paper and pen ,  Draw in free form, infinite undo redo are the interestng features of this product. Form filling made it easy to create custom forms and collect data, run exams etc...<br/>
                                <br/>
                                Apex Mobile sketch is the iPad version of DraftEzy developed in C++ / Objetive C platform.<br/>
                                <br/>
                                We have created various mobile products with rich features. DraftEzy has made the on site sketching the easiest with a mobile / tab and a laser meter. Draw like paper and pen ,  Draw in free form, infinite undo redo are the interestng features of this product. Form filling made it easy to create custom forms and collect data, run exams etc...
                            </div>
                        </div>
                        <div class="detail">
                            <div class="detail_title">
                                Feasibility<br/>
                                <span>study</span>
                            </div>
                            <div class="detail_text">
                            We have created various mobile products with rich features. DraftEzy has made the on site sketching the easiest with a mobile / tab and a laser meter. Draw like paper and pen ,  Draw in free form, infinite undo redo are the interestng features of this product. Form filling made it easy to create custom forms and collect data, run exams etc...<br/>
                                <br/>
                                Apex Mobile sketch is the iPad version of DraftEzy developed in C++ / Objetive C platform.<br/>
                                <br/>
                                We have created various mobile products with rich features. DraftEzy has made the on site sketching the easiest with a mobile / tab and a laser meter. Draw like paper and pen ,  Draw in free form, infinite undo redo are the interestng features of this product. Form filling made it easy to create custom forms and collect data, run exams etc...
                            </div>
                        </div>
                    </div>
                    <div class="content_spec">
                        <img src={Item_3} />
                        <span>Current Opening</span>
                        <span>:</span>
                        <span>0</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Aboutsection;