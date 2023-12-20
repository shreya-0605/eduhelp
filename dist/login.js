        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
        import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
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
        const dbref = ref(db);

        let EmailInp = document.getElementById('emailInp');
        let  PassInp = document.getElementById('passwordInp');
        let MainForm = document.getElementById('MainForm');
        let ForgotPassLabel = document.getElementById('forgotpasslabel');
        
        let SignInUser = evt =>{
            evt.preventDefault();

           signInWithEmailAndPassword(auth, EmailInp.value, PassInp.value)
           .then((credentials)=>{
            console.log(credentials);
              get(child(dbref, 'UsersAuthList/'+ credentials.user.uid))
              .then((snapshot)=>{
                
                if(snapshot.exists){ 
                    
                    sessionStorage.setItem("user-info", JSON.stringify({
                        username: snapshot.val().username
                    }))
                    sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                    window.location.href='home.html';
                }
              })
            })
            .catch((error)=>{
                alert(error.message);
                console.log(error.code);
            })
            }

            let ForgotPassword = ()=>{
                sendPasswordResetEmail(auth, EmailInp.value)
                .then(()=>{
                    alert("A Password Reset Link has been sent to your email");
                })
                .catch((error)=>{
                    console.log(error.code);
                    console.log(error.message);

                })
            }
        MainForm.addEventListener('submit', SignInUser) ;
        ForgotPassLabel.addEventListener('click', ForgotPassword)