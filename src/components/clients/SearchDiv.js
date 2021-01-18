import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

const SearchDiv = inject('myClients')
(observer((props) => {

    const myClients = props.myClients
    const group = myClients.group;
    const groupRange = `${group * 20 - 19} - ${(group === myClients.numOfGroups && myClients.clients.length % 20 > 0) ? ((group - 1) * 20) + myClients.clients.length % 20 : group * 20}`;

    const formerGroup = () => myClients.formerGroup();
    const nextGroup = () => myClients.nextGroup();


    return (
        <div id = "serch-div">
            <input placeholder = "Search" id = "searchInput"/>
            <select placeholder = "Name"></select>
            <i className = "fas fa-chevron-left" onClick = {formerGroup}></i>
            <span>{groupRange}</span>
            <i className = "fas fa-chevron-right" onClick = {nextGroup}></i>
        </div>
    )
}))

export default SearchDiv;