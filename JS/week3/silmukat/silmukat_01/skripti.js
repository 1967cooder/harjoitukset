//Tee funktio nimeltä logOddNumbers:
// - Se tulostaa konsoliin kaikki parittomat numerot 1 ja 100 välillä.
// Eli 1, 3, 5, 7, 9, 11 jne. lukuun 99 asti.


function logOddNumbers () {
    for (let i = 1; i <= 100; i++) {
        if(i % 2 !== 0){

            console.log(i)
    }
}
}
logOddNumbers()