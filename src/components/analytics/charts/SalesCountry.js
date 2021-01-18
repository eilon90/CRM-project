import React, {Component, useEffect} from 'react';
import {observer, inject} from 'mobx-react';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';

const SalesCountry = inject('myClients')
(observer((props) => {

    return (
        <div id = "sales-country">
            <h2 className = "charts-details">Sales by Country</h2>
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
    )
}))

export default SalesCountry;