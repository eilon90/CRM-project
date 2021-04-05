import React, {Component} from 'react';
import { People, PersonAdd, Assessment } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';

class Home extends Component {

    render() {

        return (
            <div id = "home" style = {{display: 'flex', flexDirection: 'row', height: '80vh', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <div>
                    <Link to = 'clients' style={{textDecoration: 'none', color: '#eee'}}>
                        <People style = {{fontSize: '25vh', backgroundColor: 'rgb(231, 73, 73)', borderRadius: '20px'}}/>
                        <Typography variant = 'h3' style = {{textAlign: 'center', marginTop: '10%', color: 'rgb(231, 73, 73)', fontWeight: 'bold'}}>Clients</Typography>
                    </Link>
                </div>
                <div>
                    <Link to = 'clients' style={{textDecoration: 'none', color: '#eee'}}>
                        <PersonAdd style = {{fontSize: '25vh', backgroundColor: 'rgb(49, 216, 49)', borderRadius: '20px'}}/>
                        <Typography variant = 'h3' style = {{textAlign: 'center', marginTop: '10%', color: 'rgb(49, 216, 49)', fontWeight: 'bold'}}>Actions</Typography>
                    </Link>
                </div>
                <div>
                    <Link to = 'clients' style={{textDecoration: 'none', color: '#eee'}}>
                        <Assessment style = {{fontSize: '25vh', backgroundColor: 'rgb(40, 126, 238)', borderRadius: '20px'}}/>
                        <Typography variant = 'h3' style = {{textAlign: 'center', marginTop: '10%', color: 'rgb(40, 126, 238)', fontWeight: 'bold'}}>Analytics</Typography>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home;