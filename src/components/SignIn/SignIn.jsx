import * as React from 'react';
import './SignIn.css';
import {Link, Redirect} from "react-router-dom";
import validate from "src/components/validate";

class SignIn extends React.Component {
    store;

    constructor(props) {
        super(props);
        this.store = props.store;
        this.state = {login: '', password: '', errorLogin: false, errorPassword: false, redirect: false}

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

        this.setState({errorLogin: false, errorPassword: false})

        if (!this.store.users[this.state.login]) {
            this.setState({errorLogin: true})


        } else {

            const check = validate(this.store, this.state.password, this.state.login)
            if (!check) {
                this.setState({errorPassword: true});

            } else

                this.setState({redirect: true});
        }

    };



    render() {
        return (
            <div className="wrapper">
                <div className="overlay">
                    <form id="form">
                        <label htmlFor="login">Логин:</label>
                        <div className={this.state.errorLogin ? 'error login' : null}>
                            <input
                                // className={this.state.error ? 'error' : null}
                                style={{width: '392px'}}
                                value={this.state.login}
                                onChange={this.handleChange} type="text"
                                id="login" required/>
                        </div>

                        <label htmlFor="password">Пароль:</label>
                        <div className={this.state.errorPassword ? 'error password' : null}>
                            <input type="password"
                                   style={{width: '392px'}}
                                   value={this.state.password}
                                   onChange={this.handleChange}
                                   id="password"
                                   required/>
                        </div>
                        <button onClick={this.onClick}>Войти</button>
                        <button><Link to={'/'}>Назад</Link></button>
                        {this.state.redirect ? <Redirect to={`/body/${this.state.login}`}/> : null}

                    </form>

                </div>
            </div>
        );
    }

}

export default SignIn;