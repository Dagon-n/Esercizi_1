const prompt = require('prompt-sync')();

let risultato = 0;

let operazione_scelta = prompt("seleziona un operazione tra: '+', '-', 'x', ':' altrimenti scrivere 'altro'   ")

let numero1 = parseInt(prompt("inserire primo numero: "));
let numero2 = parseInt(prompt("inserire secondo numero: "));

const risultati_saved = [];

// OPERAZIONI VARIE
if(operazione_scelta == "+"){

    risultato = numero1 + numero2;
    console.log(numero1 + " + " + numero2 + " = " + risultato);
    risultati_saved.push(numero1 + " + " + numero2 + " = " + risultato);

}

if(operazione_scelta == "-"){

    risultato = numero1 - numero2;
    console.log(numero1 + " - " + numero2 + " = " + risultato);
    risultati_saved.push(numero1 + " - " + numero2 + " = " + risultato);

}

if(operazione_scelta == "x"){

    risultato = numero1 * numero2;
    console.log(numero1 + " x " + numero2 + " = " + risultato);
    risultati_saved.push(numero1 + " x " + numero2 + " = " + risultato);

}

if(operazione_scelta == ":"){

    risultato = numero1 / numero2;
    console.log(numero1 + " : " + numero2 + " = " + risultato);
    risultati_saved.push(numero1 + " : " + numero2 + " = " + risultato);

}

//ALTRE OPERAZIONI
if(operazione_scelta == "altro"){

    let altre_operazioni = prompt("Scrivi 'potenze' per calcolare delle potenze o scrivi 'radice' per calcolare la radice quadrata ")

    if(altre_operazioni == "radice"){

        let numero1 = prompt("inserire il numero di cui si vuole la radice quadrata: ");
        risultato = Math.sqrt(numero1);
        console.log("La radice quadrata di " + numero1 + " è: " + risultato)
        risultati_saved.push("La radice quadrata di " + numero1 + " è: " + risultato)

    }

    if(altre_operazioni == "potenze"){
        let numero1 = prompt("Scrivi la base della potenza: ");
        let numero2 = prompt("Scrivi il suo esponente: ");
        risultato = Math.pow(numero1, numero2);
        console.log(numero1  + " elevato alla " + numero2 + " è uguale a: " + risultato)
        risultati_saved.push(numero1  + " elevato alla " + numero2 + " è uguale a: " + risultato)

    }

}

// VEDERE CRONOLOGIA OPERAZIONI
let vedere_risultati = prompt("Vuoi vedere la cronologia delle operazioni? (scrivere 'si' o 'no')");

if(vedere_risultati == "si"){
    
    console.log(risultati_saved);

}else{

    console.log("Vabene allora.. :(")

}