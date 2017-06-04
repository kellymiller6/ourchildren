var CryptoJS = require("crypto-js")
import { firebaseApp, ref} from '../firebase/Firebase';
import { browserHistory } from 'react-router'


export const addObject = (object, objType) => {
  return dispatch =>{
    const user = firebaseApp.auth().currentUser;
    let uid;
    if (user != null) {
      uid = user.uid;
    }
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(object), 'secret')
    const strCipher = ciphertext.toString()
    const targetRef = ref.child('users/' + uid + '/' + objType);
    targetRef.push(strCipher);
    if(objType === 'children'){
      browserHistory.push('/children')
    } else {
      browserHistory.push('/parentprofile')
    }
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
  return {
    type: 'RECEIVE_CHILDREN',
    children
  }
}

export const fetchData = (location, actionCreator) => {
  return dispatch => {
    const user1 = firebaseApp.auth().currentUser;
    let uid;
    if (user1 != null) {
      uid = user1.uid;
    }
    ref.child('users/'+uid+'/'+location).on('value', snapshot => {
      const snaps = snapshot.val()
      if(!snaps){
        return
      }
      const newArr = Object.keys(snaps).map((person, index)=>{
        return(
          CryptoJS.AES.decrypt(snaps[person], 'secret')
        )
      })
      const newNewArray = newArr.map((item,index)=>{
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
