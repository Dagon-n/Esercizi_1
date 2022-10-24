const prompt = require('prompt-sync')();

numero_utente = parseInt(prompt("Inserisci un numero:  "));

let risultato = 0;

controllo = "";

function controlloNumprm(x){

    if(x % x-1 === 0){
        
        return controllo = " non è primo";

    }else{

        return controllo = " è primo";

    }

}

for(let i=1; i <= numero_utente; i++){

    controlloNumprm(i);
    console.log(i, controllo);

}

