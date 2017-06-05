import React, { Component } from 'react';
import { Link } from 'react-router'

class Navbar extends Component {
  render() {
    let loginButton;
    let signup;
    let parentProfile;
    let children;
    if (this.props.loggedin) {
      loginButton = <button className="log-btn btn" onClick={this.props.determinedlog}>Logout</button>;
      signup = "";
      parentProfile = <Link activeClassName="active" to="/parentprofile" ><button className="nav-btn btn">Parent</button></Link>
      children = <Link to="/children"><button className="nav-btn btn">Children</button></Link>
    } else {
      loginButton = <Link to="/login"><button className="nav-btn btn">Login</button></Link>;
      signup = <Link to="/signup"><button className="nav-btn btn">Sign up</button></Link>;
      parentProfile =""
      children =""
    }
    return (
      <div className="Navbar">
        <Link className='home-link' to="/"><button className="nav-btn btn">Home</button></Link>
        {signup}
        {parentProfile}
        {children}
        {loginButton}
      </div>
    );
  }
}

export default Navbar;
