import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/index';
import Footer from './components/footer/index' ;
import Routes from './Route'

const browserHistory = createBrowserHistory();

function App() {
    return (
      <div className="App">
        <Header />
          <Router history={browserHistory}>
            <Routes />
          </Router>
        <Footer />
      </div>
    );
}

export default App;
