import React from 'react';
import {
    Router,
    Route
} from 'react-router-dom';

import App from './App';
import Poll from './components/poll';
import Home from './components/home';
import Nav from './Nav';
import CreatePoll from './components/CreatePoll'
import SinglePoll from './components/SinglePoll'
import Results from './components/results'

import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory()

const MyRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/poll" component={Poll} />
            <Route path="/createpoll" component={CreatePoll} />
            <Route path="/results/:results" component={Results} />
            <Route path="/singlepoll/:id" component={SinglePoll} />
            {/* <Route path="/contact/:username" component={Contact} /> */}
        </div>
    </Router>
)

export default MyRoutes;