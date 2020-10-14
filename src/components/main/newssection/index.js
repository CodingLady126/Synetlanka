
import React from 'react';
import './newssection.css';

import Hiring from './../../../assets/images/hiring.png' ;
import WorkFromHomeImage from './../../../assets/images/work_from_home.png' ;
import Career from './../../../assets/images/career.png' ;

class Newssection extends React.Component {
    render() {
        return (
            <section className="news-section">
                <div className="section_home">
                    <img src={WorkFromHomeImage} />
                    <div className="title">Work from Home</div>
                    <p>Work from home for all employees till corona vaccine. Our in house tools and work flow allow us to work from home with more efficiency and delivered several projects on time.</p>
                </div>
                <div className="section_news">
                    <div className="item">
                        <img src={Hiring} alt="hiring" />
                        <div className="item_title">News</div>
                        <div className="item_text">We are hiring. You can walk in at any time between 10:30 AM and 3:30 PM to join Synet family.</div>
                    </div>
                    <div className="item">
                        <img src={Career} alt="career" />
                        <div className="item_title">Career</div>
                        <div className="item_text">Please apply with cv to recruit @ synetlanka.com. We are always looking forward to people with good mathematical skill.<br/><br/>A Level / Diploma / Under Graduates.</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Newssection;