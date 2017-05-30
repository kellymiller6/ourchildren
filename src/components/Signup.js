import React, { Component } from 'react';
import { Link } from 'react-router';
import { handleGoogle } from '../firebase/Firebase';


class Signup extends Component {



  render() {
    return (
      <div className="create-account">
        <h1>Create Account</h1>
          <div >
            <button className="btn btn-google" onClick={handleGoogle}>
              Sign Up with Google
            </button>

        	<p> <Link to="/login">Log In</Link></p>
        </div>
      </div>
    );
  }
}

export default Signup;
