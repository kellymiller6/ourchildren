import React, { Component } from 'react';
import firebaseApp from './firebase/Firebase';
import Navbar from './Navbar';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {loggedin: false};
  }
  componentWillMount(){
    let _this = this;
    firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        _this.setState({loggedin: true});
      } else {
        _this.setState({loggedin: false});
      }
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar loggedin={this.state.loggedin} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
