import React from 'react';
import './trainingsection.css';

import TrainingIcon from './../../../assets/images/train/icon-training.png';
import ToolsIcon from './../../../assets/images/train/icon-tools.png';
import GISIcon from './../../../assets/images/train/icon-gis.png';
import CadIcon from './../../../assets/images/train/icon-cad.png';

class Trainingsection extends React.Component {
    render() {
        return (
            <section className="train_content">
                <div className="item">
                    <div className="item_photo">
                        <div>
                            <img src={TrainingIcon} alt="icon"/>
                            <span>Training</span>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item_photo">
                        <div>
                            <img src={GISIcon} alt="icon"/>
                            <span>GIS</span>
                        </div>
                        <div>
                            <img src={ToolsIcon} alt="icon"/>
                            <span>In house tools</span>
                        </div>
                    </div>
                    <div className="item_detail">
                        We have an extensive training period of 3 months which includes basic computer operation to gis. Our service quality is closer to 100% and it requires a detailed training process to meet the standards required. You will be trained in in house tools and other software which is needed for the service.
                    </div>
                </div>
                <div className="item">
                    <div className="item_photo">
                        <div>
                            <img src={CadIcon} alt="icon" />
                            <span>CAD</span>
                        </div>
                    </div>
                    <div className="item_detail">
                        We have multiple quality assessments before you are seleted for a permanent position with Synet.
                    </div>
                </div>
            </section>
        );
    }
}

export default Trainingsection;