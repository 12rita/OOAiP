import * as React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import SignUp from "src/components/SignUp/SignUp.jsx";
import MainPage from "src/components/MainPage/MainPage.jsx";
import SignIn from "src/components/SignIn/SignIn.jsx";



const Main = () => (

        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/signIn' component={SignIn}/>
            <Route path='/signUp' component={SignUp}/>
        </Switch>

)


ReactDOM.render((
    <HashRouter>
        <Main />
    </HashRouter>),
    document.getElementById('root')
);
