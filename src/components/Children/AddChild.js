import React, { Component } from 'react';


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
          <input className='add-input name'
                type='text'
                value={this.state.name}
                placeholder='Name'
                onChange={(e) => this.setState({
                  name: e.target.value
                })}
          />
          <input className='add-input'
                  type='text'
                  value={this.state.childBirthday}
                  placeholder='Birthday'
                  onChange={(e) => this.setState({
                    Birthday: e.target.value
                  })}
          />
          <input className='add-input'
                  type='text'
                  value={this.state.childArrivalDate}
                  placeholder='Arrival Date'
                  onChange={(e) => this.setState({
                    Arrival: e.target.value
                  })}
          />
          <input className='add-input'
                  type='text'
                  value={this.state.childInsurance}
                  placeholder='Insurance'
                  onChange={(e) => this.setState({
                    Insurance: e.target.value
                  })}
          />
          <input className='add-input'
                  type='text'
                  value={this.state.childInsurance}
                  placeholder='Worker Name'
                  onChange={(e) => this.setState({
                    Worker_Name: e.target.value
                  })}
          />
          <input className='add-input'
                  type='text'
                  value={this.state.childInsurance}
                  placeholder='Worker Number'
                  onChange={(e) => this.setState({
                    Worker_Number: e.target.value
                  })}
          />
          <input className='add-input'
                  type='text'
                  value={this.state.childInsurance}
                  placeholder='Worker Email'
                  onChange={(e) => this.setState({
                    Worker_Email: e.target.value
                  })}
          />

          <button type='submit'
              className="form submit add-btn"
              onClick={()=>this.props.addChild(this.state)}>
              Add Child
            </button>
        </form>
      </div>
    )
  }
}
