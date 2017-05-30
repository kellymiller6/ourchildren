import React, { Component } from 'react';
import { Link } from 'react-router'
import { firebaseApp, ref } from '../../firebase/Firebase';
import ChildCard from './ChildCard'
var CryptoJS = require("crypto-js")


class ChildrenPage extends Component {
  constructor(){
    super()
    this.state = {
      children: []
    }
  }

  componentWillMount(){
    var user = firebaseApp.auth().currentUser;
    var uid;

    if (user != null) {
      uid = user.uid;
    }
    ref.child('users/'+uid+'/child').on('value', snapshot => {

        var snaps = snapshot.val()
        console.log('snapshot', snaps);
        var newArr = Object.keys(snaps).map((kid, index)=>{
          return(
             CryptoJS.AES.decrypt(snaps[kid], 'secret key 123')
          )
        })
        console.log('newArr', newArr);
        var newNewArray = newArr.map((kiddo,index)=>{
          return(
            JSON.parse(kiddo.toString(CryptoJS.enc.Utf8))
          )
        })
        console.log('newNewArray', newNewArray);
        this.setState({children: newNewArray});
      });
  }

  render(){
    return (
        <div className="ChildrenPage">
          <h4>All children will go here</h4>
          {this.state.children.map((child,index) => {
            return(
                <ChildCard childInfo={child}/>
            )
          })}
          <Link to="/addchild"><button className="btn">Add Child</button></Link>
        </div>
      );
  }
}


export default ChildrenPage;
