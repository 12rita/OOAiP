import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import ChangePassword from "src/components/ChangePassword/ChangePassword.jsx";
import './Body.css';


class Body extends Component {
    store;

    constructor(props) {
        super(props);
        this.store = props.store;
        console.log(this.store);
        this.state = {exit: false, userLogin: location.hash.split('/').pop(), changePass: false, old: '', new: ''}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const type = event.target.id;
        if (type === 'login') {
            this.setState({old: event.target.value});

        } else if (type === 'password')
            this.setState({new: event.target.value});

    }


    changePassword =(event) => {
        event.preventDefault();
        this.setState({changePass: true});


    }

    exit = (event) => {
        event.preventDefault();
        this.setState({exit: true});


    };


    render() {
        return (
            <div className="wrapper">
                <div className="overlay">
                    <div className='imageWrapper'>
                        <h1>Добро пожаловать</h1>
                        <img src={'src/static/cat.jpg'} className={'cat'} alt={'cat'}/>
                        <button onClick={this.changePassword}>Сменить пароль</button>
                        <button onClick={this.exit}>Выйти</button>
                        {this.state.changePass ? <ChangePassword store={this.store} isOpen={this} login={this.state.userLogin}/> : null}

                        {this.state.exit ? <Redirect to={'/'}/> : null}


                    </div>

                </div>
            </div>
        );
    }

}

export default Body;