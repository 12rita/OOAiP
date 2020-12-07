import * as React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import SignUp from "src/components/SignUp/SignUp.jsx";
import MainPage from "src/components/MainPage/MainPage.jsx";
import SignIn from "src/components/SignIn/SignIn.jsx";
import Body from "src/components/Body/Body.jsx";
import GlobalStore from "src/components/Store.jsx";




const Main = () => {
    let Store = new GlobalStore();
    return (

        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/signIn' render={() => (
                <SignIn store={Store}/>
            )}/>
            <Route path='/signUp' render={() => (
                <SignUp store={Store}/>
            )}/>
            <Route path='/body/:idUser' render={() => (
                <Body store={Store}/>
            )}/>
        </Switch>
    )

}


ReactDOM.render((
    <HashRouter>
        <Main />
    </HashRouter>),
    document.getElementById('root')
);
