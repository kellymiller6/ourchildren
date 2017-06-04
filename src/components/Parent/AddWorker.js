import React, { Component } from 'react';

export default class AddWorker extends Component {
  constructor (){
    super()
    this.state = {
      name: '',
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
                className='add-input name'
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
              onClick={()=>this.props.addWorker(this.state)}>
              Add Foster Care Specialist
            </button>
        </form>
      </div>
    )
  }
}
