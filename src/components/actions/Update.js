import React from 'react';
import {observer, inject} from 'mobx-react';
import ClientInput from './ClientInput';
import { makeStyles, Typography, Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';

const Update = inject('actionsUpdate')
(observer((props) => {

    const useStyles = makeStyles(() => ({
        action: {
            marginLeft: '5%',
            display: 'flex',
            width: '30%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline',
        },
        actionButton: {
            cursor: 'pointer',
            fontWeight: 'bold'
        },
        text: {
            fontSize: 'large'
        }
    }))
    const classes = useStyles();

    const chooseOwner = e => props.actionsUpdate.chooseOwner(e.target.value);
    const changeOwner = () => props.actionsUpdate.changeOwner();
    const chooseMail = e => props.actionsUpdate.chooseMail(e.target.value);
    const sendMail = () => props.actionsUpdate.sendMail();
    const declare = () => props.actionsUpdate.declare();

    return (
        <div>
            <Typography variant = 'h5' style = {{margin: '1% 0 0 1%', fontWeight: 'bold'}}>Update</Typography>
            <ClientInput/>
            <div className = {classes.update}>
                <div className = {classes.action}>
                    <Typography className = {classes.text} display = 'inline'>Transfer ownership to</Typography>
                    <FormControl style = {{width: '30%'}}>
                        <InputLabel id="demo-simple-select-label">Owner</InputLabel>
                        <Select style = {{width: 'auto'}} labelId="demo-simple-select-label" id="demo-simple-select" value={props.actionsUpdate.ownerToUpdate} onChange={chooseOwner}>
                            {props.actionsUpdate.owners.map(o => <MenuItem key = {o.o_id} value = {o.o_id}>{o.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <Typography color = 'secondary' className = {classes.actionButton} onClick = {changeOwner}>TRANSFER</Typography>
                </div>

                <div className = {classes.action}>
                    <Typography className = {classes.text} display = 'inline' className = {classes.text}>Send email:</Typography>
                    <FormControl style = {{width: '30%'}}>
                        <InputLabel id="demo-simple-select-label">Email Type</InputLabel>
                        <Select style = {{width: 'auto'}} labelId="demo-simple-select-label" id="demo-simple-select" onChange={chooseOwner}>
                            <MenuItem value = 'A'>A</MenuItem>
                            <MenuItem value = 'B'>B</MenuItem>
                            <MenuItem value = 'C'>C</MenuItem>
                            <MenuItem value = 'D'>D</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography className = {classes.text} color = 'secondary' className = {classes.actionButton} onClick = {sendMail}>SEND</Typography>
                </div>

                <div className = {classes.action} style = {{alignItems: 'center', margin: '1% 5%'}}>
                    <Typography display = 'inline' className = {classes.text}>Declare sale!</Typography>
                    <Typography color = 'secondary' className = {classes.actionButton} onClick = {declare}>DECLARE</Typography>
                </div>
            </div>
        </div>
    )
}))

export default Update;