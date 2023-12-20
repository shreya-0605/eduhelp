// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
 const firebaseConfig = {
     apiKey: "AIzaSyA03KL74-jwWtRAcS-WzKx9doY6pMg_xDI",
     authDomain: "eduhelp-website.firebaseapp.com",
     projectId: "eduhelp-website",
     storageBucket: "eduhelp-website.appspot.com",
     messagingSenderId: "864446500847",
     appId: "1:864446500847:web:96fc4be60b236138e4301a",
     measurementId: "G-NZ3RRC4BM1"
 };
   
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth(app);
 const db = getDatabase();

 let EmailInp = document.getElementById('emailInp');
 let PassInp = document.getElementById('passwordInp');
 let UserInp = document.getElementById('userInp');
 let MainForm = document.getElementById('MainForm');

 let RegisterUser = evt =>{
     evt.preventDefault();
      createUserWithEmailAndPassword(auth, EmailInp.value, PassInp.value)
     .then((credentials)=>{

        alert("Your Account is successfully created");
         set(ref(db, 'UsersAuthList/'+ credentials.user.uid),{
             username: UserInp.value,
             emailId : EmailInp.value,
             password : PassInp.value

         })

         const auth = getAuth();
            sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("Verify your email")
            });

     })
     .catch((error)=>{
         alert(error.message);
         console.log(error);
     })
 }
 
     MainForm.addEventListener('submit', RegisterUser) ;