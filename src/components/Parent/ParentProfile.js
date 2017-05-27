import React, { Component } from 'react';
import { Link } from 'react-router'
import { firebaseApp, ref } from '../../firebase/Firebase';

class ParentProfile extends Component {
  constructor(){
    super()
    this.state = {
      profile: {workerName: '', workerEmail:'', workerNumber:'', workerType: ''}
    }
  }

  componentDidMount(){
    var user = firebaseApp.auth().currentUser;
    var uid;

    if (user != null) {
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
                       // you have one. Use User.getToken() instead.
    }
    ref.child('users/'+uid+'/workers').on('value', snapshot => {
      console.log('s', snapshot.val())
        this.setState({profile: snapshot.val()});
      });
  }

  render(){
    return (
      <div className="ParentProfile">
        <h4>All parent works and approved sitters will go here</h4>
        {console.log(this.state.profile)}
        {this.state.profile.workerName}
        {this.state.profile.workerNumber}
        {this.state.profile.workerEmail}
        {this.state.profile.workerType}
        <Link to="/AddWorker"><button className="btn">Add Worker</button></Link>
        <Link to="/AddSitter"><button className="btn">Add Sitter</button></Link>
      </div>
    );
  }
}

export default ParentProfile;
