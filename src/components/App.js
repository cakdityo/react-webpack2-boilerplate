import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import moment from 'moment';
import '../styles/main.css';

import About from './About';
import Navbar from './Navbar';
import Page1 from './Page1';
import Page2 from './Page2';

const App = (props) => (
    <Router>
        <div>
            <Switch>
                
                <Route path="/about" component={ About } />
                <Route path="/" children={ () => (
                    <div>
                        <h1>Main Page</h1>
                        <Navbar />
                        <hr />
                        <Route path="/page1" component={ Page1 } />
                        <Route path="/page2" component={ Page2 } />
                    </div>
                ) } />

            </Switch>

        </div>
    </Router>
);

export default App;

