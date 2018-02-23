import firebase from 'firebase/app';
import 'firebase/database';

const ROOT_URL = 'https://hacker-news.firebaseio.com';

try	{
  firebase.initializeApp({
    databaseURL: ROOT_URL
  });
} catch(e) {
  // ...
}

const FirebaseService = firebase.database().ref('v0');

export default FirebaseService;
