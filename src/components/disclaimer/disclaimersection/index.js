import React from 'react';
import './disclaimersection.css';

import DisclaimerIcon from './../../../assets/images/disclaimer/disclaimer-icon.png';
import LinkIcon from './../../../assets/images/disclaimer/icon-link.png';
import TimeIcon from './../../../assets/images/disclaimer/icon-time.png';
import PeopleIcon from './../../../assets/images/disclaimer/icon-people.png';
import IdeaIcon from './../../../assets/images/disclaimer/icon-idea.png';

class Disclaimersection extends React.Component {
    render() {
        return (
            <section className="disclaimer_content">
                <div className="content_top">
                    <div className="photo">
                        <img src={DisclaimerIcon} alt="Icon"/>
                    </div>
                    <div className="detail">
                        THIS SITE IS PROVIDED BY synetlanka.com ON AN "AS IS " BASIS. SYNET TECHNOLOGIES MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE CONTENT, MATERIALS OR PRODUCTS INCLUDED ON THE SITE, OR THE OPERATION OF THE SITE. TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, SYNET TECHNOLOGIES EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY , FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. IN NO EVENT SHALL SYNET TECHNOLOGIES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL DAMAGES (INCLUDING WITHOUT LIMITATION, LOSS OF USE, LOST PROFITS OR LOST DATA) WITHOUT REGARD TO THE FORM OF ANY ACTION, INCLUDING BUT NOT LIMITED TO, CONTRACT, NEGLIGENCE, TORT OR OTHER LEGAL THEORY, ARISING FROM THE USE OF THIS SITE.
                    </div>
                </div>
                <div className="content_bottom">
                    <div className="item">
                        <div className="item_photo">
                            <img src={LinkIcon} alt="Icon"/>
                        </div>
                        <div className="item_detail">
                            Links:<br/>
                            This site may contain links to other websites operated by third parties. When you click on a link to access a linked site, you acknowledge that Synet Technologies is not responsible for any content that appears on the linked site.
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_photo">
                            <img src={TimeIcon} alt="Icon"/>
                        </div>
                        <div className="item_detail">
                            No Warranty:<br/>
                            While Synet Technologies attempts to provide accurate information on this Web site, it assumes no responsibility for accuracy. Synet Technologies may change the information on the site, or the products mentioned, at any time without notice.
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_photo">
                            <img src={PeopleIcon} alt="Icon"/>
                        </div>
                        <div className="item_detail">
                            Limitation of liability:<br/>
                            Synet Technologies is not liable for any direct, indirect, special, incidental, consequential or other damages arising out of the use, or the inability to use,
                        </div>
                    </div>
                    <div className="item spec">
                        <div className="item_photo">
                            <img src={IdeaIcon} alt="Icon"/>
                        </div>
                        <div className="item_detail">
                            Copyright of images & or sound clips used in the website:<br/>
                            All the images used in this website are having license for use, "In digital format on websites, multimedia presentations, broadcast film and video, cell phones.", under free for use in website license agreement. SynetTechnologies does not sell these images for profit. If anybody find any violation of copy rights of digital images & or sounds, please let us know at violations@synettechnologies.com. We will take appropriate action and will remove the content within a week time. SynetTechnologies wont be responsible for any violation claims that has not been informed to us either through electronic media or written. We sincerely regret for any damages, if caused.
                        </div>
                    </div>
                </div>
                <div className="content_notice">
                    Icons and graphic illustrations created using Blender (https://www.blender.org/) by Arjun US
                </div>
            </section>
        );
    }
}

export default Disclaimersection;