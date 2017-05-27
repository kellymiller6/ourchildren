import React, { Component } from 'react';

export default class AddChild extends Component {
  constructor (){
    super()
    this.state = {
      childName: '',
      childBirthday:'',
      childArrivalDate:'',
      childInsurance:''
    }
  }

  handleSubmit(e) {
  e.preventDefault();
  //add to data base
  }



  render(){
    return(
      <div className='add-child'>
        <form className='add-parent-info'>
          <input type='text'
                value={this.state.childName}
                placeholder='Name'
                onChange={(e) => this.setState({
                  childName: e.target.value
                })}
          />
          <input type='text'
                  value={this.state.childBirthday}
                  placeholder='Number'
                  onChange={(e) => this.setState({
                    childBirthday: e.target.value
                  })}
          />
          <input type='text'
                  value={this.state.childArrivalDate}
                  placeholder='email'
                  onChange={(e) => this.setState({
                    childArrivalDate: e.target.value
                  })}
          />
          <input type='text'
                  value={this.state.childInsurance}
                  placeholder='insurance'
                  onChange={(e) => this.setState({
                    childInsurance: e.target.value
                  })}
          />

          <button type='submit'
              className="form submit"
              onClick={(e) => this.handleSubmit(e)}>
              Add Child
            </button>
        </form>
      </div>
    )
  }
}
