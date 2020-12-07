import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

import encryption from "src/components/encrypt";
import './ChangePassword.css';
import validate from "src/components/validate";


class ChangePassword extends Component {
    login;
    isOpen;
    store;

    constructor(props) {
        super(props);
        this.login = props.login;
        this.isOpen = props.isOpen;
        this.store=props.store;


        this.state = {old: '', new: '', errorOld: false, errorNew: false, redirect: false}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const type = event.target.id;
        if (type === 'login') {
            this.setState({old: event.target.value});

        } else if (type === 'password')
            this.setState({new: event.target.value});

    }

    onClick = (event) => {
        event.preventDefault();

        this.setState({errorOld: false, errorNew: false})
        const check = validate(this.store, this.state.old, this.login);

        const newPassword = encryption(this.state.new, this.login);
        if (!check) {
            this.setState({errorOld: true});


        } else {
            if (this.state.old === this.state.new)
                this.setState({errorNew: true})
            else {
                this.store.users[this.login].changePassword(newPassword);
                alert('Пароль успешно изменён');
                this.setState({redirect: true})
                this.isOpen.setState({changePass:false})
            }
        }

    };




    render() {
        return (
            <div className="wrapper">
                <div className="overlay">
                    <form id="form">

                        <label htmlFor="login">Введите текущий пароль:</label>
                        <div className={this.state.errorOld ? 'error old' : null}>
                            <input
                                // className={this.state.error ? 'error' : null}
                                style={{width: '392px'}}
                                value={this.state.old}
                                onChange={this.handleChange} type="password"
                                id="login" required/>
                        </div>
                        <label htmlFor="password">Придумайте новый пароль:</label>
                        <div className={this.state.errorNew ? 'error new' : null}>
                            <input type="password"
                                   value={this.state.new}
                                   style={{width: '392px'}}
                                   onChange={this.handleChange}
                                   id="password"
                                   required/>
                        </div>
                        <button onClick={this.onClick}>Сменить пароль</button>
                        {this.state.redirect ? <Redirect to={`/body/${this.login}`}/> : null}

                    </form>

                </div>
            </div>
        );
    }

}

export default ChangePassword;