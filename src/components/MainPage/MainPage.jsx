import * as React from 'react';
import './MainPage.css';

import {Link} from 'react-router-dom';
export class  MainPage extends React.Component{
    render() {
        return (
            <div className="wrapper">
                <div className="overlay">
                    <div className='route'>
                        <p>У вас уже есть учетная запись?</p>
                        <button><Link to={'/signIn'}>Войти</Link> </button>
                        <p>Вы здесь впервые?</p>
                        <button><Link to={'/signUp'}>Зарегестрироваться</Link> </button>

                    </div>

                </div>
            </div>
        );
    }

}
export default MainPage;