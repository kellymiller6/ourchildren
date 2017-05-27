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
      console.log('cs', snapshot.val())
        this.setState({children: snapshot.val()});
      });
  }

  render(){
    return (
        <div className="ChildrenPage">
          <h4>All children will go here</h4>
          {
            Object.keys(this.state.children).map((child, index) =>{
            return (
              <div>
                <p>{this.state.children[child].childName}</p>
                <p>{this.state.children[child].childBirthday}</p>
                <p>{this.state.children[child].childArrivalDate}</p>
                <p>{this.state.children[child].childInsurance}</p>
              </div>
            );
          })}
          <Link to="/addchild"><button className="btn">Add Child</button></Link>
        </div>
      );
  }
}


export default ChildrenPage;
