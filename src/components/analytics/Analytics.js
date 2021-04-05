import React, {useEffect} from 'react';
import {observer, inject} from 'mobx-react';
import Badges from './badges/Badges';
import Charts from './charts/Charts';
import { makeStyles } from '@material-ui/core';

const Analytics = inject('myClients')
(observer((props) => {

    useEffect(async() => {
        props.myClients.getClients();
    }, []);

    const useStyles = makeStyles(() => ({
        analytics: {
            height: '100%',
            width: '100%',
            display: 'grid',
            gridTemplateRows: '3fr 9fr'
        }
    }))
    const classes = useStyles();

    return (
        <div id = "analytics" className = {classes.analytics}>
            <Badges/>
            <Charts/>
        </div>
    )
}))

export default Analytics;