import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBL7vNy9u3g0d-SiNaemwpYMELVGMm2dr4",
    authDomain: "marketwhale-mj.firebaseapp.com",
    databaseURL: "https://marketwhale-mj.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp } // named export

export default base;