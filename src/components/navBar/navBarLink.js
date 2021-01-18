import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default function NavBarLink({link}) {

    return (
        <div className  = "nav-div">
            <Link to = {link === 'home' ? "/" : link.toLowerCase()} className = "nav-link">{link}</Link>
        </div>
    )
}