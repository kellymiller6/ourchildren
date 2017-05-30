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
        var snaps = snapshot.val()
        console.log('snapshot', snaps);
        var bytes  = CryptoJS.AES.decrypt(snaps, 'secret key 123');
        console.log('bytes', bytes);
        var plaintext =JSON.parse( bytes.toString(CryptoJS.enc.Utf8));

        console.log('plain', plaintext)
        this.setState({children: plaintext});
      });
  }

  render(){
    return (
        <div className="ChildrenPage">
          <h4>All children will go here</h4>


                <ChildCard childInfo={this.state.children}/>

          <Link to="/addchild"><button className="btn">Add Child</button></Link>
        </div>
      );
  }
}


export default ChildrenPage;
