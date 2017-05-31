import React, { Component } from 'react';
import { Link } from 'react-router'
import { retrieveData } from '../../firebase/Firebase';
import SitterCard from './SitterCard'
import WorkerCard from './WorkerCard'

class ParentProfile extends Component {
  constructor(){
    super()
    this.state = {
      workers: [],
      sitters: []
    }

  }

  componentDidMount(){
    retrieveData.call(this, 'workers')
    retrieveData.call(this, 'sitters')
  }




  render(){
    return (
      <div className="ParentProfile">
        <h3>Parent Foster Specialist</h3>
        {
          (this.state.workers).map((worker, index) =>{
          return (
              <WorkerCard workerInfo={worker}/>
          );
        })}

        <h3>Approved Sitters</h3>
        {
          (this.state.sitters).map((sitter, index) =>{
          return (
              <SitterCard key={index} sitterInfo={sitter}/>
          );
        })}

        <Link to="/AddWorker"><button className="btn">Add Worker</button></Link>
        <Link to="/AddSitter"><button className="btn">Add Sitter</button></Link>
      </div>
    );
  }
}

export default ParentProfile;
