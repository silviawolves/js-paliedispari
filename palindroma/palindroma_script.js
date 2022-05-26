'use strict'

//faccio inserire all'utente una parola
const parolaUtente = prompt('Inserisci una parola')

function isPalindroma(parolaDaControllare) {
    //creo una variabile vuota che si confermi se le condizioni si realizzano
    let palindromia = false

    //scompongo quella parola lettera per lettera e creo una costante
    const parolaScomposta = parolaDaControllare.split("")
    console.log(parolaScomposta)
    
    //creo array dove andrà la stessa parola scomposta, ma al contrario
    const parolaAlContrario = []

    //creo un ciclo per percorrere la parola al contrario e pusharla nell'array, al contrario
    for (let k = parolaScomposta.length - 1; k >= 0; k--) {
            parolaAlContrario.push(parolaScomposta[k])
        }
    console.log(parolaAlContrario)

    //confronto i due risultati per capire se sono uguali, se sono uguali - la parola è palindroma
    if (parolaAlContrario === parolaScomposta) {
        palindromia = true
    }

}

console.log(isPalindroma(parolaUtente))

/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/