import React from 'react';
import {observer, inject} from 'mobx-react';
import { makeStyles, Typography } from '@material-ui/core';

const HotestCountry = inject('myClients')
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
            <i className ="fas fa-globe-americas" style = {{fontSize: '80px', color: '#ddd', backgroundColor: 'rgb(255, 238, 0)',borderRadius: '60px', padding: '5%', margin: '4%'}}></i>
            <div>
                {props.myClients.hotestCountry[0] && props.myClients.hotestCountry.map(h => <Typography variant = 'h3' key = {props.myClients.hotestCountry.indexOf(h)} className = "analytics-data">{h.country}</Typography>)}
                <Typography className = {classes.text}>Hotest Country</Typography>
            </div>
        </div>
    )
}))

export default HotestCountry;