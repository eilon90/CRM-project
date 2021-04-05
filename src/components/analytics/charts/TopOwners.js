import React from 'react';
import {observer, inject} from 'mobx-react';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';
import { Typography } from '@material-ui/core';

const TopOwners = inject('myClients')
(observer((props) => {

    return (
        <div id = "top-owners">
            <Typography variant = 'h5' style = {{fontWeight: 'bold', marginLeft: '10%'}}>Top Employees</Typography>
            <ResponsiveContainer width={730} height={250} >
                <BarChart width={730} height={250} data={props.myClients.topOwners} layout = "vertical" barCategoryGap = "35%">
                    <CartesianGrid strokeDasharray="3" />
                    <XAxis type="number">
                    <Label value = "Sales" offset = {-5} position="insideBottom"/>    
                    </XAxis> 
                    <YAxis type="category" width={50} dataKey="owner"/>
                    <Tooltip />
                    <Bar dataKey="numOfClients" fill="#8884d8" layout = "vertical" name = "sales" strokeWidth = "4"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}))

export default TopOwners;