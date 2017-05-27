import React, { Component } from 'react';
import { ref, firebaseApp } from '../../firebase/Firebase';

export default class AddChild extends Component {
  constructor (){
    super()
    this.state = {
      childName: '',
      childBirthday:'',
      childArrivalDate:'',
      childInsurance:'',
    }
  }

  handleSubmit(e) {
    var user = firebaseApp.auth().currentUser;
    var uid;

    if (user != null) {
      uid = user.uid;
    }
  e.preventDefault();

  const usersRef = ref.child('users/'+uid+'/child' );
  usersRef.push(this.state);

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
                  placeholder='Birthday'
                  onChange={(e) => this.setState({
                    childBirthday: e.target.value
                  })}
          />
          <input type='text'
                  value={this.state.childArrivalDate}
                  placeholder='Arrival Date'
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
