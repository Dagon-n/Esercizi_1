const prompt = require('prompt-sync')();

let parole = ["cane", "gatto", "gallo", "seppie", "formica"];

let loop_prgrm = true;

while(loop_prgrm == true){

    let parola_utente = prompt("Inserisci una parola:  ");

    if(parole.indexOf(parola_utente) >= 0){

        console.log("Bravo! Hai indovinato la parola!!");
        break;

    }else{

        console.log("Mi dispiace! la parola " + parola_utente + " non fa parte dell'array!")

    }

    let scelta = prompt("Vuoi riprovare? (premere 'y' o 'n')  ")

    if(scelta != "y"){

        loop_prgrm = false;

    }

}