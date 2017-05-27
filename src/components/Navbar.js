import React, { Component } from 'react';
import { Link } from 'react-router'


class Navbar extends Component {

  render() {
    let loginButton;
    let signup;
    let parentProfile;
    if (this.props.loggedin) {
      loginButton = <button className="btn" onClick={this.props.determinedlog}>Logout</button>;
      signup = "";
      parentProfile = <Link to="/parentprofile"><button className="btn">ParentProfile</button></Link>
    } else {
      loginButton = <Link to="/login"><button className="btn">login</button></Link>;
      signup = <Link to="/signup"><button className="btn">Sign up</button></Link>;
      parentProfile =""
    }
    return (
      <div className="Navbar">
        <Link to="/"><button className="btn">Home</button></Link>
        {loginButton}
        {signup}
        {parentProfile}
      </div>
    );
  }
}

export default Navbar;
