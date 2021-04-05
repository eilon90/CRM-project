import React from 'react';
import {observer, inject} from 'mobx-react';
import {makeStyles, Typography, TextField, FormControl, Select, InputLabel, MenuItem, Button} from '@material-ui/core';

const AddClient = inject('addClient')
(observer((props) => {

    const useStyles = makeStyles(() => ({
        add: {
            marginLeft: '5%',
            display: 'flex',
            width: '25%',
            marginTop: '1.5%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline',
        },
        text: {
            fontSize: 'large'
        }
    }))
    const classes = useStyles();

    const changeFName = e => props.addClient.changeFName(e.target.value);
    const changeLName = e => props.addClient.changeLName(e.target.value);
    const changeEmail = e => props.addClient.changeEmail(e.target.value);
    const chooseCountry = e => props.addClient.chooseCountry(e.target.value);
    const chooseOwner = e => props.addClient.chooseOwner(e.target.value);
    const addClient = () => props.addClient.addClient();

    return (
        <div>
            <Typography variant = 'h5' style = {{margin: '1%', fontWeight: 'bold'}}>ADD CLIENT</Typography>

            <div className = {classes.add} style = {{marginTop: '0'}}>
                <Typography className = {classes.text} display = 'inline'>First Name:</Typography>
                <TextField style = {{width: '55%'}} value = {props.addClient.firstName} onChange = {changeFName}/> 
            </div>

            <div className = {classes.add}>
                <Typography className = {classes.text} display = 'inline'>Surname:</Typography>
                <TextField style = {{width: '55%'}} value = {props.addClient.lastName} onChange = {changeLName}/> 
            </div>

            <div className = {classes.add}>                
                <Typography className = {classes.text} display = 'inline'>Country:</Typography>
                <FormControl style = {{width: '55%'}}>
                    <InputLabel id="country">country</InputLabel>
                    <Select style = {{width: 'auto'}} labelId="country" value = {props.addClient.country} onChange={chooseCountry}>
                        {props.addClient.countries.map(c => <MenuItem key = {c.c_id} value = {c.c_id}>{c.name}</MenuItem>)}
                    </Select>
                </FormControl> 
            </div>

            <div className = {classes.add}>        
                <Typography className = {classes.text} display = 'inline'>Email:</Typography>
                <TextField style = {{width: '55%'}} value = {props.addClient.email} onChange = {changeEmail}/> 
            </div>

            <div className = {classes.add}>     
                <Typography className = {classes.text} display = 'inline'>new Owner:</Typography>
                <FormControl style = {{width: '55%', marginBottom: '3%'}}>
                    <InputLabel id="new-owner">new Owner</InputLabel>
                    <Select style = {{width: 'auto'}} labelId = "new-owner" value = {props.addClient.owner} onChange={chooseOwner}>
                        {props.addClient.owners.map(o => <MenuItem key = {o.o_id} value = {o.o_id}>{o.name}</MenuItem>)}
                    </Select>
                </FormControl> 
            </div>

            <Button style = {{margin: '1% 5%'}} variant='contained' color = 'secondary' onClick = {addClient}>Add New Client</Button>
        </div>
    )
}))
export default AddClient;


