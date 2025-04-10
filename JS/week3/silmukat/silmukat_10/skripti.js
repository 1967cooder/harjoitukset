/* 
Kirjoita funktio nimeltä countdownTimer:
- Ota syötteenä luku (esim. 10) ja simuloi lähtölaskenta konsolissa.
- Tulosta jokainen luku laskevassa järjestyksessä nollaan asti
- Lopuksi tulosta: "Aika loppui!".
*/
function countdownTimer () {
    let counter = 10
    
    while (counter >= 0){
        console.log(counter)
        counter -=1
    }
    console.log("Aika loppui!")
}

countdownTimer()