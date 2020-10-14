
import React from 'react';

import './visionsection.css';

import IconVision from './../../../assets/images/workus/new_icon_vision.png' ;
import IconAchievements from './../../../assets/images/workus/new_icon_achievements.png' ;
import IconInnovation from './../../../assets/images/workus/new_icon_innovation.png' ;
import IconTraining from './../../../assets/images/workus/new_icon_training.png' ;

class Visionsection extends React.Component {
    render() {
        return (
            <section class="vision-section">
                <div class = "vision-item1">
                    <div class = "vision-title">Vision</div>
                    <img src = {IconVision} />
                    <div class = "item-detail">
                        People: Be a place where people have a sense of belongingness, and feel proud and inspired to deliver their best towards the organizational growth<br/>
                        <br/>
                        Culture: Maintain a harmonious work culture that is open, fair, ethical, transparent and progressive Social: Be a responsible corporate citizen that is conscious and aware about building and supporting sustainable communities<br/>
                        <br/>
                        Profit: Ensure profitable growth with healthy cash flows, and remain focused on delivering continual value to all stakeholders<br/>
                        <br/>
                        Productivity: Be a highly effective, lean and fast-moving organization Quality: Ensure that we provide our customers with high quality services in the most cost effective manner
                    </div>
                </div>
                <div class = "vision-item2">
                    <div class = "item">
                        <img src = {IconAchievements} />
                        <div class = "item-title">Achievements</div>
                    </div>
                    <div class = "item">
                        <img src = {IconInnovation} />
                        <div class = "item-title">Innovation</div>
                    </div>
                    <div class = "item">
                        <img src = {IconTraining} />
                        <div class = "item-title">Training & Career<br/>enhancement</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Visionsection;