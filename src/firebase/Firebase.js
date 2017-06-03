import * as firebase from 'firebase';
import { browserHistory } from 'react-router'
var CryptoJS = require("crypto-js")


const config = {
   apiKey: "AIzaSyAkqJ_VGB8PCVT-CEl8KXxh3TEkVV8iG-M",
   authDomain: "our-children.firebaseapp.com",
   databaseURL: "https://our-children.firebaseio.com",
   projectId: "our-children",
   storageBucket: "our-children.appspot.com",
   messagingSenderId: "143250240679"
  };

export const firebaseApp  = firebase.initializeApp(config);

export const ref = firebaseApp.database().ref()

export const currentUser = firebase.auth().currentUser


export const signout = () => {
  firebaseApp.auth().signOut().then(function() {
    console.log("signed out");
    browserHistory.push('/login');
  }, function(error) {
    console.log("signouterror");
  });
}

export const handleGoogle = (e) => {
 e.preventDefault();
 var provider = new firebase.auth.GoogleAuthProvider();
 firebaseApp.auth().signInWithPopup(provider).then((result) => {
   console.log('Google login success')
 }).catch((error) => {
   var errorMessage = error.message;
   alert("Google error "+ errorMessage);
 });
}

export const handleSubmit = (destination, dataObject, historyEntry, event) => {

  const user = firebaseApp.auth().currentUser;
  let uid;
  if (user != null) {
    uid = user.uid;
  }
  event.preventDefault();
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(dataObject), 'secret key 123')
  var strCipher = ciphertext.toString()
  const targetRef = ref.child('users/' + uid + '/' + destination);
  targetRef.push(strCipher);
  browserHistory.push('/' + historyEntry);
 }

export const retrieveData = function (location, actionCreatorFunction){
  var user = firebaseApp.auth().currentUser;
  var uid;

  if (user != null) {
    uid = user.uid;
  }
  ref.child('users/'+uid+'/'+location).on('value', snapshot => {
    var snaps = snapshot.val()
    var newArr = Object.keys(snaps).map((person, index)=>{
      return(
        CryptoJS.AES.decrypt(snaps[person], 'secret key 123')
      )
    })
    var newNewArray = newArr.map((item,index)=>{
      return(
        JSON.parse(item.toString(CryptoJS.enc.Utf8))
      )
    })
    console.log('des', location);

    actionCreatorFunction(newNewArray);

  })
 }
