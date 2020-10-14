
import React from 'react';

import './expertisesection.css';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import $ from 'jquery';

import Icon1 from './../../../assets/images/workus/expertise_item_1.png' ;
import Icon2 from './../../../assets/images/workus/expertise_item_2.png' ;
import Icon3 from './../../../assets/images/workus/expertise_item_3.png' ;

import ItemReact from './../../../assets/images/workus/icons/react-logo.svg' ;
import ItemAngular from './../../../assets/images/workus/icons/angular-logo.svg' ;
import ItemJQuery from './../../../assets/images/workus/icons/jquery-logo.svg' ;
import ItemJavascript from './../../../assets/images/workus/icons/javascript-logo.svg' ;
import ItemNode from './../../../assets/images/workus/icons/node-logo.svg' ;
import ItemPHP from './../../../assets/images/workus/icons/php-logo.svg' ;
import ItemJava from './../../../assets/images/workus/icons/java-logo.svg' ;
import ItemIOS from './../../../assets/images/workus/icons/ios-logo.svg' ;
import ItemAndroid from './../../../assets/images/workus/icons/android-logo.svg' ;
import ItemReactNative from './../../../assets/images/workus/icons/reactnative-logo.svg' ;
import ItemCpp from './../../../assets/images/workus/icons/cpp-logo.svg' ;
import ItemCSharp from './../../../assets/images/workus/icons/csharp-logo.svg' ;
import ItemWPF from './../../../assets/images/workus/icons/wpf-logo.svg' ;
import ItemNet from './../../../assets/images/workus/icons/net-logo.svg' ;
import ItemASP from './../../../assets/images/workus/icons/asp-logo.png' ;
import ItemESRI from './../../../assets/images/workus/icons/esri-logo.png' ;
import ItemMysql from './../../../assets/images/workus/icons/mysql-logo.svg' ;
import ItemSqlite from './../../../assets/images/workus/icons/sqlite-logo.png' ;

class Expertisesection extends React.Component {
    componentDidMount() {
        this.flkty = new Flickity('.section_technology', {
            freeScroll: true,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            autoPlay: true,
            prevNextButtons: true
        });
    }

    goCommitment() {
        $('html, body').animate({
            scrollTop: $(".about-section").offset().top - 200
        }, 1000);
    }

    render() {
        return (
            <section className="expertise-section">
                <div className="section_title">
                    Technology
                </div>
                <div className="section_overflow_1"></div>
                <div className="section_overflow_2"></div>
                <div className="section_content">
                    <div className="section_description">
                        Are you looking to use any of these technologies for your solution?
                    </div>
                    <div className="section_technology">
                        <div className="tech_item">
                            <div className="item item_1">
                                <div className="item_photo">
                                    <img src={ItemReact} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">React</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                            <div className="item item_2">
                                <div className="item_photo">
                                    <img src={ItemAngular} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">Angular</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                            <div className="item item_3">
                                <div className="item_photo">
                                    <img src={ItemJQuery} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">JQuery</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tech_item">
                            <div className="item item_1">
                                <div className="item_photo">
                                    <img src={ItemJavascript} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">JavaScript</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                            <div className="item item_2">
                                <div className="item_photo">
                                    <img src={ItemNode} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">NodeJS</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                            <div className="item item_3">
                                <div className="item_photo">
                                    <img src={ItemPHP} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">PHP</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tech_item">
                            <div className="item item_1">
                                <div className="item_photo">
                                    <img src={ItemJava} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">Java</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                            <div className="item item_2">
                                <div className="item_photo">
                                    <img src={ItemIOS} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">iOS</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                            <div className="item item_3">
                                <div className="item_photo">
                                    <img src={ItemAndroid} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">Android</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tech_item">
                            <div className="item item_1">
                                <div className="item_photo">
                                    <img src={ItemReactNative} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">ReactNative</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                            <div className="item item_2">
                                <div className="item_photo">
                                    <img src={ItemCpp} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">Visual C++</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                            <div className="item item_3">
                                <div className="item_photo">
                                    <img src={ItemCSharp} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">Visual C#</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tech_item">
                            <div className="item item_1">
                                <div className="item_photo">
                                    <img src={ItemWPF} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">WPF</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                            <div className="item item_2">
                                <div className="item_photo">
                                    <img src={ItemNet} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">.Net/C#</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                            <div className="item item_3">
                                <div className="item_photo">
                                    <img src={ItemASP} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">ASP.Net</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tech_item">
                            <div className="item item_1">
                                <div className="item_photo">
                                    <img src={ItemESRI} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">ESRI</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                            <div className="item item_2">
                                <div className="item_photo">
                                    <img src={ItemMysql} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">Mysql</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                            <div className="item item_3">
                                <div className="item_photo">
                                    <img src={ItemSqlite} />
                                </div>
                                <div className="item_detail">
                                    <div className="detail_title">Sqlite</div>
                                    <div className="detail_text">
                                        1 Series •  10 Videos
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section_detail">
                        <div className="detail_item">
                            <div className="item_title">
                                {'{Code}'}
                            </div>
                            <div className="item_text">
                                Clean ,Reliable , Maintenable 
                            </div>
                            <div className="item_photo">
                                <img src={Icon1} />
                            </div>
                        </div>
                        <div className="detail_item">
                            <div className="item_title">
                                Delivery
                            </div>
                            <div className="item_text">
                                Agile ,Timely & Reliable 
                            </div>
                            <div className="item_photo">
                                <img src={Icon2} />
                            </div>
                        </div>
                    </div>
                    <div className="section_process"  onClick={this.goCommitment}>
                        <img src={Icon3} />
                        <div className="process_text">
                            View Process
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Expertisesection;