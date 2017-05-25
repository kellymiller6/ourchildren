import React, { Component } from 'react';
import { Link } from 'react-router';
import * as firebase from 'firebase';
import firebaseApp from '../firebase/Firebase';


class Signup extends Component {

   handleGoogle(e) {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebaseApp.auth().signInWithPopup(provider).then(function(result) {
      console.log('Google login success')
    }).catch(function(error) {
      var errorMessage = error.message;
      alert("Google "+errorMessage);
    });
  }

  render() {
    return (
      <div className="Signup">
        <h1>Sign up</h1>
          <div >
            <button className="btn btn-google" onClick={this.handleGoogle}>
              Sign in with Google
            </button>

        	<p> <Link to="/login">Log In</Link></p>
        </div>
      </div>
    );
  }
}

export default Signup;
