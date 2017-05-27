import React, { Component } from 'react';
import { Link } from 'react-router'
import { ref } from '../../firebase/Firebase';

class ParentProfile extends Component {
  constructor(){
    super()
    this.state = {
      profile: {users: {workerName: '', workerEmail:'', workerNumber:'', workerType: ''}}
    }
  }

  componentDidMount(){
    ref.on('value', snapshot => {
        this.setState({profile: snapshot.val()});
      });
  }
  render(){
    return (
      <div className="ParentProfile">
        <h4>All parent works and approved sitters will go here</h4>
        {console.log(this.state.profile.users.workerName)}
        {this.state.profile.users.workerName}
        {this.state.profile.users.workerNumber}
        {this.state.profile.users.workerEmail}
        {this.state.profile.users.workerType}
        <Link to="/AddWorker"><button className="btn">Add Worker</button></Link>
        <Link to="/AddSitter"><button className="btn">Add Sitter</button></Link>
      </div>
    );
  }
}

export default ParentProfile;
