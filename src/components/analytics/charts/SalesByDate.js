import React, {Component, useEffect} from 'react';
import {observer, inject} from 'mobx-react';
import {LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line}  from 'recharts';
const moment = require('moment');

const SalesByDate = inject('myClients')
(observer((props) => {

    const monthDays = () => {
        const dates = []
        for (let i = 30; i > 0; i--) {
            const date = moment().subtract(i, 'days').format('MMM-DD');
            dates.push(date);
        }
        return dates;
    }

    return (
        <div id = "sales-by-date">
            <button onClick = {() => console.log(monthDays())}></button>
            <h2 className = "charts-details">Sales Since {moment().subtract(30, 'days').format('MMM-DD')}</h2>
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