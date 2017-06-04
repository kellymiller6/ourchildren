import React from 'react';
import { Link } from 'react-router';
import { handleGoogle } from '../../firebase/Firebase';


const Login = () => {
  return (
    <div className="Login">
      <h4>Login</h4>
        <button className="add-btn" onClick={handleGoogle}>
          Sign in with Google
        </button>
        <p><Link className='link' to="/signup"> Create an Account</Link></p>
    </div>
  );
}


export default Login;
