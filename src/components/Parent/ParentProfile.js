import React, { Component } from 'react';
import { Link } from 'react-router'
import { firebaseApp, ref } from '../../firebase/Firebase';

class ParentProfile extends Component {
  constructor(){
    super()
    this.state = {
      profile: {}
    }
  }

  componentDidMount(){
    var user = firebaseApp.auth().currentUser;
    var uid;

    if (user != null) {
      uid = user.uid;
    }
    ref.child('users/'+uid+'/workers').on('value', snapshot => {
      console.log('s', snapshot.val())
        this.setState({profile: snapshot.val()});
      });
  }


  render(){
    return (
      <div className="ParentProfile">
        <h3>All parent works and approved sitters will go here</h3>

        <h4>{this.state.profile.workerName}</h4>
        <p>{this.state.profile.workerNumber}</p>
        <p>{this.state.profile.workerEmail}</p>
        <p>{this.state.profile.workerType}</p>

        <Link to="/AddWorker"><button className="btn">Add Worker</button></Link>
        <Link to="/AddSitter"><button className="btn">Add Sitter</button></Link>
      </div>
    );
  }
}

export default ParentProfile;
