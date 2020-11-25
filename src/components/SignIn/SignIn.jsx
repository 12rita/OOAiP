import * as React from 'react';
import './SignIn.css';
class SignIn extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="overlay">
                    <form id="form">
                        <label htmlFor="login">Логин</label><input type="text" id="login" required />
                        <label htmlFor="password">Пароль</label> <input type="password" id="password" required />
                        <button>Войти</button>

                    </form>

                </div>
            </div>
        );
    }

}

export default SignIn;