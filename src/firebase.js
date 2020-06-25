import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyDa4ly_9XEMZmqNdKaD1O7DziBpLca-VEM',
  authDomain: 'slack-chat-app-clone.firebaseapp.com',
  databaseURL: 'https://slack-chat-app-clone.firebaseio.com',
  projectId: 'slack-chat-app-clone',
  storageBucket: 'slack-chat-app-clone.appspot.com',
  messagingSenderId: '827039025989',
  appId: '1:827039025989:web:a0acf099d3cc844cb48c2c'
};
firebase.initializeApp(firebaseConfig);

export default firebase;
