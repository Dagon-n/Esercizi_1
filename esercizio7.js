const prompt = require('prompt-sync')();

let numero_utente = prompt("inserire un numero:  ");

let risultato = 0;

let temporaneo = 0;

for(let i=1; i<=numero_utente; i++){

    tabellina = i;
    console.log("questa è la tabellina del " + i + ": ")

    for(let i=1; i<=10; i++){

        console.log(i * tabellina);

    }; 

};