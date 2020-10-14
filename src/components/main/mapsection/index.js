
import React from 'react';
import './mapsection.css' ;

class Mapsection extends React.Component {
    render() {
        return (
            <section className="map-section">
                <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.in/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Alarhara+nagar+rd,+Vellayambalam,+Trivandrum,+Kerala&amp;aq=&amp;sll=8.50879,76.962361&amp;sspn=0.007725,0.009645&amp;ie=UTF8&amp;t=m&amp;hq=&amp;hnear=Vellayambalam+Maruthankuzhi+Rd,+Elankom+Gardens,+Vellayambalam,+Thiruvananthapuram,+Kerala+695010&amp;z=14&amp;ll=8.50879,76.962361&amp;output=embed"></iframe>
            </section>
        );
    }
}

export default Mapsection;