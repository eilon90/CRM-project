import React, {Component} from 'react';
import TopOwners from './TopOwners';
import SalesCountry from './SalesCountry';
import SalesByDate from './SalesByDate';

class Charts extends Component {

    render() {
        return (
            <div style = {{display: 'flex', flexDirection: 'column', marginTop: '2%'}}>
                <div style = {{display: 'flex', justifyContent: 'space-around'}}>
                    <TopOwners/>
                    <SalesByDate/>
                </div>
                <SalesCountry/>
            </div>
        )
    }
}

export default Charts;