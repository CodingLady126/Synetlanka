
import React from 'react';

import { Player } from 'video-react' ;

import './videosection.css';

import Logoalt from './../../../assets/images/workus/logo-alt.png' ;

import VideoMp4 from './../../../assets/videos/workus/workwus.mp4' ;
import VideoWebm from './../../../assets/videos/workus/workwus.webm' ;
import VideoOgv from './../../../assets/videos/workus/workwus.ogv' ;

import VideoJpg from './../../../assets/images/workus/new_video.png' ;

class Videosection extends React.Component {
    render() {
        return (
            <section class="video-service-section">
                <div className = "section_title">
                    Our Services Job
                </div>
                <div className = "section_overflow"></div>
                <div className = "section_detail">
                    <video autoPlay loop muted poster={VideoJpg}>
                        <source type="video/mp4" src={VideoMp4}/>
                        <source type="video/webm" src={VideoWebm}/>
                        <source type="video/ogg" src={VideoOgv}/>
                    </video>
                    <div class="content">
                        <img src={Logoalt}/>
                        <div class="item1">What we do</div>
                        <a class="item2" href="https://www.youtube.com/watch?v=mGsDp5b4Jhc">Play video 4:20 mins</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Videosection;