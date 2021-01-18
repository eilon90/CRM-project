import {observable, makeObservable, action} from 'mobx';

export class PopUp {
    constructor() {
        this.popUpVisible = false;
        this.clientId = 0;
        this.nameToUpdate = '';
        this.surNameToUpdate = '';
        this.countryToUpdate = '';

        makeObservable(this, {
            popUpVisible: observable,
            nameToUpdate: observable,
            surNameToUpdate: observable,
            countryToUpdate: observable,
            popUpOn: action,
            popUpOff: action,
            changeName: action,
            changeSurname: action,
            changeCountry: action
        })
    }

    popUpOn = (id, name, surname, country) => {
        this.clientId = id;
        this.nameToUpdate = name;
        this.surNameToUpdate = surname;
        this.countryToUpdate = country;
        this.popUpVisible = true;
    } 

    popUpOff = () => {
        this.popUpVisible = false;
    }
    
    changeName = name => this.nameToUpdate = name;
    
    changeSurname = surname => this.surNameToUpdate = surname;

    changeCountry = country => this.countryToUpdate = country;
}