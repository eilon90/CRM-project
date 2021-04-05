import React from 'react';
import {observer, inject} from 'mobx-react';
import {LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line}  from 'recharts';
import { Typography } from '@material-ui/core';
const moment = require('moment');

const SalesByDate = inject('myClients')
(observer((props) => {

    return (
        <div id = "sales-by-date">
                <Typography variant = 'h5' style = {{fontWeight: 'bold', marginLeft: '10%'}}>Sales Since {moment().subtract(30, 'days').format('MMM-DD')}</Typography>
                <LineChart width={730} height={250} data={props.myClients.monthSales} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3" />
                    <XAxis dataKey = "date"/>
                    <YAxis type = "number"/>
                    <Tooltip />
                    <Line type="monotone" dataKey = "numOfSales" stroke="#8884d8" name = "sales"/>
                </LineChart>
        </div>
    )
}))

export default SalesByDate;