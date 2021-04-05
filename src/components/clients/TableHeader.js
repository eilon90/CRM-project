import { reaction } from "mobx";
import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function tableHeader() {
    
    return (
        <TableRow style = {{backgroundColor: 'rgba(233, 203, 31, 0.822)', boxShadow: '3px 3px #999'}}>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>First Contact</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Sold</TableCell>
            <TableCell>Owner</TableCell>
        </TableRow> 
    )
}