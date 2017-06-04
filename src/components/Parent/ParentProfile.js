import React, { Component } from 'react';
import { Link } from 'react-router'
import Card from '../Children/Card'

class ParentProfile extends Component {

  render(){
    return (
      <div className="ParentProfile">
        <h3>Parent Foster Specialist</h3>
        {
          (this.props.workers).map((worker, index) =>{
            return (
              <Card key={index} objInfo={worker}/>
            );
          })
        }

        <h3>Approved Sitters</h3>
        {
          (this.props.sitters).map((sitter, index) =>{
            return (
              <Card key={index} objInfo={sitter}/>
            );
          })
        }

        <Link to="/AddWorker"><button className="btn">Add Worker</button></Link>
        <Link to="/AddSitter"><button className="btn">Add Sitter</button></Link>
      </div>
    );
  }
}

export default ParentProfile;
