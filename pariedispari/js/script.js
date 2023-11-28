//Funzione che genera un numero random tra 1 e 5 per il computer
function comNum(){
    let comNum = Math.floor(Math.random() * 5 + 1)
    return comNum
}

//Funzione che definisce se la somma è pari o dispari
function evenOdd(result){
    if(result%2 == 0){
        return true
    }
    else{
        return false
    }
}

//Scelta utente: pari o dispari
let userChoice = prompt(`"pari" o "dispari"`);

while(userChoice != "pari" && userChoice != "dispari"){
    alert(`Devi inserire soltanto "pari" o "dispari", prova di nuovo`)
    userChoice = prompt(`Digita "pari" o "dispari"`);
}

//Scelta utente: da 1 a 5
let userNum = parseInt(prompt(`Digita un numero da 1 a 5`))
console.log('utente',userNum)

if(userNum < 1 || userNum > 5){
    alert(`Il numero deve essere compreso tra 1 e 5, inserisci un nuovo valore`)
}

let com = comNum();
console.log('computer',com)

let sum = userNum + com;
console.log('somma',sum)

let result = evenOdd(sum);

//Risultato
if(result && userChoice == "pari"){
    alert(`Hai vinto! il tuo numero è ${userNum}, il numero del computer è ${com}. La somma è ${sum} e la tua scelta è stata ${userChoice}`)
}
else if(result && userChoice == "dispari"){
    alert(`Hai perso! il tuo numero è ${userNum}, il numero del computer è ${com}. La somma è ${sum} e la tua scelta è stata ${userChoice} `)
}
else if(result == false && userChoice == "dispari"){
    alert(`Hai vinto! il tuo numero è ${userNum}, il numero del computer è ${com}. La somma è ${sum} e la tua scelta è stata ${userChoice}`)
}
else if(result == false && userChoice == "pari"){
    alert(`Hai perso! il tuo numero è ${userNum}, il numero del computer è ${com}. La somma è ${sum} e la tua scelta è stata ${userChoice} `)
}