import React, { Component } from 'react';
import { Link } from 'react-router';
import * as firebase from 'firebase';
import firebaseApp from '../firebase/Firebase';
import isEmail from 'validator/lib/isEmail';

class Login extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
				email: "",
				password:""
			};

    	this.handleEmailChange = this.handleEmailChange.bind(this)
    	this.handlePasswordChange = this.handlePasswordChange.bind(this)
    	this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
   handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
	handleSubmit(e) {
	    e.preventDefault();
	    var email = this.state.email;
	    var password = this.state.password;
      if(isEmail(email)){
  	    firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    		  var errorMessage = error.message;
    		  alert(errorMessage)
    		});
      }else{
        alert("Email Address in not valid");
      }
  }

   handleGoogle(e) {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebaseApp.auth().signInWithPopup(provider).then(function(result) {
      console.log('Google login success')
    }).catch(function(error) {
      var errorMessage = error.message;
      alert("Google error "+ errorMessage);
    });
  }
  render() {
    return (
      <div className="Login">
        <h1>Login Screen</h1>

            <button className="btn " onClick={this.handleGoogle}>
              Sign in with Google
            </button>

          <form onSubmit={this.handleSubmit}>
          	<input type="text" className="form" value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter Email" />
          	<input type="password" className="form" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Enter Password" /><br/>
          	<button type="submit" className="btn btn-default">Submit</button>
          </form>
          <p><Link to="/signup"> Sign Up</Link></p>

      </div>
    );
  }
}

export default Login;
