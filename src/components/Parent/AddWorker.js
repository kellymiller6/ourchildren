import React, { Component } from 'react';
import { addObject } from '../../helpers/helper'

export default class AddWorker extends Component {
  constructor (){
    super()
    this.state = {
      name: '',
      Phone:'',
      Email:'',
      Type:''
    }
  }

  render(){
    return(
      <div className='worker'>
        <form className='add-info'>
        <label>Name:</label>
          <input
                className='add-input name'
                type='text'
                value={this.state.name}
                onChange={(e) => this.setState({
                  name: e.target.value
                })}
          />
          <label>Phone Number:</label>
          <input
                  className='add-input'
                  type='tel'
                  value={this.state.workerNumber}
                  placeholder='xxx-xxx-xxxx'
                  onChange={(e) => this.setState({
                    Phone: e.target.value
                  })}
          />
          <label>Email:</label>
          <input
                  className='add-input'
                  type='email'
                  value={this.state.workerEmail}
                  onChange={(e) => this.setState({
                    Email: e.target.value
                  })}
          />
          <label>Worker Type:</label>
          <input
                  className='add-input'
                  type='text'
                  value={this.state.workerType}
                  placeholder='Foster or Adoption?'
                  onChange={(e) => this.setState({
                    Type: e.target.value
                  })}
          />
        
          <button type='submit'
              className="form submit add-btn"
              onClick={()=>addObject(this.state, 'workers')}>
              Add Worker
            </button>
        </form>
      </div>
    )
  }
}
