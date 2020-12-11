const loginForm = document.querySelector("#login");
const signUpForm = document.querySelector("#createAccount")

document.querySelector("#linkCreateAccount").addEventListener("click", function (){
    loginForm.classList.add("form-hidden");
    signUpForm.classList.remove("form-hidden")
});

document.querySelector("#linkLogin").addEventListener("click", function (){
    signUpForm.classList.add("form-hidden");
    loginForm.classList.remove("form-hidden")
});

//Validacija SignUp forme
const ime = document.querySelector('#ime');
const prezime = document.querySelector('#prezime');
const email = document.querySelector('#email');
const lozinka = document.querySelector('#lozinka');
const potvrdiLozinku = document.querySelector('#potvrdiLozinku');


function proveri () {
    const imeValue = ime.value;
    const prezimeValue = prezime.value;
    const emailValue = email.value;
    const lozinkaValue = lozinka.value;
    const potvrdiLozinkuValue = potvrdiLozinku.value;

    const reImePrzime =/^[A-ZČŠĆĐŽ][a-zčćžšđ]{2,30}(\s[A-ZČŠĆĐŽ][a-zčćžšđ]{2,30})?$/;
    const reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //lozinka mora da sadrzi makar jednu cifru, makar jedno malo slovo, makar jedno veliko slovo,najmanje 8 karaktera
    const reLozinka = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

    if(!reImePrzime.test(imeValue)){
        document.querySelector("#imeError").innerHTML="Ime mora početi velikim slovom.";
    }
    else{
        document.querySelector("#imeError").innerHTML="";
    }

    if(!reImePrzime.test(prezimeValue)){
        document.querySelector("#prezimeError").innerHTML="Prezime mora početi velikim slovom.";
    }
    else{
        document.querySelector("#prezimeError").innerHTML="";
    }

    if(!reEmail.test(emailValue)){
        document.querySelector("#emailError").innerHTML="Nije ispravno napisana adresa.(ex. jovanjovic@mail.com)";
    }
    else{
        document.querySelector("#emailError").innerHTML="";
    }

    if(!reLozinka.test(lozinkaValue)){
        document.querySelector("#lozinkaError").innerHTML="Lozinka mora biti minimalne duzine od 8 karaktera i da sadrzi u sebi bar jedno veliko slovo, jedno malo slovo i jednu cifru. ";
    }
    else{
        document.querySelector("#lozinkaError").innerHTML="";
    }

    if(lozinkaValue!=potvrdiLozinkuValue){
        document.querySelector("#potvrdiLozinkuError").innerHTML="Nije uneta ista lozinka.";
    }
    else{
        document.querySelector("#potvrdiLozinkuError").innerHTML="";
    }
}