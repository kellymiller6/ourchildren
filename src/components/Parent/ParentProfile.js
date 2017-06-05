import React, { Component } from 'react';
import { Link } from 'react-router'
import Card from '../Children/Card'

class ParentProfile extends Component {

  render(){
    return (
      <div className="ParentProfile">
        <h4>Your Foster Care and Adoption Workers</h4>
        {
          (this.props.workers).map((worker, index) =>{
            return (
              <Card key={index} objInfo={worker}/>
            );
          })
        }
        <Link to="/AddWorker"><button className="add-btn btn">Add Worker</button></Link>

        <h4>Approved Sitters</h4>
        {
          (this.props.sitters).map((sitter, index) =>{
            return (
              <Card key={index} objInfo={sitter}/>
            );
          })
        }

        <Link to="/AddSitter"><button className="add-btn btn">Add Sitter</button></Link>
      </div>
    );
  }
}

export default ParentProfile;
