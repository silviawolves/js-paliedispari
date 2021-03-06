'use strict'

//faccio scegliere all'utente se pari o dispari, ed il numero da 1 a 5
const sceltaUtente = prompt('Scegli: pari o dispari?')
const numeroUtente = parseInt(prompt('Ora scegli un numero da 1 a 5.'))
console.log(sceltaUtente)
console.log(numeroUtente)

const pariDispari = []
pariDispari.push(sceltaUtente)

//creo una funzione per il numero casuale del PC
function numeroPc() {
    const generoNumeroPc = Math.floor(Math.random() * 5) + 1
    console.log(generoNumeroPc)
    return generoNumeroPc
}

//creo una variabile per recuperare il risultato
const numeroRisultantePc = numeroPc()

//sommo i numeri risultanti tra utente e pc, creando la variabile della somma + il log
let sommaNumeri = numeroUtente + numeroRisultantePc
console.log(`${numeroUtente} + ${numeroRisultantePc} = ${sommaNumeri}`)

//stabilisco se la somma è pari o dispari
function isPari() {
    const resultPari = sommaNumeri % 2 === 0
    return resultPari
}

const risultatoSommaPari = isPari()
console.log(risultatoSommaPari)

//devo paragonare il risultato pari della somma con il valore iniziale inserito dall'utente
if (pariDispari.includes("pari") && risultatoSommaPari) {
    console.log("Ha vinto l'utente!")
} else {
    console.log("Ha vinto il PC!")
}

/*
L’utente sceglie pari o dispari tramite un prompt
L’utente inserisce anche un numero da 1 a 5.
Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer
*/