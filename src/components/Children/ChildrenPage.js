//this will hold child cards
import React from 'react';
import { Link } from 'react-router'

const ChildrenPage = () => {
    return (
      <div className="ChildrenPage">
        <h4>All children will go here</h4>
        <Link to="/addchild"><button className="btn">Add Child</button></Link>
      </div>
    );
  }


export default ChildrenPage;
