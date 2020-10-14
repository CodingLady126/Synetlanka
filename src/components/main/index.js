import React from 'react';
import './main.css';

import Mapsection from './mapsection/index' ; 
import Mainsection from './mainsection/index' ;
import Categorysection from './categorysection/index' ;
import Videosection from './videosection/index' ;
import Sketchingsection from './../sketchingsection/index' ;
import Servicessection from './servicessection/index' ;
import ImageMapsection from './imagemapsection/index' ;
import Digitizationsection from './digitizationsection/index' ;
import Newssection from './newssection/index' ;
import Gridsection from './gridsection/index' ;
import Bottomslidersection from './bottomslidersection/index' ;
import Providingsection from './providingsection/index';
import Industrysection from './industrysection/index' ;

class Main extends React.Component {
    render() {
        return (
            <main id="content">
				<Mainsection />
                <Categorysection />
                <Videosection />
				<Servicessection />
				<Digitizationsection />
                
				<Gridsection />	
                <ImageMapsection />
                <Industrysection />
				<Newssection />
                <Providingsection />
                <Bottomslidersection />			
                <Mapsection />
			</main>
        );
    }
}

export default Main;