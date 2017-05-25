import React, { Component } from 'react';
import { Link } from 'react-router';
import * as firebase from 'firebase';
import { firebaseApp } from '../firebase/Firebase';


class Login extends Component {

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

          <p><Link to="/signup"> Sign Up</Link></p>

      </div>
    );
  }
}

export default Login;
