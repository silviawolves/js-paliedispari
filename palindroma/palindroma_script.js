'use strict'

//faccio inserire all'utente una parola
const parolaUtente = prompt('Inserisci una parola')

//creo una variabile vuota che si confermi se le condizioni si realizzano
let palindromia = false

//devo creare una funziona che scomponga la parola inserita in lettere
//che scorra dentro gli array 

function isPalindroma(parolaUtente) {

    //scompongo quella parola lettera per lettera e creo una costante
    const parolaScomposta = parolaUtente.split("")
    console.log(parolaScomposta)
    const parolaAlContrario = []

    for (let k = parolaScomposta.length - 1; k >= 0; k--) {
            console.log(parolaScomposta[k])
            parolaAlContrario.push(parolaScomposta[k])
        }
    
    console.log(parolaAlContrario)

    if (parolaAlContrario === parolaScomposta) {
        palindromia === true
    }
}

console.log(isPalindroma(parolaUtente))

/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/