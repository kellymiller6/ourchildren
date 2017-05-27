import React, { Component } from 'react';

export default class AddSitter extends Component {
  constructor (){
    super()
    this.state = {
      sitterName: '',
      sitterNumber:'',
      sitterEmail:''
    }
  }

  handleSubmit(e) {
  e.preventDefault();
  //add to data base
  }



  render(){
    return(
      <div className='sitter'>
        <form className='add-sitter'>
          <h4> Approved Sitter </h4>
          <input type='text'
                value={this.state.sitterName}
                placeholder='Name'
                onChange={(e) => this.setState({
                  sitterName: e.target.value
                })}
          />
          <input type='text'
                  value={this.state.sitterNumber}
                  placeholder='Number'
                  onChange={(e) => this.setState({
                    sitterNumber: e.target.value
                  })}
          />
          <input type='text'
                  value={this.state.sitterEmail}
                  placeholder='email'
                  onChange={(e) => this.setState({
                    sitterEmail: e.target.value
                  })}
          />
          <button type='submit'
              className="form submit"
              onClick={(e) => this.handleSubmit(e)}>
              Add Sitter
            </button>
        </form>
      </div>
    )
  }
}
