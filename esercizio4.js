const prompt = require('prompt-sync')();

let numero = prompt("inserisci un numero: ");

let somma = 0;
let prodotto = 1;

for(let i=1; i<=numero; i++){

    somma += i;
    prodotto *= i;

}

console.log("La somma dei numeri da " + 1 + " a " + numero + " è uguale a: " + somma)
console.log("Il prodotto dei numeri da " + 1 + " a " + numero + " è uguale a: " + prodotto)