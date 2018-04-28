import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCYJSD7-862wslhb-MTc4cFchkvseiOjCc",
    authDomain: "jekbills-57941.firebaseapp.com",
    databaseURL: "https://jekbills-57941.firebaseio.com",
    projectId: "jekbills-57941",
    storageBucket: "jekbills-57941.appspot.com",
    messagingSenderId: "71475131399"
  };
firebase.initializeApp(config);

function willLog(snapshot) {
    console.log(snapshot.key() + " : " + EJSON.stringify(snapshot.val()));
}
