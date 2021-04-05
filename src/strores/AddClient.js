import {observable, makeObservable, action} from 'mobx';
const axios = require('axios');
const validator = require('validator');
const moment = require('moment');

export class AddClient {
    constructor(){
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.owner = '';
        this.country = '';
        this.owners = [];
        this.countries = [];

        makeObservable(this, {
            firstName: observable,
            lastName: observable,
            email: observable,
            owner: observable,
            country: observable,
            owners: observable,
            countries: observable,
            getOwners: action,
            getCountries: action,
            changeFName: action,
            changeLName: action,
            changeEmail: action,
            chooseCountry: action,
            chooseOwner: action,
            addClient: action

        })
    }

    async getOwners() {
        const results = await axios.get('http://localhost:4000/owners');
        this.owners = results.data;
    }

    async getCountries() {
        const results = await axios.get('http://localhost:4000/countries');
        this.countries = results.data;
    }

    changeFName = firstName => this.firstName = firstName;

    changeLName = lastName => this.lastName = lastName;

    changeEmail = email => this.email = email;

    chooseCountry = id => this.country = parseInt(id);

    chooseOwner = id => this.owner = parseInt(id);

    async addClient() {

        if (!validator.isEmail(this.email)) {
            alert('Email adress is not valid');
            return;
        }

        const date = moment().format();

        const client = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            date: date,
            owner: this.owner,
            country: this.country
        }

        await axios.post('http://localhost:4000/client', client);

        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.owner = 0;
        this.country = 0;

    }
}

