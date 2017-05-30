import React, { Component } from 'react';
import { ref, firebaseApp } from '../../firebase/Firebase';
import { browserHistory } from 'react-router'

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
    var user = firebaseApp.auth().currentUser;
    var uid;

    if (user != null) {
      uid = user.uid;
    }
  e.preventDefault();
  const usersRef = ref.child('users/'+uid+'/sitters');
  usersRef.push(this.state);
  browserHistory.push('/parentprofile');

 }



  render(){
    return(
      <div className='sitter'>
        <form className='add-sitter'>
          <h4> Approved Sitter </h4>
          <input
                className='add-input'
                type='text'
                value={this.state.sitterName}
                placeholder='Name'
                onChange={(e) => this.setState({
                  sitterName: e.target.value
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
              onClick={(e) => this.handleSubmit(e)}>
              Add Sitter
            </button>
        </form>
      </div>
    )
  }
}
