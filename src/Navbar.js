import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import firebaseApp from './firebase/Firebase';

class Navbar extends Component {
  constructor(props) {
      super(props);

      this.signout = this.signout.bind(this);
  }
  signout(){
    firebaseApp.auth().signOut().then(function() {
      console.log("signed out");
      browserHistory.push('/login');
    }, function(error) {
      console.log("signouterror");
    });
  }
  render() {
    var loginButton;
    var signup;
    if (this.props.loggedin) {
      loginButton = <button className="btn" onClick={this.signout}>Logout</button>;
      signup = "";
    } else {
      loginButton = <Link to="/login"><button className="btn">login</button></Link>;
      signup = <Link to="/signup"><button className="btn">Sign up</button></Link>;
    }
    return (
      <div className="Navbar">
        <Link to="/"><button className="btn">Home</button></Link>
        {loginButton}
        {signup}
      </div>
    );
  }
}

export default Navbar;
