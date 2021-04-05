import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home'
import Clients from './clients/Clients'
import Analytics from './analytics/Analytics'
import Actions from './actions/Actions'

class Container extends Component {

    render() {
        return (
            <div id = "container">
                <Route path = "/" exact render = { () => <Home/>}/>
                <Route path = "/clients" exact render = { () => <Clients/>}/>
                <Route path = "/actions" exact render = { () => <Actions/>}/>
                <Route path = "/analytics" exact render = { () => <Analytics/>}/>
            </div>
        )
    }
}

export default Container;