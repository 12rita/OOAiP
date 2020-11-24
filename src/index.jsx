import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class MainPage extends React.Component {
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
ReactDOM.render(
    <MainPage />,
    document.getElementById('root')
);