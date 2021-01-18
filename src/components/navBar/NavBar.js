import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavBarLink from './navBarLink'

export default function NavBar() {

    return (
        <div id = "nav-bar">
                <NavBarLink link = "Home"/>
                <NavBarLink link = "Clients"/>
                <NavBarLink link = "Actions"/>
                <NavBarLink link = "Analytics"/>
        </div>
    )
}