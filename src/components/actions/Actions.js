import React, {Component, useEffect} from 'react';
import Update from './Update';
import Addclient from './AddClient';
import { inject, observer } from 'mobx-react';

const Actions = inject('actionsUpdate', 'addClient') 
(observer((props) => {

    useEffect(async() => {
        props.actionsUpdate.getClientAndOwners();
        props.actionsUpdate.getOwners();
        props.addClient.getOwners();
        props.addClient.getCountries();
    }, []);


        return (
            <div id = "actions">
                <Update/>
                <Addclient/>
            </div>
        )
}))

export default Actions;