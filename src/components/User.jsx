import { observable } from 'mobx';
export default class User {

    login = '';
    password = '';
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
}