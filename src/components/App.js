import React, { Component } from 'react';
import { firebaseApp, signout, ref} from '../firebase/Firebase';
import Navbar from './Navbar';
import '../styles/app.css'
var CryptoJS = require("crypto-js")


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loggedin: false
      };
  }

  componentWillMount(){
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedin: true});
        this.props.fetchSitters()
        this.props.fetchWorkers()
        this.props.fetchChildren()
      } else {
        this.setState({loggedin: false});
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar loggedin={this.state.loggedin} determinedlog={signout} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
