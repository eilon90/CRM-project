import React from 'react';
import {observer, inject} from 'mobx-react';
import { makeStyles, Typography } from '@material-ui/core';

const EmailsSent = inject('myClients')
(observer((props) => {

    const useStyles = makeStyles(() => ({
        badge: {
            width: '24vw',
            display: 'flex',
            alignItems: 'center'
        },
        text: {
            fontWeight: 'bold'
        },
    }))

    const classes = useStyles();

    return (
        <div className = {classes.badge}>
            <i className = "far fa-envelope" style = {{fontSize: '80px', color: '#ddd', backgroundColor: 'rgb(39, 130, 204)',borderRadius: '60px', padding: '5%', margin: '4%'}}></i>
            <div>
                <Typography variant = 'h3' className = "analytics-data">{props.myClients.emailsSent}</Typography>
                <Typography className = {classes.text}>Emails Sent</Typography>
            </div>
        </div>
    )
}))

export default EmailsSent;