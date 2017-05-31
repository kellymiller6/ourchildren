import React, { Component } from 'react';
import { Link } from 'react-router'
import { retrieveData } from '../../firebase/Firebase';
import ChildCard from './ChildCard'


class ChildrenPage extends Component {
  constructor(){
    super()
    this.state = {
      children: []
    }
  }

  componentWillMount(){
    retrieveData.call(this, 'child')
  }
  render(){
    return (
        <div className="ChildrenPage">
          <h4>All children will go here</h4>
          {this.state.children.map((child,index) => {
            return(
                <ChildCard key={index} childInfo={child}/>
            )
          })}
          <Link to="/addchild"><button className="btn">Add Child</button></Link>
        </div>
      );
  }
}


export default ChildrenPage;
