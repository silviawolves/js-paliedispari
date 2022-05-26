'use strict'

//faccio scegliere all'utente se pari o dispari, ed il numero da 1 a 5
const sceltaUtente = prompt('Scegli: pari o dispari?')
const numeroUtente = parseInt(prompt('Ora scegli un numero da 1 a 5.'))
console.log(sceltaUtente)
console.log(numeroUtente)

//creo una funzione per il numero casuale del PC
function numeroPc() {
    const generoNumeroPc = Math.floor(Math.random() * 5) + 1
    console.log(generoNumeroPc)
    return generoNumeroPc
}

const numeroRisultantePc = numeroPc()
let sommaNumeri = numeroUtente + numeroRisultantePc
console.log(`${numeroUtente} + ${numeroRisultantePc} = ${sommaNumeri}`)

//creo una funzione dentro la quale sommo i numeri di utente e pc
//stabilisco se la somma è pari o dispari
//il risultato deve rimandare 



/*
L’utente sceglie pari o dispari tramite un prompt
L’utente inserisce anche un numero da 1 a 5.
Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer
*/