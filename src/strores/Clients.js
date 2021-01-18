import {makeObservable, observable, action, computed} from 'mobx';
// import { OBSERVABLE_SHALLOW } from 'mobx/dist/internal';
import {Client} from './Client';
const axios = require ('axios');
const moment = require('moment');

export class Clients {
    constructor() {
        this.clients = [];
        this.group = 1;

        makeObservable(this, {
            clients: observable,
            group: observable,
            addClient: action,
            getClients: action,
            nextGroup: action,
            formerGroup: action,
            updateClient: action,
            numOfGroups: computed,
            yearClients: computed,
            monthClients: computed,
            emailsSent: computed,
            outstanding: computed,
            hotestCountry: computed,
            topOwners: computed,
            salesCountry: computed,
            monthSales: computed,
            acquisition: computed
        })
    }

    addClient(_id, firstName, lastName, email, firstContact, emailType, sold, owner, country) {
        const client = new Client(_id, firstName, lastName, email, firstContact, emailType, sold, owner, country);
        this.clients.push(client);
    }

    async getClients(){
        const clientsList = await axios.get('http://localhost:4000/dataList');
        const newClients =  clientsList.data.map(c => new Client(c.id, c.firstName, c.lastName, c.email, c.firstContact, c.emailType, c.sold, c.owner, c.country));
        this.clients = newClients;
    }
    
    nextGroup() {
        if (this.group < this.numOfGroups) {this.group++}
    } 

    formerGroup() {
        if (this.group > 1) {this.group--}
    }
    
    async updateClient(client) {
        const clientToUpdate = this.clients.find(c => c._id === client.id);
        clientToUpdate.firstName = client.firstName;
        clientToUpdate.lastName = client.lastName;
        clientToUpdate.country = client.country;
        this.clients.splice(this.clients.indexOf(this.clients.find(c => c._id === client.id)), 1, clientToUpdate);
        await axios.put(`http://localhost:4000/client/${client.id}/${client.firstName}/${client.lastName}/${client.country}`);
    }

    get numOfGroups() {
        return this.clients.length % 20 === 0 ? this.clients.length / 20 : Math.floor(this.clients.length / 20) + 1;
    }

    get yearClients() {
        const yClients = this.clients.filter(c => moment(c.firstContact).format('YYYY') === moment().format('YYYY'));
        return yClients.length;
    }

    get monthClients() {
        const yClients = this.clients.filter(c => moment(c.firstContact).format('YYYY') === moment().format('YYYY'));
        const mClients = yClients.filter(y => moment(y.firstContact).format('MM') === moment().format('MM'));
        return mClients.length;
    }

    get emailsSent() {
        const eSent = this.clients.filter(c => c.emailType < 5);
        return eSent.length;
    }

    get outstanding() {
        const OS = this.clients.filter(c => c.sold === 0);
        return OS.length;
    }

    get hotestCountry() {
        const soldClients = this.clients.filter(c => c.sold === 1);
        const soldByCountries = Object.values(soldClients.reduce(function(groups, item) {
              const val = item['country']
              groups[val] = groups[val] || []
              groups[val].push(item)
              return groups
            }, {}))
        const countriesArr = soldByCountries.map(s => {
            const obj = {
                country: s[0].country,
                numOfClients: s.length
            }
            return obj;
        })
        countriesArr.sort(function (a, b) {
            return b.numOfClients - a.numOfClients;
        })
        const hottestCountries = [countriesArr[0]];
        if (countriesArr[0] && countriesArr[1].numOfClients === countriesArr[0].numOfClients) {
            let n = 1;
            while (countriesArr[n].numOfClients === countriesArr[1].numOfClients) {
                hottestCountries.push(countriesArr[n]);
                n++;
            }
        }
        return hottestCountries;
    }

    get topOwners() {
        const soldClients = this.clients.filter(c => c.sold === 1);
        const soldByOwners = Object.values(soldClients.reduce(function(groups, item) {
              const val = item['owner']
              groups[val] = groups[val] || []
              groups[val].push(item)
              return groups
            }, {}))
        const ownersArr = soldByOwners.map(s => {
            const obj = {
                owner: s[0].owner.split(' ')[0],
                numOfClients: s.length
            }
            return obj;
        })
        ownersArr.sort(function (a, b) {
            return b.numOfClients - a.numOfClients;
        })
        const topOwners = [ownersArr[0], ownersArr[1], ownersArr[2]];  
        if (ownersArr[3] && ownersArr[3].numOfClients === ownersArr[2].numOfClients) {
            let n = 3;
            while (ownersArr[n].numOfClients === ownersArr[3].numOfClients) {
                topOwners.push(ownersArr[n]);
                n++;
            }
        }
        return topOwners;
    }

    get salesCountry() {
        const soldClients = this.clients.filter(c => c.sold === 1);
        const soldByCountries = Object.values(soldClients.reduce(function(groups, item) {
              const val = item['country']
              groups[val] = groups[val] || []
              groups[val].push(item)
              return groups
            }, {}))
        const countriesArr = soldByCountries.map(s => {
            const obj = {
                country: s[0].country,
                numOfSales: s.length
            }
            return obj;
        })
        return countriesArr;
    }

    get monthSales() {
        const soldClients = this.clients.filter(c => c.sold === 1);
        const monthSales = soldClients.filter(s => moment(s.firstContact) > moment().subtract(30, 'days'));
        monthSales.forEach(m => m.firstContact = moment(m.firstContact).format('MMM-DD'));
        const salesByDays = Object.values(monthSales.reduce(function(groups, item) {
            const val = item['firstContact']
            groups[val] = groups[val] || []
            groups[val].push(item)
            return groups
        }, {}))
        const datesArr = salesByDays.map(s => {
            const obj = {
                date: s[0].firstContact,
                numOfSales: s.length
            }
            return obj;
        })
        datesArr.push({date: 'Jan-03', numOfSales: 4}, {date: 'Jan-01', numOfSales: 2}, {date: 'Dec-27', numOfSales: 5}, {date: 'Dec-16', numOfSales: 3}); //"fake" data
        datesArr.sort(function (a, b) {
            return moment(b.numOfClients) - moment(a.numOfClients);
        })
        return datesArr.reverse();
    }

    get acquisition() {
        const periods = {
            lastMonth: [],
            twoToSix: [],
            sixToTwelve: [],
            moreThanYear: []
        }
        this.clients.forEach(c => {
            if (moment(c.firstContact) > moment().subtract(30, 'days')) {periods.lastMonth.push(c)}
            else if (moment(c.firstContact) > moment().subtract(6, 'months')) {periods.twoToSix.push(c)}
            else if (moment(c.firstContact) > moment().subtract(12, 'months')) {periods.sixToTwelve.push(c)}
            else {periods.moreThanYear.push(c)}
        })
        const periodsArr = Object.keys(periods).map(p => {return {period: p, acquisitions: periods[p].length}})
        return(periodsArr);
    }
}