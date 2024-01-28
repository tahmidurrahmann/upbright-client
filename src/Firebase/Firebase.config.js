// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRoZTm7H9XcuIeUPx0ddw63QHfT2Wo5YM",
  authDomain: "upbright-client.firebaseapp.com",
  projectId: "upbright-client",
  storageBucket: "upbright-client.appspot.com",
  messagingSenderId: "783273846105",
  appId: "1:783273846105:web:02d30a9f553a6041bd1848"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);