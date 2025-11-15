import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { firebaseConfig } from "./FireBaseConfig.js";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

window.signUp = function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=> {
      const user= userCredential.user;
      console.log("User Sign Up Successful:", user.email);
    })
    .catch ((error) => {
      console.error('Sign Up Error:', error.message);
    });
  }

window.signIn = function(){
    const email= document.getElementById('email').value;
    const password= document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        const user= userCredential.user;
        console.log('Sign In Successful:', user.email);
        window.location.replace('/Pages/AdminDash.html');
      })
      .catch((error)=>{
        console.error('Sign In Error:', error.message);
      });
  };