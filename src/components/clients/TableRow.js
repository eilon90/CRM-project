import React, {Component} from 'react';
const moment = require('moment');

export default function TableRow(props) {
    const client = props.client;
    const id = client._id;
    const firstName = client.firstName;
    const lastName = client.lastName;
    const country = client.country;
    const firstContact = moment(client.firstContact).format('DD/MM/YYYY');
    const emailType = client.emailType;
    const sold = client.sold;
    const owner = client.owner;

    const openUpdate = () => {
        props.openUpdate(id, firstName, lastName, country);
    }

    return (
        <tr onClick = {openUpdate}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{country}</td>
            <td>{firstContact}</td>
            <td>{emailType}</td>
            <td>{<i className = {sold ? "fas fa-check" : "fas fa-times"}></i>}</td>
            <td>{owner}</td>
        </tr>
    )
}