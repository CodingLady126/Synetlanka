import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Main from './components/main/index' ;
import Policy from './components/policy'
import Disclaimer from './components/disclaimer'
import Training from './components/training'
import Workus from './components/workus'

class Routes extends React.Component {
    render() {
        return (
        <Router>
            <div>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/policy">
                    <Policy />
                </Route>
                <Route path="/workus">
                    <Workus />
                </Route>
                <Route path="/career">
                    <Policy />
                </Route>
                <Route path="/train">
                    <Training />
                </Route>
                <Route path="/disclaimer">
                    <Disclaimer />
                </Route>
            </div>
        </Router>
        );
    }
}

export default Routes;
  