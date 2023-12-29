let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

let MsgHead = document.getElementById('msg');
let GreetHead = document.getElementById('greet');
let SignoutBtn = document.getElementById('signoutbutton');

let Signout = ()=>{
    sessionStorage.removeItem("user-creds");
    sessionStorage.removeItem("user-info");
    window.location.href = 'login/login.html'
}

let CheckCred = ()=>{
    if (!sessionStorage.getItem("user-creds"))
    window.location.href = 'login/login.html'
    else{
        MsgHead.innerText = `Hello ${UserInfo.username}!`;
        console.log(UserCreds);
    }
}

window.addEventListener('load', CheckCred);
SignoutBtn.addEventListener('click', Signout);