import React, {Component, useEffect} from 'react';
import {observer, inject} from 'mobx-react';
import TableHeader from './TableHeader'
import TableRows from './TableRows';
import SearchDiv from './SearchDiv';
import UpdateClient from './UpdateClient';

const Clients = inject('myClients', 'popUp')
(observer((props) => {

    const clients = props.myClients.clients;

    useEffect(async() => {
        props.popUp.popUpVisible = false;
        props.myClients.getClients();
    }, []);

    return (
        <div id = "clients">
            <SearchDiv/>
            <table>
                <thead>
                    <TableHeader/>
                </thead>
                    <TableRows/>
            </table>
            <UpdateClient/>
        </div>
    )
}))

export default Clients