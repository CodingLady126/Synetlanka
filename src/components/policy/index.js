import React from 'react';
import './policy.css';

import Policysection from './policysection/index' ;

class Policy extends React.Component {
    render() {
        return (
            <main id="content">
				<Policysection />
			</main>
        );
    }
}

export default Policy;