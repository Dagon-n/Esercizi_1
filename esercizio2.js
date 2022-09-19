const prompt = require('prompt-sync')();

let nome_utente = prompt("inserisci nome: ");
let eta_utente = prompt("inserisci età: ");

let numero_cabina = Math.floor(Math.random() * 25);

if(eta_utente<18){
    console.log("non puoi ancora votare!")
}else{
    console.log("il tuo nome è " + nome_utente + " e la tua età è " + eta_utente + ". La tua cabina per votare è la numero " + numero_cabina);
};