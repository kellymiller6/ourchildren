import React, { Component } from 'react';
import { Link } from 'react-router';
import { handleGoogle } from '../firebase/Firebase';


class Login extends Component {

  render() {
    return (
      <div className="Login">
        <h1>Login Screen</h1>

            <button className="btn " onClick={handleGoogle}>
              Sign in with Google
            </button>

          <p><Link to="/signup"> Sign Up</Link></p>

      </div>
    );
  }
}

export default Login;
