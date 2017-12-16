import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MyRoutes from './routes';
import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyAmfWpQxO1yT6a0nFLkavKraAzVbG2ETrc",
    authDomain: "ionic-2-patient-tracker.firebaseapp.com",
    databaseURL: "https://ionic-2-patient-tracker.firebaseio.com",
    projectId: "ionic-2-patient-tracker",
    storageBucket: "ionic-2-patient-tracker.appspot.com",
    messagingSenderId: "417430465466"
  };
  firebase.initializeApp(config);


ReactDOM.render(<MyRoutes />, document.getElementById('root'));
registerServiceWorker();
