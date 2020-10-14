
import React from 'react';
import './videocontentsection.css';

import Image_05 from './../../assets/images/image-05.png' ;
import Image_06 from './../../assets/images/image-06.png' ;

class Videocontentsection extends React.Component {
    render() {
        return (
            <section class="video-content">
                <div class="container">
                    <div class="video-content-inner">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="video-container">
                                    <iframe src="https://www.youtube.com/embed/06-kBBnO06A?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="" width="476" height="273"></iframe>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="single-content">
                                    <img src={Image_05} alt="Awards" class="pull-right" />
                                    <p>Established in 2004, Synet Technologies has grown and evolved to meet the changing needs of the industries it serves. We can provide superior quality and cost-effective solutions to meet client demands. A key objective is to provide a single-point reference solution designed to increase customer satisfaction. SynetTechnologies strives to achieve excellence in the areas of custom business software and web development by delivering cutting edge technology solutions that help enterprises enhance their range of business activities as well as enhance levels of efficiency</p>
                                    <p>Synet Technologies possesses a skilled team of dedicated software developers and designers who continuously upgrade their abilities to meet the ever growing demands of businesses worldwide. Synet Technologies is achieving vertical and lateral growth in its areas of expertise by enhancing in-house competency levels as well as through strategic partnerships with other organizations. We have always considered our alliances to be essential in our growth and are looking forward to join hands with like-minded companies globally to satisfy mutual business interests.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-5 pull-right">
                                <div class="video-container">
                                    <iframe src="https://www.youtube.com/embed/6IFRmMDnoV4?showinfo=0&amp;rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="" width="476" height="273"></iframe>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="single-content">
                                    <h3>All projects are done for our exclusive partner in USA, Apex Software.</h3>
                                    <img src={Image_06} alt="Icons" class="pull-left" />
                                    <p>We have been in partnership with Apex Software since our inception and we work exclusively for them in the  service sector. We have completed many prestigeous projects for them and got awarded for our excellence in service quality, which is second to none and stands at 98%. We are currently working on a prestigeous project for a county where we are digitizing all the building sketches (680,000) and verifying it over imagery / updating all the changes to reflect existing condition including data collection for all the 820,000 parcels.</p>
                                    <span class="clearfix"></span>
                                    <p class="text-large">Core Competence<br />
                                        Operating System :  Windows / Android / iOS<br />
                                        Data Base : Oracle / SQL Server<br />
                                    Programming Languages : C++ / C# / ASP.Net / WPF</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Videocontentsection;