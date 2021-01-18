import React, {Component} from 'react';
import NewClients from './NewClients';
import EmailsSent from './EmailsSent';
import Outstanding from './Outstanding';
import HotestCountry from './HotestCountry';

class Badges extends Component {

    render() {
        return (
            <div>
                <NewClients/>
                <EmailsSent/>
                <Outstanding/>
                <HotestCountry/>
            </div>
        )
    }
}

export default Badges;