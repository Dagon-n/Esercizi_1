const prompt = require('prompt-sync')();

let risultato = 0;
let risultati_saved = [];

let loop_programma = "si";

// INIZIO LOOP CALCOLATRICE
while(loop_programma == "si"){

    let operazione_scelta = prompt("seleziona un operazione tra: '+', '-', 'x', ':', 'radice' o 'potenza'   ");

    // ADDIZIONE
    if(operazione_scelta == "+"){

        let numero1 = parseInt(prompt("inserire primo numero:  "));
        let numero2 = parseInt(prompt("inserire secondo numero:  "));
        risultato = numero1 + numero2;
        console.log(numero1 + " + " + numero2 + " = " + risultato);
        risultati_saved.push(numero1 + " + " + numero2 + " = " + risultato);
    
    }

    // SOTTRAZIONE
    if(operazione_scelta == "-"){

        let numero1 = parseInt(prompt("inserire primo numero:  "));
        let numero2 = parseInt(prompt("inserire secondo numero:  "));
        risultato = numero1 - numero2;
        console.log(numero1 + " - " + numero2 + " = " + risultato);
        risultati_saved.push(numero1 + " - " + numero2 + " = " + risultato);
    
    }

    //MOLTIPLICAZIONE
    if(operazione_scelta == "x"){

        let numero1 = parseInt(prompt("inserire primo numero:  "));
        let numero2 = parseInt(prompt("inserire secondo numero:  "));
        risultato = numero1 * numero2;
        console.log(numero1 + " x " + numero2 + " = " + risultato);
        risultati_saved.push(numero1 + " x " + numero2 + " = " + risultato);
    
    }

    //DIVISIONE
    if(operazione_scelta == ":"){

        let numero1 = parseInt(prompt("inserire primo numero:  "));
        let numero2 = parseInt(prompt("inserire secondo numero:  "));
        risultato = numero1 / numero2;
        console.log(numero1 + " : " + numero2 + " = " + risultato);
        risultati_saved.push(numero1 + " : " + numero2 + " = " + risultato);
    
    }

    // RADICE QUADRATA
    if(operazione_scelta == "radice"){

        let numero1 = parseInt(prompt("inserire il numero di cui si vuole la radice quadrata:  "));
        risultato = Math.sqrt(numero1);
        console.log("La radice quadrata di " + numero1 + " è: " + risultato)
        risultati_saved.push("La radice quadrata di " + numero1 + " è: " + risultato)

    }

    // POTENZA
    if(operazione_scelta == "potenza"){

        let numero1 = parseInt(prompt("Scrivi la base della potenza:  "));
        let numero2 = parseInt(prompt("Scrivi il suo esponente:  "));
        risultato = Math.pow(numero1, numero2);
        console.log(numero1  + " elevato alla " + numero2 + " è uguale a: " + risultato)
        risultati_saved.push(numero1  + " elevato alla " + numero2 + " è uguale a: " + risultato)

    }

    // CRONOLOGIA OPERAZIONI
    const vedere_risultati = console.log(risultati_saved);

    // CHIEDERE SE SI VUOLE FAR RIPARTIRE LA CALCOLATRICE
    loop_programma = prompt("Vuoi usare ancora la calcolatrice? Scrivere 'si' o 'no'  ")

    if(loop_programma != "si"){
        break
    }
}