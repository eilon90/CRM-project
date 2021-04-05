import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
const moment = require('moment');

export default function Row(props) {
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
        <TableRow onClick = {openUpdate} style = {{cursor: 'pointer'}}>
            <TableCell >{firstName}</TableCell>
            <TableCell >{lastName}</TableCell>
            <TableCell >{country}</TableCell>
            <TableCell >{firstContact}</TableCell>
            <TableCell >{emailType}</TableCell>
            <TableCell >{<i className = {sold ? "fas fa-check" : "fas fa-times"}></i>}</TableCell>
            <TableCell >{owner}</TableCell>
        </TableRow>
    )
}