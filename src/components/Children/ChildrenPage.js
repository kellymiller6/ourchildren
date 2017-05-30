import React, { Component } from 'react';
import { Link } from 'react-router'
import { firebaseApp, ref } from '../../firebase/Firebase';
import ChildCard from './ChildCard'
var CryptoJS = require("crypto-js")


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
      // var plaintext = bytes.toString(CryptoJS.enc.Utf8)
      // console.log('children', snapshot.val());
        var thatstuff = snapshot.val()
        console.log('that', thatstuff);
        var plain = thatstuff.toString(CryptoJS.enc.Utf8)
        console.log('plain', plain);
        this.setState({children: plain});
      });
  }

  render(){
    return (
        <div className="ChildrenPage">
          <h4>All children will go here</h4>
          {
            Object.keys(this.state.children).map((child, index) =>{
            return (
                <ChildCard childInfo={this.state.children[child]}/>
            );
          })}
          <Link to="/addchild"><button className="btn">Add Child</button></Link>
        </div>
      );
  }
}


export default ChildrenPage;
