import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Clients} from './strores/Clients';
import { Provider } from 'mobx-react';
import { Client } from './strores/Client';
import { PopUp } from './strores/PopUP';
import {ActionsUpdate} from './strores/ActionUpdate';
import {AddClient} from './strores/AddClient';


// const client1 = new Client('5b9f48a2a4a3d0220771e012', 'Tonia Kent', 'toniakent@imant.com', '2018-04-30T21:00:00.000Z', 'B', true, 'Shepherd Stone', 'France');
const myClients = new Clients();
const popUp = new PopUp();
const actionsUpdate = new ActionsUpdate();
const addClient = new AddClient();
// myClients.clients.push(client1);

const stores = {
  myClients,
  popUp,
  actionsUpdate,
  addClient
}

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
