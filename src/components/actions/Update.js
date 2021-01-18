import React, {Component, useEffect} from 'react';
import {observer, inject} from 'mobx-react';
import ClientInput from './ClientInput';

const Update = inject('actionsUpdate')
(observer((props) => {

const chooseOwner = e => props.actionsUpdate.chooseOwner(e.target.value);

const changeOwner = () => props.actionsUpdate.changeOwner();

const chooseMail = e => props.actionsUpdate.chooseMail(e.target.value);

const sendMail = () => props.actionsUpdate.sendMail();

const declare = () => props.actionsUpdate.declare();

    return (
        <div>
            <h1>Update</h1>
            <ClientInput/>
            <h3>Transfer ownership to</h3>
            <select onChange = {chooseOwner}>
                <option value = "0" style = {{fontWeight: "bold"}}>--  Owner  --</option>
                {props.actionsUpdate.owners.map(o => <option key = {o.o_id} value = {o.o_id}>{o.name}</option>)}
            </select>
            <h3 className = "button-text" onClick = {changeOwner}>TRANSFER</h3>

            <h3>Send email:</h3>
            <select onChange = {chooseMail}>
                <option value = "0" style = {{fontWeight: "bold"}}>--  Email Type  --</option>
                <option value = 'A'>A</option>
                <option value = 'B'>B</option>
                <option value = 'C'>C</option>
                <option value = 'D'>D</option>
            </select>
            <h3 className = "button-text" onClick = {sendMail}>SEND</h3>

            <h3>Declare sale!</h3>
            <h3 className = "button-text" onClick = {declare}>DECLARE</h3>
        </div>
    )
}))

export default Update;