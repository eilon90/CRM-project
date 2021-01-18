import React, {Component} from 'react';
import {observer, inject, PropTypes} from 'mobx-react';
const validator = require('validator');

const AddClient = inject('addClient')
(observer((props) => {

    const changeFName = e => props.addClient.changeFName(e.target.value);

    const changeLName = e => props.addClient.changeLName(e.target.value);

    const changeEmail = e => props.addClient.changeEmail(e.target.value);

    const chooseCountry = e => props.addClient.chooseCountry(e.target.value);

    const chooseOwner = e => props.addClient.chooseOwner(e.target.value);

    const addClient = () => props.addClient.addClient();

    return (
        <div>
            <h1>ADD CLIENT</h1>

            <h3>First Name:</h3>
            <input value = {props.addClient.firstName} onChange = {changeFName}/> 

            <h3>Surname:</h3>
            <input value = {props.addClient.lastName} onChange = {changeLName}/> 

            <h3>Country:</h3>
            <select onChange = {chooseCountry}>

                <option value = "0" style = {{fontWeight: "bold"}}>--  country  --</option>
                {props.addClient.countries.map(c => <option key = {c.c_id} value = {c.c_id}>{c.name}</option>)}
            </select> 

            <h3>Email:</h3>
            <input value = {props.addClient.email} onChange = {changeEmail}/> 

            <h3>newOwner:</h3>
            <select onChange = {chooseOwner}>
                <option value = "0" style = {{fontWeight: "bold"}}>--  Owner  --</option>
                {props.addClient.owners.map(o => <option key = {o.o_id} value = {o.o_id}>{o.name}</option>)}
            </select> 

            <button onClick = {addClient}>Add New Client</button>
        </div>
    )
}))
export default AddClient;


