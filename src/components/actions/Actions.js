import React, {useEffect} from 'react';
import Update from './Update';
import Addclient from './AddClient';
import { inject, observer } from 'mobx-react';
import {Divider, makeStyles} from '@material-ui/core'

const Actions = inject('actionsUpdate', 'addClient') 
(observer((props) => {

    useEffect(async() => {
        props.actionsUpdate.getClientAndOwners();
        props.actionsUpdate.getOwners();
        props.addClient.getOwners();
        props.addClient.getCountries();
    }, []);

    const useStyles = makeStyles(() => ({
        actions: {
            fontFamily: 'arial',
            marginLeft: '2%'
        }
    }))
    const classes = useStyles();

        return (
            <div className = {classes.actions}>
                <Update/>
                <Divider/>
                <Addclient/>
            </div>
        )
}))

export default Actions;