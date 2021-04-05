import React from 'react';
import {observer, inject} from 'mobx-react';
import {Dialog, makeStyles, TextField, Typography, Button} from '@material-ui/core';

const UpdateClient = inject('myClients', 'popUp')
(observer((props) => {

    const useStyles = makeStyles({
        popUp: {
            width: '400px',
            height: '250px',
            backgroundColor: 'rgb(36, 36, 36)',
            opacity: '0.9',
            color: 'white',
            fontFamily: 'arial',
            fontWeight: '1',
            display: 'grid',
            gridTemplateRows: 'repete(5, 1fr)',
            padding: '13px'
        }
    })
    const classes = useStyles();

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
        <Dialog open = {popUp.popUpVisible}>
            <div className = {classes.popUp}>
                <i className = "fas fa-window-close" onClick = {closeUpdate}></i>
                <div>
                    <Typography style = {{display: 'inline'}}>Name:</Typography>
                    <TextField value = {popUp.nameToUpdate} onChange = {changeName} style = {{float: 'right'}}/>
                </div>
                <div>
                    <Typography style = {{display: 'inline'}}>Surname:</Typography>
                    <TextField value = {popUp.surNameToUpdate} onChange = {changeSurname} style = {{float: 'right'}}/>
                </div>
                <div>
                    <Typography style = {{display: 'inline'}}>Country:</Typography>
                    <TextField value = {popUp.countryToUpdate} onChange = {changeCountry} style = {{float: 'right'}}/>
                </div>
                <Button onClick = {update} variant='contained' color = 'secondary' style = {{height: '70%', width: '97%', fontSize: 'large', margin: 'auto'}}>Update</Button>
            </div>
        </Dialog>
    )
}))

export default UpdateClient;


