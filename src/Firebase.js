import firebase from 'firebase';
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0xMCgK7ELERTblUk-ciLNrLKoF0uxdm4",
    authDomain: "mytestapp-4b2d1.firebaseapp.com",
    databaseURL: "https://mytestapp-4b2d1.firebaseio.com",
    projectId: "mytestapp-4b2d1",
    storageBucket: "mytestapp-4b2d1.appspot.com",
    messagingSenderId: "964397019171",
    appId: "1:964397019171:web:0a11afffc27dbccb3ec196",
    measurementId: "G-3KL2W9YTKB"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;

export const getData = async () => {
    const query = await firebase
        .firestore()
        .collection("curriculos")
        .get();
    const data = [];
    query.forEach((doc) => {
        data.push(doc.data());
    });
    
    return data[0];
}


