import React, { Component } from 'react';
import { handleSubmit } from '../../firebase/Firebase';


export default class AddWorker extends Component {
  constructor (){
    super()
    this.state = {
      workerName: '',
      workerNumber:'',
      workerEmail:'',
      workerType:''
    }
  }

  render(){
    return(
      <div className='worker'>
        <form className='add-worker'>
          <input
                className='add-input'
                type='text'
                value={this.state.workerName}
                placeholder='Name'
                onChange={(e) => this.setState({
                  workerName: e.target.value
                })}
          />
          <input
                  className='add-input'
                  type='text'
                  value={this.state.workerNumber}
                  placeholder='Number'
                  onChange={(e) => this.setState({
                    workerNumber: e.target.value
                  })}
          />
          <input
                  className='add-input'
                  type='text'
                  value={this.state.workerEmail}
                  placeholder='email'
                  onChange={(e) => this.setState({
                    workerEmail: e.target.value
                  })}
          />
          <input
                  className='add-input'
                  type='text'
                  value={this.state.workerType}
                  placeholder='Foster or Adoption Worker?'
                  onChange={(e) => this.setState({
                    workerType: e.target.value
                  })}
          />
          <button type='submit'
              className="form submit"
              onClick={handleSubmit.bind(null, 'workers', this.state, 'parentprofile')}>
              Add Foster Care Specialist
            </button>
        </form>
      </div>
    )
  }
}
