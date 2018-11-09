import React, { Component } from 'react';
import Fire from './config/fire';
import { Link } from 'react-router-dom';

class Signup extends Component{
    constructor (props){
        super(props);
        // this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);  
        this.signup = this.signup.bind(this);
        this.state={
            email:'',
            password:''
        }
    }
    signup(e){
        e.preventDefault();
        Fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((response) => {
            window.location = '/';
            console.log('Registration Successful',response.data);
        })
        .catch((error)=>{
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
                    <button type="submit" onClick={this.signup}>Sign up</button>
                    <Link to='/' >LOGIN</Link>
                    
                </form>
            </div> 
        );
    
    }
}

export default Signup;