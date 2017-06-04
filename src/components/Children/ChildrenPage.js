import React, { Component } from 'react';
import { Link } from 'react-router'
import Card from './Card'

class ChildrenPage extends Component {
  render(){
    return (
        <div className="ChildrenPage">
          <h4>All children will go here</h4>
          {
            this.props.children.map((child, index) => {
            return(
                <Card key={index} objInfo={child}/>
            )
          })}
          <Link to="/addchild"><button className="btn">Add Child</button></Link>
        </div>
      );
  }
}


export default ChildrenPage;
