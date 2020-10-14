
import React from 'react';
import './section.css';

class Section extends React.Component {
    render() {
        return (
            <section class="google-map-section">
                <iframe width="100%" height="550" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3958.297219436742!2d79.8452344!3d7.2068934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee91f90ad8ed%3A0xa4e81c607586b2a0!2sSynet+Technologies+Lanka+Pvt.+Ltd.!5e0!3m2!1sen!2sus!4v1532935429429"></iframe>
            </section>
        );
    }
}

export default Section;