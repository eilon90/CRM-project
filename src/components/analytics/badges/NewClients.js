import React from 'react';
import {observer, inject} from 'mobx-react';
import { makeStyles, Typography } from '@material-ui/core';
const moment = require('moment');

const NewClients = inject('myClients')
(observer((props) => {

    const useStyles = makeStyles(() => ({
        badge: {
            width: '24vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            fontWeight: 'bold'
        },
    }))
    const classes = useStyles();

    return (
        <div className = {classes.badge}>
            <i className ="fas fa-chart-line" style = {{fontSize: '80px', color: '#ddd', backgroundColor: 'rgb(27, 216, 84)',borderRadius: '60px', padding: '5%', margin: '4%'}}></i>
            <div>
                <Typography variant = 'h4' className = "analytics-data">{props.myClients.yearClients}</Typography>
                <Typography className = {classes.text}>New {moment().format('YYYY')} Clients</Typography>
                <Typography variant = 'h4' className = "analytics-data">{props.myClients.monthClients}</Typography>
                <Typography className = {classes.text}>New {moment().format('MMMM')} Clients</Typography>
            </div>
        </div>
    )
}))

export default NewClients;