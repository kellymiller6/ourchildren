import React from 'react';
import { Link } from 'react-router'

const ParentProfile = () => {
    return (
      <div className="ParentProfile">
        <h4>All parent works and approved sitters will go here</h4>
        <Link to="/AddWorker"><button className="btn">Add Worker</button></Link>
        <Link to="/AddSitter"><button className="btn">Add Sitter</button></Link>
      </div>
    );
  }


export default ParentProfile;
