import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import Login from './screens'
export class Routes extends Component {
    render(){
        return(
            <Router>
                <Route path={"login"} Component={Login} />
            </Router>
        )
    }
}