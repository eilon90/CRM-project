import React from 'react';
import {observer, inject} from 'mobx-react';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';
import { Typography } from '@material-ui/core';

const SalesCountry = inject('myClients')
(observer((props) => {

    return (
        <div style = {{marginTop: '2%', display: 'flex', justifyContent: 'center'}}>
            <div>
                <Typography variant = 'h5' style = {{fontWeight: 'bold', marginLeft: '10%'}}>Sales by Country</Typography>
                <ResponsiveContainer width={730} height={250} >
                    <BarChart width={730} height={250} data={props.myClients.salesCountry} barCategoryGap = "20%">
                        <CartesianGrid strokeDasharray="3" />
                        <XAxis type="category" dataKey="country"/>
                        <YAxis type="number"/>
                        <Tooltip />
                        <Bar dataKey="numOfSales" fill="#734" name = "sales"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}))

export default SalesCountry;