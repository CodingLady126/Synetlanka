
import React from 'react';

import { Player } from 'video-react' ;

import './videosection.css';

import Logoalt from './../../../assets/images/video_logo-alt.png' ;

import VideoMp4 from './../../../assets/videos/video.mp4' ;
import VideoWebm from './../../../assets/videos/video.webm' ;
import VideoOgv from './../../../assets/videos/video.ogv' ;

import VideoJpg from './../../../assets/images/video_bg.jpg' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAngleRight, faPlayCircle  } from '@fortawesome/free-solid-svg-icons'

class Videosection extends React.Component {
    render() {
        return (
            <section className="video-section">
                <video autoPlay loop muted poster={VideoJpg}>
                    <source type="video/mp4" src={VideoMp4} />
                </video>
                <div className="video_content">
                    <img src={Logoalt} alt="Synet Technologies" />
                    <div className="subcontent">
                        <a className="item">
                            10 years of excellence
                            <FontAwesomeIcon icon={faAngleRight} />
                        </a>
                        <a className="play" href="https://www.youtube.com/embed/06-kBBnO06A" target="_blank">
                            <FontAwesomeIcon icon={faPlayCircle} />
                            Play video (3:47 min)
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Videosection;