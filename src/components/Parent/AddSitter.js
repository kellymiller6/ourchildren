import React, { Component } from 'react';
import { addObject } from '../../helpers/helper'

export default class AddSitter extends Component {
  constructor (){
    super()
    this.state = {
      name: '',
      Phone:'',
      Email:''
    }
  }

  render(){
    return(
      <div className='sitter'>
        <form className='add-info'>
          <h4> Approved Sitter </h4>
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
                  value={this.state.sitterNumber}
                  placeholder='xxx-xxx-xxxx'
                  onChange={(e) => this.setState({
                    Phone: e.target.value
                  })}
          />
          <label>Email:</label>
          <input
                  className='add-input'
                  type='email'
                  value={this.state.sitterEmail}
                  onChange={(e) => this.setState({
                    Email: e.target.value
                  })}
          />
          <button type='submit'
              className="form submit add-btn"
              onClick={()=> addObject(this.state, 'sitters')}>
              Add Sitter
            </button>
        </form>
      </div>
    )
  }
}
