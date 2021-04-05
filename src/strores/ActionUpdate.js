import {observable, makeObservable, action} from 'mobx';
const axios = require('axios');

export class ActionsUpdate {
    constructor() {
        this.dataToUpdate = [];
        this.clientId = 0;
        this.owners = [];
        this.ownerToUpdate = '';
        this.mailToSend = '';

        makeObservable(this, {
            dataToUpdate: observable,
            clientId: observable,
            owners: observable,
            ownerToUpdate: observable,
            mailToSend: observable,
            getClientAndOwners: action,
            chooseClient: action,
            getOwners: action,
            chooseOwner: action,
            chooseMail: action,
            changeOwner: action,
            sendMail: action,
            declare: action
        }) 
    }

    async getClientAndOwners() {
        const results = await axios.get('http://localhost:4000/clients_owners');
        this.dataToUpdate = results.data;
    }

    async getOwners() {
        const results = await axios.get('http://localhost:4000/owners');
        this.owners = results.data;
    }

    chooseClient = clientId => this.clientId = clientId;

    chooseOwner = id => this.ownerToUpdate = parseInt(id);

    chooseMail(type) {
        switch (type) {
            case 'A': this.mailToSend = 1; break;
            case 'B': this.mailToSend = 2; break;
            case 'C': this.mailToSend = 3; break;
            case 'D': this.mailToSend = 4; break;
        }
    } 

    async changeOwner() {
        const clientToUpdate = this.dataToUpdate.find(d => d.id === this.clientId);
        clientToUpdate.owner = this.owners.find(o => o.o_id === this.ownerToUpdate).name;
        this.dataToUpdate.splice(this.dataToUpdate.indexOf(this.dataToUpdate.find(d => d.id === this.clientId)), 1, clientToUpdate);
        await axios.put(`http://localhost:4000/owner/${this.clientId}/${this.ownerToUpdate}`);
    }

    async sendMail() {
        await axios.put(`http://localhost:4000/email_type/${this.clientId}/${this.mailToSend}`);
    }

    async declare() {
        await axios.put(`http://localhost:4000/sold/${this.clientId}`);
    }
}