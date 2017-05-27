import React, { Component } from 'react';
import { Link } from 'react-router'
import { firebaseApp, ref } from '../../firebase/Firebase';

class ChildrenPage extends Component {
  constructor(){
    super()
    this.state = {
      children: {}
    }
  }

  componentWillMount(){
    var user = firebaseApp.auth().currentUser;
    var uid;

    if (user != null) {
      uid = user.uid;
    }
    ref.child('users/'+uid+'/child').on('value', snapshot => {
        this.setState({children: snapshot.val()});
      });
  }

  render(){
    return (
        <div className="ChildrenPage">
          <h4>All children will go here</h4>
          {console.log(this.state.children)}
          <Link to="/addchild"><button className="btn">Add Child</button></Link>
        </div>
      );
  }
}


export default ChildrenPage;
