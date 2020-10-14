
import React from 'react';
import './imagemapsection.css';

import About from './../../../assets/images/about.png' ;
import Map from './../../../assets/images/map.png' ;
import Mapflag from './../../../assets/images/map-flag.png' ;

class ImageMapsection extends React.Component {
    render() {
        return (
            <section className="image-map-section" id="expertise">
                <div className="content_text" >
                    Project Details<br />
                    <span>SriLanka    |   India</span>
                </div>
                <div className="content_photo">
                    <img src={Map} alt="map" />
                    <span><img src={Mapflag} className="flag" /></span>
                </div>
            </section>
        );
    }
}

export default ImageMapsection;