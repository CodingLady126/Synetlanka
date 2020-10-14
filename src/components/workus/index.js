import React from 'react';

import Whatwedosection from './whatwedosection/index' ;
import Videosection from './videosection/index' ;
import Expertisesection from './expertisesection/index' ;
import Welcomesection from './welcomesection/index' ;
import Visionsection from './visionsection/index' ;
import Missionsection from './missionsection/index' ;
import Mobilesection from './mobilesection/index' ;
import Aboutsection from './aboutsection/index' ;

class Workus extends React.Component {
    render() {
        return (
            <main id="content">
                <Whatwedosection />
				<Videosection />
				<Expertisesection />
                <Welcomesection />
                <Visionsection />
                <Missionsection />
                <Mobilesection />
                <Aboutsection />
			</main>
        );
    }
}

export default Workus;