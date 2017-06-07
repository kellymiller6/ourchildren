var CryptoJS = require("crypto-js")
import { firebaseApp, ref} from '../firebase/Firebase';
import { browserHistory } from 'react-router'

export const addObject = (object, objType) => {
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
