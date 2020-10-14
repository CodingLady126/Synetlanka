
import React from 'react';

import './missionsection.css';

import IconMission from './../../../assets/images/workus/new_icon_mission.png' ;
import IconWelcome from './../../../assets/images/workus/new_icon_welcome.png' ;

class Missionsection extends React.Component {
    render() {
        return (
            <section class="mission-section">
                <div class = "item">
                    <div class = "item-title">Mission</div>
                    <div class = "item-content">
                        <img src = {IconMission} />
                        <div class = "item-detail">
                            SynetTechnologies strives to achieve excellence in the areas of custom business software and web development by delivering superior technology solutions that help enterprises enhance their range of business activities as well as enhance levels of efficiency.<br/>
                            <br/>
                            Our current & long term strategies include:<br/>
                            <br/>
                            Development of custom solutions for Desktop / Mobile and Embedded devices. To keep focused on E-Governance and E-Business enablement.<br/>
                            To nurture alliances and relations as growth drivers, thereby resulting in lower business acquired costs and flexibility of business interests.
                        </div>
                    </div>
                </div>
                <div class = "item">
                    <div class = "item-title">Welcome</div>
                    <div class = "item-content">
                        <img src = {IconWelcome} />
                        <div class = "item-detail">
                            <span>Guidelines to join Synet Family</span><br/>
                            <br/>
                            Your primary focus should be to keep the clients and partners happy by completing the projects on time with the best quality.
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Missionsection;