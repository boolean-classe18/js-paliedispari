// Palindroma:
// scrivere una funzione per valutare se una parola è palindroma oppure no
// (una parola è palindroma se la posso leggere nello stesso modo
// dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no)

var stringa_inziale = prompt('Inserisci una parola');
var palindroma = isPalindroma(stringa_inziale);
var palindroma2 = isPalindroma2(stringa_inziale);

if(palindroma) {
    console.log('la parola è palindroma!');
} else {
    console.log('la parola non è palindroma');
}

if(palindroma2) {
    console.log('la parola è palindroma!');
} else {
    console.log('la parola non è palindroma');
}

// funzione che riceve in input una parola
// resituisce true se la parola è palindroma, false altrimenti
function isPalindroma(stringa) {
    // A N D R E A
    // A == A ? Sì
    // N == E ? NO
    // D == R ?

    // S O F I A
    // S == A ? NO
    // O == I
    // F == F

    // carattere in posizione 0 == carattere pos length - 1 ?
    // carattere in posizione 1 == carattere pos length - 2 ?
    // carattere in posizione 2 == carattere pos length - 3 ?

    // variabile sentinella che diventa false quando ci sono dei caratteri a specchio diversi
    var caratteri_uguali = true;

    // scorro la parola fino ad arrivare al centro. il ciclo è ottimizzato
    // e si arresta appena trova una coppia di caratteri a specchio diversi
    for (var i = 0; i < (stringa.length / 2) && caratteri_uguali; i++) {
        // recupero a specchio il carattere in posizione i dall'inizio e dalla fine
        // carattere all'inizio della stringa in posizione i
        var carattere_testa = stringa.charAt(i);
        // carattere alla fine della stringa in posizione length -i -1
        var carattere_coda = stringa.charAt(stringa.length - i - 1);

        if(carattere_testa != carattere_coda) {
            // i due caratteri a specchio sono diversi
            // => la parola non è palindorma
            caratteri_uguali = false;
        }
    }

    return caratteri_uguali;
}

// funzione che riceve in input una parola
// resituisce true se la parola è palindroma, false altrimenti
function isPalindroma2(stringa) {

    // invoco la funzione per rovesciare la stringa
    var stringa_rovesciata = rovesciaStringa(stringa);

    // verifico se la parola iniziale e la parola rovesciata sono uguali
    if(stringa == stringa_rovesciata) {
        // se sì, la parola iniziale è palindroma
        return true;
    } else {
        // se no, la parola iniziale non è palindroma
        return false;
    }
}

// funzione che rovescia una stringa
// riceve in input una stringa e restituisce la stringa rovesciata
function rovesciaStringa(stringa) {

    // A N N A
    // A N N A

    // ANDREA
    // A N D R E A => split('')
    // A E R D N A => reverse()
    // AERDNA => join('')

    // separo tutti i caratteri della stringa in un array
    var caratteri = stringa.split('');

    // alternativa alla funzione split()
    // var array_caratteri = [];
    // for (var i = 0; i < stringa_inziale.length; i++) {
    //     var singolo_carattere = stringa_inziale.charAt(i);
    //     console.log(singolo_carattere);
    //     array_caratteri.push(singolo_carattere);
    // }
    // console.log(array_caratteri);

    // rovescio l'array di caratteri
    var caratteri_rovesciati = caratteri.reverse();

    // ricompongo la stringa unendo i caratteri dell'array
    var stringa_rovescia = caratteri_rovesciati.join('');

    // alternativa alla funzione join()
    // var stringa_finale = '';
    // for (var i = 0; i < caratteri_rovesciati.length; i++) {
    //     var singolo_carattere = caratteri_rovesciati[i];
    //     console.log(singolo_carattere);
    //     stringa_finale += singolo_carattere;
    // }
    // console.log(stringa_finale);

    // restituisco il risultato dell'elaborazione
    return stringa_rovescia;
}
