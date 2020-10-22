// Pari o dispari:
// scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer.
// L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari".
// Il computer genera un secondo numero casuale tra 1 e 5.
// Per vedere chi dei due vince, si deve fare la somma dei numeri
// dell'utente e del computer e stabilire se il risultato è pari o dispari.

// chiedo all'utente un numero
var numero_utente;
do {
    numero_utente = parseInt(prompt('Inserisci un numero'));
    console.log(numero_utente);
} while (isNaN(numero_utente) || numero_utente <= 0 || numero_utente > 5);

/*
// alternativa equivalente con while al posto di do-while
var numero_utente = parseInt(prompt('Inserisci un numero'));
while(isNaN(numero_utente) || numero_utente <= 0 || numero_utente > 5) {
    alert('numero non valido');
    numero_utente = parseInt(prompt('Inserisci un numero'));
}
*/

// chiedo all'utente cosa sceglie tra "pari" o "dispari"
var scelta_utente;
do {
    scelta_utente = (prompt('Cosa scegli tra "pari" e "dispari"?')).toLowerCase();
    console.log(scelta_utente);
} while (scelta_utente != 'pari' && scelta_utente != 'dispari');


// genero un numero per il computer
var numero_pc = getRndInteger(1, 5);
console.log(numero_pc);

// faccio la somma tra numero utente e numero pc
var somma = numero_utente + numero_pc;
console.log(somma);

// stabilisco se la somma è pari o dispari
var esito = '';
if(isEven(somma)) {
    esito = 'pari';
} else {
    esito = 'dispari';
}

// valuto se l'utente ha vinto
if(isVincitore(scelta_utente, esito)) {
    console.log('hai vinto!!');
} else {
    console.log('hai perso :(');
}

// funzione che genera un numero casuale tra min e max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione che stabilisce se un numero è pari o dispari
// restituisce true se pari, false altrimenti
function isEven(numero) {
    if(numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// funzione che stabilisce se l'utente ha vinto oppure no
// restituisce true se ha vinto, false altrimenti
function isVincitore(scelta1, scelta2) {
    // comunico il vincitore
    // utente sceglie pari -> somma pari => vince
    //                     -> somma dispari => perde
    // utente sceglie dispari -> somma pari => perde
    //                        -> somma dispari => vince
    if(scelta1 == scelta2) {
        return true;
    } else {
        return false;
    }
}
