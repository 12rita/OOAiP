import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";

import User from  'src/components/User';

import './SignUp.css';
import encryption from "src/components/encrypt";


class SignUp extends Component {
    store;

    constructor(props) {
        super(props);
        this.store = props.store;
        this.state = {login: '', password: '', error: false, redirect: false}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const type = event.target.id;
        if (type === 'login') {
            this.setState({login: event.target.value});

        } else if (type === 'password')
            this.setState({password: event.target.value});

    }

    onClick = (event) => {
        event.preventDefault();

        this.setState({error: false})
        if (!this.store.users[this.state.login]) {
            const encryptedPassword = encryption(this.state.password, this.state.login);
            this.store.users[this.state.login] = new User(this.state.login, encryptedPassword);
            this.setState({redirect: true});

        } else {
            this.setState({error: true})
        }

    };



    render() {
        return (
            <div className="wrapper">
                <div className="overlay">
                    <form id="form">

                        <label htmlFor="login">Придумайте логин:</label>
                        <div className={this.state.error ? 'error' : null}>
                        <input
                        // className={this.state.error ? 'error' : null}
                            style={{width:'392px'}}
                        value={this.state.login}
                        onChange={this.handleChange} type="text"
                        id="login" required/>
                        </div>
                        <label htmlFor="password">Придумайте пароль:</label> <input type="password"
                                                                                    value={this.state.password}
                                                                                    onChange={this.handleChange}
                                                                                    id="password"
                                                                                    required/>
                        <button onClick={this.onClick}>Зарегестрироваться</button>
                        <button><Link to={'/'}>Назад</Link></button>
                        {this.state.redirect ? <Redirect to={`/body/${this.state.login}`} /> : null}

                    </form>

                </div>
            </div>
        );
    }

}

export default SignUp;