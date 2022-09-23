const prompt = require('prompt-sync')();

const list_utenti = ["paolo","stefano","claudio","mirko","edmondo"];
const list_password = ["password", "password1", "fagiano9", "forzaspal", "bellojavascripteh"];

let nome_utente = prompt("Inserire nome utente: ");

if(list_utenti.indexOf(nome_utente) === -1){

    console.log("vattene!")

}

if(list_utenti.indexOf(nome_utente) >= 0){

    console.log("bentornato!")

    let psswrd_utente = prompt("Inserire password: ");

    if(list_password.indexOf(psswrd_utente) === -1){

        console.log("Password errata!!")

    }else{

        console.log("Password corretta! Login effettuato.")

    }

}