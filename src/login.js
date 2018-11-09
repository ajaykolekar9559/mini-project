import React, { Component } from 'react';
import Fire from './config/fire';

import { Link } from 'react-router-dom';
class Login extends Component{
    constructor (props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);  
        // this.signup = this.signup.bind(this);
        this.state={
            email:'',
            password:''
        }
    }

    login(e){
        e.preventDefault();
        Fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((response) => {
            window.location = '/home';
            console.log('Login Succsessful',response.data);
                })
        .catch((error) => {
            console.log(error);
        });
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        return(
            <div className="col-md-6">
                <form>
                    <div className="form-group">
                        <label>Email Address--</label>
                        <input value={this.state.email} onChange={this.handleChange} type="text" name="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    
                    <div className="form-group">
                        <label>Password--</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="password" placeholder="Enter Password" />                        
                    </div>

                    <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>   
                    <Link to='/signup'>Signup</Link>
                </form>
            </div> 
        );
    }
}
export default Login;