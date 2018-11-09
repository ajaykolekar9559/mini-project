import Fire from './config/fire';
import Login from './login';
import Home from './home';
import  Signup from './signup';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


class App extends Component{
    constructor (props){
        super(props);

        this.state={
            user:{},
        }
    }

    componentDidMount(){
        this.authListener();
    }
    authListener()  {
        Fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
            else{
                this.setState({ user : null })
            }
        });
    }
    
        render(){

            return(
                <div className="App">
                    <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/signup' component={Signup}/>
                </Switch>
                </div>
            );
        }
}

export default App;