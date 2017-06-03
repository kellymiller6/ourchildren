import { receiveData } from '../firebase/Firebase.js'
var CryptoJS = require("crypto-js")
import { firebaseApp, signout, ref} from '../firebase/Firebase';

export const addObject = (object, objType) => {
  return dispatch =>{
    debugger;
    const user = firebaseApp.auth().currentUser;
    let uid;
    if (user != null) {
      uid = user.uid;
    }
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(object), 'secret key 123')
    var strCipher = ciphertext.toString()
    const targetRef = ref.child('users/' + uid + '/' + objType);
    targetRef.push(strCipher);
  }
}

export const receiveSitters = (sitters) => {
  return {
    type: 'RECEIVE_SITTERS',
    sitters
  }
}
export const receiveWorkers = (workers) => {
  return {
    type: 'RECEIVE_WORKERS',
    workers
  }
}
export const receiveChildren = (children) => {
  console.log('rc', children);
  return {
    type: 'RECEIVE_CHILDREN',
    children
  }
}

export const fetchData = (location, actionCreator) => {
  console.log('fetch');
  return dispatch => {
    var user1 = firebaseApp.auth().currentUser;
    var uid;

    if (user1 != null) {
      uid = user1.uid;
    }
    ref.child('users/'+uid+'/'+location).on('value', snapshot => {
      var snaps = snapshot.val()
      if(!snaps){
        return
      }
      var newArr = Object.keys(snaps).map((person, index)=>{
        return(
          CryptoJS.AES.decrypt(snaps[person], 'secret key 123')
        )
      })
      var newNewArray = newArr.map((item,index)=>{
        const itemStr = item.toString(CryptoJS.enc.Utf8)
        if(itemStr.length === 0){
          return {}
        } else {
        return JSON.parse(itemStr)
       }
      })
      dispatch(actionCreator(newNewArray))
    })
  }
}
