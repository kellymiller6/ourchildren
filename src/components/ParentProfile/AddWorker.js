import React, { Component } from 'react';

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

  handleSubmit(e) {
  e.preventDefault();
  //add to data base
  }



  render(){
    return(
      <div className='add-fcs'>
        <form className='add-parent-info'>
          <h4> Foster Care Specialist info</h4>
          <input type='text'
                value={this.state.workerName}
                placeholder='Name'
                onChange={(e) => this.setState({
                  workerName: e.target.value
                })}
          />
          <input type='text'
                  value={this.state.workerNumber}
                  placeholder='Number'
                  onChange={(e) => this.setState({
                    workerNumber: e.target.value
                  })}
          />
          <input type='text'
                  value={this.state.workerEmail}
                  placeholder='email'
                  onChange={(e) => this.setState({
                    workerEmail: e.target.value
                  })}
          />
          <input type='text'
                  value={this.state.workerType}
                  placeholder='Foster or Adoption Worker?'
                  onChange={(e) => this.setState({
                    workerType: e.target.value
                  })}
          />
          <button type='submit'
              className="form submit"
              onClick={(e) => this.handleSubmit(e)}>
              Add Foster Care Specialist
            </button>
        </form>
      </div>
    )
  }
}
