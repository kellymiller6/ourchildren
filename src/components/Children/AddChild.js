import React, { Component } from 'react';
import { ref, firebaseApp } from '../../firebase/Firebase';
import { browserHistory } from 'react-router'
var CryptoJS = require("crypto-js")


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
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(this.state), 'secret key 123')
  console.log('cipher', ciphertext);
  var strCipher = ciphertext.toString()
  const usersRef = ref.child('users/'+uid+'/child' );
  usersRef.push(strCipher);
  browserHistory.push('/children');
 }


  render(){
    return(
      <div className='add-child'>
        <form className='add-parent-info'>
          <input className='add-input'
                type='text'
                value={this.state.childName}
                placeholder='Name'
                onChange={(e) => this.setState({
                  childName: e.target.value
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
              onClick={(e) => this.handleSubmit(e)}>
              Add Child
            </button>
        </form>
      </div>
    )
  }
}
