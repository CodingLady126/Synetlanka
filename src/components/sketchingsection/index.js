
import React from 'react';
import './sketchingsection.css';

import Sketching from './../../assets/images/sketching.png' ;
import Image_04 from './../../assets/images/image-04.png' ;

class Sketchingsection extends React.Component {
    render() {
        return (
            <section class="sketching-section">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6">
                            <div class="sketching-main">
                                <h3 class="font-hand">Fastest on site sketching solution</h3>
                                <img src={Sketching} alt="Sketching" />
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 text-center">
                            <div class="lightning-speed-sketch">
                                <img src={Image_04} alt="Lightning speed sketch correction" />
                                <p class="font-hand">LIGHTNING SPEED SKETCH CORRECTION / PARCEL VERIFICATION / DATA COLLECTION USING GIS Technology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Sketchingsection;