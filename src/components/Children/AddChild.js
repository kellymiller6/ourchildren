import React, { Component } from 'react';
import { addObject } from '../../helpers/helper'

export default class AddChild extends Component {
  constructor (){
    super()
    this.state = {
      name: '',
      Birthday:'',
      Arrival:'',
      Insurance:'',
      Worker_Name: '',
      Worker_Number: '',
      Worker_Email: ''
    }
  }

  render(){
    return(
      <div className='add-child'>
        <form className='add-info'>
          <label>Name:</label>
          <input className='add-input name'
                type='text'
                value={this.state.name}
                onChange={(e) => this.setState({
                  name: e.target.value
                })}
          />
          <label>Birthday:</label>
          <input className='add-input'
                  type='date'
                  value={this.state.childBirthday}
                  onChange={(e) => this.setState({
                    Birthday: e.target.value
                  })}
          />
          <label>Arrival Date:</label>
          <input className='add-input'
                  type='date'
                  value={this.state.childArrivalDate}
                  onChange={(e) => this.setState({
                    Arrival: e.target.value
                  })}
          />
          <label>Insurance:</label>
          <input className='add-input'
                  type='text'
                  value={this.state.Insurance}
                  onChange={(e) => this.setState({
                    Insurance: e.target.value
                  })}
          />
          <label>Worker Name:</label>
          <input className='add-input'
                  type='text'
                  value={this.state.Worker_Name}
                  onChange={(e) => this.setState({
                    Worker_Name: e.target.value
                  })}
          />
          <label>Worker Number</label>
          <input className='add-input'
                  type='tel'
                  value={this.state.Worker_Number}
                  placeholder='xxx-xxx-xxxx'
                  onChange={(e) => this.setState({
                    Worker_Number: e.target.value
                  })}
          />
          <label>Worker Email</label>
          <input className='add-input'
                  type='email'
                  value={this.state.Worker_Email}
                  onChange={(e) => this.setState({
                    Worker_Email: e.target.value
                  })}
          />

          <button type='submit'
              className="form submit add-btn"
              onClick={()=>addObject(this.state, 'children')}>
              Add Child
            </button>
        </form>
      </div>
    )
  }
}
