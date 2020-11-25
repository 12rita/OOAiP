import React, {Component} from 'react';
import Store from "src/components/Store";
import { observer} from 'mobx-react';
import { observable } from 'mobx';
import './SignUp.css';

@observer
class SignUp extends Component {
    // user = {
    //     login: '',
    //     password: ''
    // }
    @observable
    error = false;

    constructor(props) {
        super(props);
        this.state = {login: '', password: ''}

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        const type = event.target.id;
        if (type==='login')
        this.setState({login: event.target.value});
        else if (type ==='password')
            this.setState({password: event.target.value});

    }


    onClick = (event) => {
        event.preventDefault();
        this.error = false;
        if (!Store.users[this.state.login]){
            Store.users[this.state.login]=this.state.password;
        }

        else {
            this.error = true;
            console.log(Store.users);
        }
        console.log(this.error);



    };

    render() {
        return (
            <div className="wrapper">
                <div className="overlay">
                    <form id="form">
                        <label htmlFor="login">Придумайте логин:</label><input className={this.error ? 'error': null} value={this.state.login}
                                                                               onChange={this.handleChange} type="text"
                                                                               id="login" required/>
                        <label htmlFor="password">Придумайте пароль:</label> <input type="password" value={this.state.password} onChange={this.handleChange} id="password"
                                                                                    required/>
                        <button onClick={this.onClick}>Зарегестрироваться</button>

                    </form>

                </div>
            </div>
        );
    }

}

export default SignUp;