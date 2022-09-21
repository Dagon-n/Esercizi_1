const prompt = require('prompt-sync')();

let numero_utente = prompt("inserisci un numero: ");
let somma = 0;

function divisibile(a, b){

    return !(a % b);

}

for(let i=1; i<=numero_utente; i++){

    if(divisibile(i,3) || divisibile(i,7)){

        somma += i;

    }

}

console.log(
    "Questa è la somma dei numeri divisibili per 3 e 7 fino a " + numero_utente + ": " + somma
    );