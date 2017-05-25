import React, { Component } from 'react';
import firebaseApp from './firebase/Firebase';
import Navbar from './Navbar';
import Home from './Home';


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
      } else {
        this.setState({loggedin: false});
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar loggedin={this.state.loggedin} />
        <Home />

      </div>
    );
  }
}

export default App;
