import React, { Component } from 'react';
import { Link } from 'react-router'
import { firebaseApp, ref } from '../../firebase/Firebase';
import SitterCard from './SitterCard'
import WorkerCard from './WorkerCard'

class ParentProfile extends Component {
  constructor(){
    super()
    this.state = {
      workers: {},
      sitters: {}
    }
  }

  componentDidMount(){
    var user = firebaseApp.auth().currentUser;
    var uid;

    if (user != null) {
      uid = user.uid;
    }
    ref.child('users/'+uid+'/workers').on('value', snapshot => {
        this.setState({workers: snapshot.val()});
      });
    ref.child('users/'+uid+'/sitters').on('value', snapshot => {
        this.setState({sitters: snapshot.val()});
      });
  }


  render(){
    return (
      <div className="ParentProfile">
        <h3>Parent Foster Specialist</h3>
        {
          Object.keys(this.state.workers).map((worker, index) =>{
          return (
              <WorkerCard workerInfo={this.state.workers[worker]}/>
          );
        })}

        <h3>Approved Sitters</h3>
        {
          Object.keys(this.state.sitters).map((sitter, index) =>{
          return (
              <SitterCard sitterInfo={this.state.sitters[sitter]}/>
          );
        })}

        <Link to="/AddWorker"><button className="btn">Add Worker</button></Link>
        <Link to="/AddSitter"><button className="btn">Add Sitter</button></Link>
      </div>
    );
  }
}

export default ParentProfile;
