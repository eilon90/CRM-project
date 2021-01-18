import React, {Component} from 'react';
import TableRow from './TableRow';
import {observer, inject} from 'mobx-react';


const TableRows = inject('myClients', 'popUp')
(observer((props) => {

    const clientsGroup = props.myClients.clients.slice((props.myClients.group -1) * 20, props.myClients.group * 20);

    const openUpdate = (id, firstName, lastName, country) => {
        props.popUp.popUpOn(id, firstName, lastName, country);
    }

    return (
        <tbody>
            {clientsGroup.map(c => <TableRow key = {clientsGroup.indexOf(c)} client = {c} openUpdate = {openUpdate}/>)}
        </tbody>
    )
}))

export default TableRows