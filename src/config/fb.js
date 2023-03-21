
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import Constants from "expo-constants"

const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  databaseURL: Constants.manifest.extra.databaseURL,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,

//   authDomain: "formularios-3acb4.firebaseapp.com",
//   projectId: "formularios-3acb4",
//   storageBucket: "formularios-3acb4.appspot.com",
//   messagingSenderId: "303295771053",
//   appId: "1:303295771053:web:790a9d3671e119524e7124"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const database = getFirestore()