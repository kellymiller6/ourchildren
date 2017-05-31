import React, { Component } from 'react';
import { handleSubmit } from '../../firebase/Firebase';


export default class AddChild extends Component {
  constructor (){
    super()
    this.state = {
      name: '',
      childBirthday:'',
      childArrivalDate:'',
      childInsurance:'',
    }
  }

  render(){
    return(
      <div className='add-child'>
        <form className='add-parent-info'>
          <input className='add-input'
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
                    childBirthday: e.target.value
                  })}
          />
          <input className='add-input'
                  type='text'
                  value={this.state.childArrivalDate}
                  placeholder='Arrival Date'
                  onChange={(e) => this.setState({
                    childArrivalDate: e.target.value
                  })}
          />
          <input className='add-input'
                  type='text'
                  value={this.state.childInsurance}
                  placeholder='insurance'
                  onChange={(e) => this.setState({
                    childInsurance: e.target.value
                  })}
          />

          <button type='submit'
              className="form submit"
              onClick={handleSubmit.bind(null, 'child', this.state, 'children')}>
              Add Child
            </button>
        </form>
      </div>
    )
  }
}
