import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";

//const signupForm = document.querySelector('#signup-form');
//signupForm.addEventListener('sumbit', (e) => {
//    e.preventDefault();
//
//   const email = signupForm['signup-email'].value;
//   const password = signupForm['signup-password'].value;
//   auth.createUserWithEmailAndPassword(email, password).then(cred => {
//        console.log(cred.user);
//        const modal = document.querySelector('#modal-signup');
//        M.Modal.getInstance(modal).close();
//        signupForm.reset();
//    })
//}) 

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
const auth = getAuth(app);

//listen for auth status changes
onAuthStateChanged(auth, (user) => {
  // Check for user status
  // console.log(user);
  if (user) {
    console.log("User log in: ", user.email);
    getTasks(db).then((snapshot) => {
      setupTasks(snapshot);
    });
    setupUI(user);
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      addDoc(collection(db, "tasks"), {
        title: form.title.value,
        description: form.description.value,
      }).catch((error) => console.log(error));
      form.title.value = "";
      form.description.value = "";
    });
  } else {
    // console.log("User Logged out");
    setupUI();
    setupTasks([]);
  }
});

//signup
const signupForm = document.querySelector("#signup-form");
// const auth = getAuth(app);
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      const modal = document.querySelector("#modal-signup");
      M.Modal.getInstance(modal).close();
      signupForm.reset();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});

//logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  signOut(auth)
    .then(() => {
      // console.log("user has signed out");
    })
    .catch((error) => {
      // An error happened.
    });
});

//login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      //close the login modal and reset the form
      const modal = document.querySelector("#modal-login");
      M.Modal.getInstance(modal).close();
      loginForm.reset();
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});