import React, {Component, useEffect} from 'react';
import {observer, inject} from 'mobx-react';

const EmailsSent = inject('myClients')
(observer((props) => {

    return (
        <div id = "emails-sent">
            <i className = "far fa-envelope"></i>
            <h1 className = "analytics-data">{props.myClients.emailsSent}</h1>
            <h3 className = "analytics-details">Emails Sent</h3>
        </div>
    )
}))

export default EmailsSent;