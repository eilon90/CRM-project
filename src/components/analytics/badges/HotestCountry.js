import React, {Component, useEffect} from 'react';
import {observer, inject} from 'mobx-react';

const HotestCountry = inject('myClients')
(observer((props) => {

    return (
        <div id = "hotest-country">
            <i className ="fas fa-globe-americas"></i>
            {props.myClients.hotestCountry[0] && props.myClients.hotestCountry.map(h => <h1 key = {props.myClients.hotestCountry.indexOf(h)} className = "analytics-data">{h.country}</h1>)}
            <h3 className = "analytics-details">Hotest Country</h3>
            {/* <button onClick = {() => console.log(props.myClients.hotestCountry)}></button> */}
        </div>
    )
}))

export default HotestCountry;