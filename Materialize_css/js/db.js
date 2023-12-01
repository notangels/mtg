import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import {getFirestore, collection, getDocs, enableIndexedDbPersistence} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyB4GH3T1xVgyVRfB5EH9-RWyESjIvttWUI",
    authDomain: "moss-thorns-gallery-of-art.firebaseapp.com",
    projectId: "moss-thorns-gallery-of-art",
    storageBucket: "moss-thorns-gallery-of-art.appspot.com",
    messagingSenderId: "659601768265",
    appId: "1:659601768265:web:d164ba24ed114f650aa498",
    measurementId: "G-86H5YNN87M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(app);


enableIndexedDbPersistence(db)
    .then(() => console.log("Enabled offline persistence"))
    .catch((error) => {
      if (error.code == "failed-precondition") {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        console.log("Persistence failed");
      } else if (error.code == "unimplemented") {
        // The current browser does not support all of the
        // features required to enable persistence
        console.log("[Persistence is not valid");
      }
});




db.settings({timestampsInSnapshots: true });