const prompt = require('prompt-sync')();

const list_utenti = ["paolo","stefano","claudio","mirko","edmondo"];
const list_password = ["password", "password1", "fagiano9", "forzaspal", "bellojavascripteh"];

let nome_utente = prompt("Inserire nome utente: ");

function controlloUtenti(a){
    console.log(list_utenti.indexOf(a))
}

if(controlloUtenti(nome_utente) === -1){

    console.log("vattene!")

}