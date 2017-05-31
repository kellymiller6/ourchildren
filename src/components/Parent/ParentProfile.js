import React, { Component } from 'react';
import { Link } from 'react-router'
import { retrieveData } from '../../firebase/Firebase';
import Card from '../Children/Card'

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
              <Card key={index} objInfo={worker}/>
          );
        })}

        <h3>Approved Sitters</h3>
        {
          (this.state.sitters).map((sitter, index) =>{
          return (
              <Card key={index} objInfo={sitter}/>
          );
        })}

        <Link to="/AddWorker"><button className="btn">Add Worker</button></Link>
        <Link to="/AddSitter"><button className="btn">Add Sitter</button></Link>
      </div>
    );
  }
}

export default ParentProfile;
