import { observable } from 'mobx';
export default class Store {

    @observable
    static users = {};
}