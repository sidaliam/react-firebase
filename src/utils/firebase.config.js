import firebase from "firebase/compat/app";
import  "firebase/compat/auth";
const app=firebase.initializeApp ({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-f0d69.firebaseapp.com",
  projectId: "react-firebase-redux-f0d69",
  storageBucket: "react-firebase-redux-f0d69.appspot.com",
  messagingSenderId: "937654442480",
  appId: "1:937654442480:web:5d57c6a85afc7c952d6535"
});
export const auth=app.auth();
export default app;