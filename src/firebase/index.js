// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTR8CQAmaiRg9JIL7vDuD67W6do6gaXlg",
  authDomain: "wedding-clinto-chippy.firebaseapp.com",
  projectId: "wedding-clinto-chippy",
  storageBucket: "wedding-clinto-chippy.appspot.com",
  messagingSenderId: "487878075862",
  appId: "1:487878075862:web:577e81b48918844ecf7077",
  measurementId: "G-Q5GLV9TERS"
};

// Initialize Firebase
const storage = initializeApp(firebaseConfig);
const analytics = getAnalytics(storage);

export { storage as default, analytics}























// 2.
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// // Follow this pattern to import other Firebase services
// // import { } from 'firebase/<service>';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }