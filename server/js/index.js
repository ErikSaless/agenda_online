import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";


document.getElementById("enter").addEventListener("click", ()=>{
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    signinwithEmailAndPassword(auth, user, pass)
    .then(()=>{
        window.location.href = "page.html";
    })
    .catch((erro)=>{
        alert("Erro ao logar:  " + erro.message)
    });

});