import React from 'react';
import {BrowserRouter as Router, Route, Link, useLocation} from 'react-router-dom';
import {AppBar, Tabs,} from '@material-ui/core';
import NavBarLink from './navBarLink';

export default function NavBar() {

    let value = 0;

    const location = useLocation().pathname;
    switch (location) {
        case '/': value = 0;
        break;
        case '/clients': value = 1;
        break;
        case '/actions': value = 2;
        break;
        case '/analytics': value = 3;
        break;
    }

    return (
        <div>
        <AppBar position = 'static' style = {{flexDirection: 'row'}}>
            <Tabs value = {value}>
                <NavBarLink link = "Home"/>
                <NavBarLink link = "Clients"/>
                <NavBarLink link = "Actions"/>
                <NavBarLink link = "Analytics"/>
            </Tabs>
        </AppBar>
        </div>
    )
}