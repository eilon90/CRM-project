import React, {useEffect} from 'react';
import {observer, inject} from 'mobx-react';
import {makeStyles} from '@material-ui/core';
import TableHeader from './TableHeader';
import TableRows from './TableRows';
import SearchDiv from './SearchDiv';
import UpdateClient from './UpdateClient';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';

const Clients = inject('myClients', 'popUp')
(observer((props) => {

    const useStyles = makeStyles(() => ({
        clients: {
            margin: '2vh 3vw'
        }
    }))
    const classes = useStyles();

    useEffect(async() => {
        props.popUp.popUpVisible = false;
        props.myClients.getClients();
    }, []);

    const clients = props.myClients.clients;


    return (
        <div className = {classes.clients}>
            <SearchDiv/>
            <Table>
                <TableHead>
                    <TableHeader/>
                </TableHead>
                <TableRows/>
            </Table>
            <UpdateClient/>
        </div>
    )
}))

export default Clients