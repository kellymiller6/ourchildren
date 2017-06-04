import React, { Component } from 'react';
import { Link } from 'react-router'

class Navbar extends Component {
  render() {
    let loginButton;
    let signup;
    let parentProfile;
    let children;
    if (this.props.loggedin) {
      loginButton = <button className="btn" onClick={this.props.determinedlog}>Logout</button>;
      signup = "";
      parentProfile = <Link to="/parentprofile" ><button className="btn">Parent</button></Link>
      children = <Link to="/children"><button className="btn">Children</button></Link>
    } else {
      loginButton = <Link to="/login"><button className="btn">login</button></Link>;
      signup = <Link to="/signup"><button className="btn">Sign up</button></Link>;
      parentProfile =""
      children =""
    }
    return (
      <div className="Navbar">
        <Link className='home-link' to="/"><button className="btn">Home</button></Link>
        {loginButton}
        {signup}
        {parentProfile}
        {children}
      </div>
    );
  }
}

export default Navbar;
