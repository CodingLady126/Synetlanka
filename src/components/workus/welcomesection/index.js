
import React from 'react';

import './welcomesection.css';

import Bg from './../../../assets/images/workus/new_welcome_background.png';

class Welcomesection extends React.Component {
    render() {
        return (
            <section class="welcome-section">
                <img src={Bg}/>
                <div class="first_group">
                    <div class = "item item_1">
                        <div class = "item-title">Welcome</div>
                        <div class = "item-detail">
                            SynetTechnologies is interested in providing opportunities for those who like to work in challenging environment and improve their career with the various challenges that we face in this ever changing technology landscape. We always welcome new ideas to enhance our client experience and also serve more with new process / work flows improving the quality of the service. Our primary selection criteria focus on having strong mathematical sense to ensure quality and on time delivery.
                        </div>
                        
                    </div>
                    <div class = "item item_2">
                        <div class = "item-title">2009 Dec</div>
                        <div class = "item-detail">
                            Inception : Synet Technologies started developing mobile software for Apex Software. The product was supposed to be a platform independent solution which runs across platforms.
                        </div>
                    </div>
                </div>
                <div class="second_group">
                    <div class = "item item_3">
                        <div class = "item-title">2013</div>
                        <div class = "item-detail">
                            Relase of the iPad software . Started sketcghing services / GIS Services . 
                        </div>
                    </div>
                    <div class = "item item_4">
                        <div class = "item-title">2014</div>
                        <div class = "item-detail">
                            Major project for Detroit County. Converting 0.24 Milion sketches to Apex. Verifying it over the current imagery and flagging of the changes. Update the changes to the sketches to make the data accurate.
                        </div>
                    </div>
                    <div class = "item item_5">
                        <div class = "item-title">2018</div>
                        <div class = "item-detail">
                            Expanded to other countries to better serve our customer increasing quality and production.<br/>
                            <br/>
                            We have a well designed office at these locations.
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Welcomesection;