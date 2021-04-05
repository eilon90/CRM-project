import React from 'react';
import {Link} from 'react-router-dom';
import {Tab} from '@material-ui/core';

export default function NavBarLink({link}) {

    return (
        <div>
            <Tab style = {{fontSize: '20px'}} label = {link} component = {Link} to = {link === 'Home' ? "/" : link.toLowerCase()}></Tab>
        </div>
    )
}