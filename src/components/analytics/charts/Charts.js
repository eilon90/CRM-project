import React, {Component} from 'react';
import TopOwmers from './TopOwners';
import SalesCountry from './SalesCountry';
import SalesByDate from './SalesByDate';
import Acquisition from './Acquisition';

class Charts extends Component {

    render() {
        return (
            <div>
                <TopOwmers/>
                <SalesCountry/>
                <SalesByDate/>
                <Acquisition/>
            </div>
        )
    }
}

export default Charts;