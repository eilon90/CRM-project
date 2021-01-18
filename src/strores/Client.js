import {observable, makeObservable} from 'mobx';

export class Client {
    constructor(_id, firstName, lastName, email, firstContact, emailType, sold, owner, country){
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.firstContact = firstContact;
        this.emailType = emailType;
        this.sold = sold;
        this.owner = owner;
        this.country = country;

        makeObservable(this, {
            _id: observable,
            firstName: observable,
            lastName: observable,
            email: observable,
            firstContact: observable,
            emailType: observable,
            sold: observable,
            owner: observable,
            country: observable
        })
    }
}