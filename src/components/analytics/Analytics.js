import React, {Component, useEffect} from 'react';
import {observer, inject} from 'mobx-react';
import Badges from './badges/Badges';
import Charts from './charts/Charts';

const Analytics = inject('myClients')
(observer((props) => {

    useEffect(async() => {
        props.myClients.getClients();
    }, []);

    return (
        <div id = "analytics">
            <button onClick = {() => console.log(props.myClients.acquisition)}></button>
            <Badges/>
            <Charts/>
        </div>
    )
}))

export default Analytics;