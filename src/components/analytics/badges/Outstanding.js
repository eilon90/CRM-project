import React from 'react';
import {observer, inject} from 'mobx-react';
import { makeStyles, Typography } from '@material-ui/core';

const Outstanding = inject('myClients')
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
            <i className ="fas fa-user-circle" style = {{fontSize: '80px', color: '#ddd', backgroundColor: 'rgb(228, 48, 48)', borderRadius: '60px', padding: '5%', margin: '4%'}}></i>
            <div>
                <Typography variant = 'h3' className = "analytics-data">{props.myClients.outstanding}</Typography>
                <Typography className = {classes.text}>Outstanding Clients</Typography>
            </div>
        </div>
    )
}))

export default Outstanding;