import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyAkqJ_VGB8PCVT-CEl8KXxh3TEkVV8iG-M",
   authDomain: "our-children.firebaseapp.com",
   databaseURL: "https://our-children.firebaseio.com",
   projectId: "our-children",
   storageBucket: "our-children.appspot.com",
   messagingSenderId: "143250240679"
  };

 const firebaseApp  = firebase.initializeApp(config);

export default firebaseApp;
