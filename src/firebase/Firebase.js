import * as firebase from 'firebase';
import { browserHistory } from 'react-router'

const config = {
   apiKey: "AIzaSyAkqJ_VGB8PCVT-CEl8KXxh3TEkVV8iG-M",
   authDomain: "our-children.firebaseapp.com",
   databaseURL: "https://our-children.firebaseio.com",
   projectId: "our-children",
   storageBucket: "our-children.appspot.com",
   messagingSenderId: "143250240679"
  };

export const firebaseApp  = firebase.initializeApp(config);

export const signout = () => {
  firebaseApp.auth().signOut().then(function() {
    console.log("signed out");
    browserHistory.push('/login');
  }, function(error) {
    console.log("signouterror");
  });
}
