import React from 'react';
import {observer, inject} from 'mobx-react';
import {makeStyles, TextField, Select, InputLabel, FormControl, MenuItem} from '@material-ui/core';

const SearchDiv = inject('myClients')
(observer((props) => {

    const useStyles = makeStyles(() => ({
        searchBar: {
            height: '4vh',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1%'
        },

        stepsTwenty: {
            fontSize: '20px',
            position: 'relative',
            width: '100%',
            right: '0px',
            float: 'right',
            display: 'flex',
            justifyContent: 'flex-end'
        },

        select: {
            marginLeft: '3%',
            width: '10%'
        }
    }))
    const classes = useStyles();

    const myClients = props.myClients
    const group = myClients.group;
    const groupRange = `${group * 20 - 19} - ${(group === myClients.numOfGroups && myClients.clients.length % 20 > 0) ? ((group - 1) * 20) + myClients.clientsToDisplay.length % 20 : group * 20} `;

    const formerGroup = () => myClients.formerGroup();
    const nextGroup = () => myClients.nextGroup();
    const updateSearchChars = e => myClients.updateSearchChars(e.target.value);
    const changeCategory = e => myClients.changeCategory(e.target.value);

    return (
        <div className = {classes.searchBar}>
            <TextField label="Search" value = {myClients.searchChars} onChange = {updateSearchChars}/>

            <FormControl className = {classes.select}>
                <InputLabel id = 'name-select'>search by</InputLabel>
                <Select labelId = 'name-select' value = {myClients.searchCategory} onChange = {changeCategory}>
                <MenuItem value = 'Name'>Name</MenuItem>
                <MenuItem value = 'Country'>Country</MenuItem>
                <MenuItem value = 'Sold'>Show only Sold</MenuItem>
                <MenuItem value = 'Unsold'>Show only Unsold</MenuItem>
                </Select>
            </FormControl>

            <div className = {classes.stepsTwenty}>
                <i className = "fas fa-chevron-left" onClick = {formerGroup}></i>
                <span>{groupRange}</span>
                <i className = "fas fa-chevron-right" onClick = {nextGroup}></i>
            </div>
        </div>
    )
}))

export default SearchDiv;