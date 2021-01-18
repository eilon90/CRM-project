import React, {Component, useEffect} from 'react';
import {observer, inject} from 'mobx-react';
const moment = require('moment');

const NewClients = inject('myClients')
(observer((props) => {

    return (
        <div id = "new-clients">
            <i className ="fas fa-chart-line"></i>
            <h1 className = "analytics-data">{props.myClients.yearClients}</h1>
            <h3 className = "analytics-details">New {moment().format('YYYY')} Clients</h3>
            <h1 className = "analytics-data">{props.myClients.monthClients}</h1>
            <h3 className = "analytics-details">New {moment().format('MMMM')} Clients</h3>
        </div>
    )
}))

export default NewClients;