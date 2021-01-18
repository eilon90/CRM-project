import React, {Component, useEffect} from 'react';
import {observer, inject} from 'mobx-react';

const Outstanding = inject('myClients')
(observer((props) => {

    return (
        <div id = "Outstanding">
            <i className ="fas fa-user-circle"></i>
            <h1 className = "analytics-data">{props.myClients.outstanding}</h1>
            <h3 className = "analytics-details">Outstanding Clients</h3>
        </div>
    )
}))

export default Outstanding;