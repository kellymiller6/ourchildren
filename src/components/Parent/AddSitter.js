import React, { Component } from 'react';
import { handleSubmit } from '../../firebase/Firebase';


export default class AddSitter extends Component {
  constructor (){
    super()
    this.state = {
      name: '',
      sitterNumber:'',
      sitterEmail:''
    }
  }

  render(){
    return(
      <div className='sitter'>
        <form className='add-sitter'>
          <h4> Approved Sitter </h4>
          <input
                className='add-input'
                type='text'
                value={this.state.name}
                placeholder='Name'
                onChange={(e) => this.setState({
                  name: e.target.value
                })}
          />
          <input
                  className='add-input'
                  type='text'
                  value={this.state.sitterNumber}
                  placeholder='Number'
                  onChange={(e) => this.setState({
                    sitterNumber: e.target.value
                  })}
          />
          <input
                  className='add-input'
                  type='text'
                  value={this.state.sitterEmail}
                  placeholder='email'
                  onChange={(e) => this.setState({
                    sitterEmail: e.target.value
                  })}
          />
          <button type='submit'
              className="form submit"
              onClick={handleSubmit.bind(null, 'sitters', this.state, 'parentprofile')}>
              Add Sitter
            </button>
        </form>
      </div>
    )
  }
}
