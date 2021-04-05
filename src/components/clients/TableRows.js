import React from 'react';
import Row from './Row';
import TableBody from '@material-ui/core/TableBody';
import {observer, inject} from 'mobx-react';


const TableRows = inject('myClients', 'popUp')
(observer((props) => {

    const clientsGroup = props.myClients.clientsToDisplay.slice((props.myClients.group -1) * 20, props.myClients.group * 20);

    const openUpdate = (id, firstName, lastName, country) => {
        props.popUp.popUpOn(id, firstName, lastName, country);
    }

    return (
        <TableBody>
            {clientsGroup.map(c => <Row key = {clientsGroup.indexOf(c)} client = {c} openUpdate = {openUpdate}/>)}
        </TableBody>
    )
}))

export default TableRows