import React from 'react';
import './policysection.css';

import PrivacyIcon from './../../../assets/images/policy/privacy-icon.png';
import CardIcon from './../../../assets/images/policy/icon-card.png';
import InfoIcon from './../../../assets/images/policy/icon-info.png';

class Policysection extends React.Component {
    render() {
        return (
            <section className="policy_content">
                <div className="content_top">
                    <div className="photo">
                        <img src={PrivacyIcon} alt="Icon"/>
                    </div>
                    <div className="detail">
                        <span>SynetTechnologies PRIVACY POLICY</span><br/>
                        SynetTechnologies is committed to protecting your privacy. This privacy policy tells you about our online collection and use of data. The terms of this policy apply to synettechnologies.com. By using this site, you understand and agree to the terms of this policy. This site is owned by SynetTechnologies and may be accessed from anywhere. For data protection purposes, SynetTechnologies is the controller and, unless otherwise noted, is also the processor of data. Information collected may be retained, and may be stored, processed, accessed, and used in jurisdictions whose privacy laws allows to do so.
                    </div>
                </div>
                <div className="content_bottom">
                    <div className="item">
                        <div className="item_photo">
                            <img src={CardIcon} alt="Icon"/>
                        </div>
                        <div className="item_detail">
                            Collection of Your Personal Information<br/>
                            When you visit this site, certain kinds of information, such as the website that referred you to us, your IP address, browser type and language, and access times, may be collected automatically as part of the site's operation. We also may collect navigational information, including information about the pages you view, the links you click, and other actions taken in connection with the site.<br/>
                            <br/>
                            The data that is collected as part of submitting your resume (Contact number, Contact email etc...) will not be sold or disclosed to third party. You will receive an SMS as part of the mobile number verification process. SynetTechnologies may contact you for telephonic interview or in regard of interview appointments.
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_photo">
                            <img src={InfoIcon} alt="Icon"/>
                        </div>
                        <div className="item_detail">
                            Use of Cookies and Other Technologies<br/>
                            Our site does not use cookies, so we do not keep track of individual users.<br/>
                            <br/>
                            Changes to This Privacy Policy<br/>
                            We reserve the right to change the terms of this privacy policy at any time. We encourage you to review this policy whenever you visit one of our sites.<br/>
                            <br/>
                            Contact Information<br/>
                            You can contact SynetTechnologies by emailing contactus {'{@}'} synettechnologies.com, or by phone at +94 - 312230971 , 312230972 or by postal mail at<br/>
                            <br/>
                            Synet Technologies Lanka Pvt Ltd.<br/>
                            229, 1/1, St Joseph Street,<br/>
                            Negombo.
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Policysection;