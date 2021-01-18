import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

const ClientInput = inject('actionsUpdate')
(observer((props) => {

    const chooseClient = (e) => {
        const firstName = e.target.value.split(' ')[0];
        const lastName = e.target.value.split(' ')[1];
        const client = props.actionsUpdate.dataToUpdate.find(d => d.firstName === firstName && d.lastName === lastName);
        if (client) {props.actionsUpdate.chooseClient(client.id)}
    }

    return (
        <div>
            <h3>Client:</h3>
            <input placeholder = "Client name" list = "clients" onChange = {chooseClient}/>
            <datalist id = "clients">
                {props.actionsUpdate.dataToUpdate.map(d => <option key = {d.id} value = {`${d.firstName} ${d.lastName}`}></option>)}
            </datalist>
            <button onClick = {() => console.log(props.actionsUpdate.ownerToUpdate)}></button>
        </div>
    )
}))

export default ClientInput;
