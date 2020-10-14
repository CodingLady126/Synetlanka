
import React from 'react';
import './categorysection.css';
import $ from 'jquery';

import ExpertiseImage from './../../../assets/images/category_expertise.png' ;
import ProjectNumbersImage from './../../../assets/images/category_projects_numbers.png' ;
import ServiceExcellenceImage from './../../../assets/images/category_service_excellence.png' ;
import WorkusImage from './../../../assets/images/category_work_us.png' ;

class Categorysection extends React.Component {

    goExpertise() {
        $('html, body').animate({
            scrollTop: $("#expertise").offset().top - 200
        }, 1000);
    }
    goProject() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 200
        }, 1000);
    }
    goService() {
        $('html, body').animate({
            scrollTop: $("#service").offset().top - 200
        }, 1000);
    }

    render() {
        return (
            <section className="category-section">
                <a className="item" onClick={this.goExpertise}>
                    <div className="item_photo">
                        <img src={ExpertiseImage} alt="icon"/>
                    </div>
                    <div className="item_detail">
                        Expertise
                    </div>
                </a>
                <a className="item" onClick={this.goProject}>
                    <div className="item_photo">
                        <img src={ProjectNumbersImage} alt="icon"/>
                    </div>
                    <div className="item_detail">
                        Projects and Numbers
                    </div>
                </a>
                <a className="item" onClick={this.goService}>
                    <div className="item_photo">
                        <img src={ServiceExcellenceImage} alt="icon"/>
                    </div>
                    <div className="item_detail">
                        Service Excellence
                    </div>
                </a>
                <a className="item" href="/workus">
                    <div className="item_photo">
                        <img src={WorkusImage} alt="icon"/>
                    </div>
                    <div className="item_detail">
                        Work with US
                    </div>
                </a>
            </section>
        );
    }
}

export default Categorysection;