import React, { Component } from 'react';

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
                    Phone: e.target.value
                  })}
          />
          <input
                  className='add-input'
                  type='text'
                  value={this.state.workerEmail}
                  placeholder='email'
                  onChange={(e) => this.setState({
                    Email: e.target.value
                  })}
          />
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
              onClick={()=>this.props.addWorker(this.state)}>
              Add Worker
            </button>
        </form>
      </div>
    )
  }
}
