import React, { Component } from 'react';
import { ref, firebaseApp } from '../../firebase/Firebase';
import { browserHistory } from 'react-router'

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
    var user = firebaseApp.auth().currentUser;
    var uid;

    if (user != null) {
      uid = user.uid;
    }
  e.preventDefault();
  const usersRef = ref.child('users/'+uid+'/workers');
  usersRef.push(this.state);
  browserHistory.push('/parentprofile');

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
              onClick={(e) => this.handleSubmit(e)}>
              Add Foster Care Specialist
            </button>
        </form>
      </div>
    )
  }
}
