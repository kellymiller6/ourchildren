import React from 'react';
import { Link } from 'react-router';
import { handleGoogle } from '../../firebase/Firebase';

const Signup = () => {
  return (
    <div className="create-account">
      <h4>Create Account</h4>
        <div >
          <button className="btn btn-google add-btn" onClick={handleGoogle}>
            Sign Up with Google
          </button>

      	<p> <Link className='link' to="/login">Already have an account? Log In!</Link></p>
      </div>
    </div>
  );
}

export default Signup;
