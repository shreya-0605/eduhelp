<script type="module">

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyA03KL74-jwWtRAcS-WzKx9doY6pMg_xDI",
    authDomain: "eduhelp-website.firebaseapp.com",
    databaseURL: "https://eduhelp-website-default-rtdb.firebaseio.com",
    projectId: "eduhelp-website",
    storageBucket: "eduhelp-website.appspot.com",
    messagingSenderId: "864446500847",
    appId: "1:864446500847:web:96fc4be60b236138e4301a",
    measurementId: "G-NZ3RRC4BM1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>