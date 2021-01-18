import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

const UpdateClient = inject('myClients', 'popUp')
(observer((props) => {

    const popUp = props.popUp;

    const closeUpdate = () => popUp.popUpOff();

    const changeName = e => popUp.changeName(e.target.value);

    const changeSurname = e => popUp.changeSurname(e.target.value);

    const changeCountry = e => popUp.changeCountry(e.target.value);

    const update = () => {
        const client = {
            id : popUp.clientId,
            firstName: popUp.nameToUpdate,
            lastName: popUp.surNameToUpdate,
            country: popUp.countryToUpdate,
        }
        props.myClients.updateClient(client);
        popUp.popUpOff();
    }

    return (
        <div id = {popUp.popUpVisible ? "visible-pop-up" : "hidden-pop-up"}>
            <i className = "fas fa-window-close" onClick = {closeUpdate}></i>
            <h3>Name:</h3>
            <input value = {popUp.nameToUpdate} onChange = {changeName}/>
            <h3>Surname:</h3>
            <input value = {popUp.surNameToUpdate} onChange = {changeSurname}/>
            <h3>Country:</h3>
            <input value = {popUp.countryToUpdate} onChange = {changeCountry}/>
            <button onClick = {update}>Update</button>
        </div>
    )
}))

export default UpdateClient;


