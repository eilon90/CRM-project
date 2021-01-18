import React, {Component, useEffect} from 'react';
import {observer, inject} from 'mobx-react';
import {ResponsiveContainer, PieChart, Pie, Cell} from 'recharts';

const Acquisition = inject('myClients')
(observer((props) => {

    return (
        <div id = "acquisition">
            <h2 className = "charts-details">client Acquisition</h2>
            <ResponsiveContainer>
                <PieChart width={730} height={250}>
                    <Pie data={props.myClients.acquisition} dataKey="acquisitions" nameKey="period" cx="50%" cy="50%" outerRadius={50} fill="#8884d8">
                        {props.myClients.acquisition.map((entry, index) => <Cell key={`cell-${index}`}/>)}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}))

export default Acquisition;