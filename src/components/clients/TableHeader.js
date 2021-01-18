import { reaction } from "mobx";
import React, {Component} from 'react';

export default function tableHeader() {

    return (
        <tr id = "table-title">
            <th>Name</th>
            <th>Surname</th>
            <th>Country</th>
            <th>First Contact</th>
            <th>Email</th>
            <th>Sold</th>
            <th>Owner</th>
        </tr> 
    )
}