import React from 'react';
import {observer, inject} from 'mobx-react';
import { makeStyles, Typography } from '@material-ui/core';

const ClientInput = inject('actionsUpdate')
(observer((props) => {

    const useStyles = makeStyles(() => ({
        clientInput: {
            margin: '1% 0 1% 3%',
            display: 'flex',
            flexDirection: 'row',
            width: '15%',
            justifyContent: 'space-between',
            alignItems: 'baseline',
        },
        text: {
            fontSize: 'large',
            fontWeight: 'bold'
        }
    }))
    const classes = useStyles();

    const chooseClient = (e) => {
        const firstName = e.target.value.split(' ')[0];
        const lastName = e.target.value.split(' ')[1];
        const client = props.actionsUpdate.dataToUpdate.find(d => d.firstName === firstName && d.lastName === lastName);
        if (client) {props.actionsUpdate.chooseClient(client.id)}
    }

    return (
        <div className = {classes.clientInput}>
            <Typography display = 'inline' className = {classes.text}>Client:</Typography>
            <input label = "Client name" list = "clients" onChange = {chooseClient} style = {{border: '0', borderBottom: '0.5px solid black', backgroundColor: '#eee', marginLeft: '0'}}/>
            <datalist id = "clients">
                {props.actionsUpdate.dataToUpdate.map(d => <option key = {d.id} value = {`${d.firstName} ${d.lastName}`}></option>)}
            </datalist>
        </div>
    )
}))

export default ClientInput;
