// Tee funktio logEvenNumbers, joka:
// - tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä tällä kaavalla:  2, 98, 4, 96, ..., 50.
// - Tulosta luvut samalle riville konsolissa.

// Tulostaa: 2, 98, 4, 96, ..., 50
function logEvenNumbers() {
    const numbers = [];
    for (let i = 2; i <= 50; i += 2) {
        numbers.push(i);
        if (i !== 50) { // vältetään duplikaatti 50
            numbers.push(100 - i);
        }
    }
    console.log(numbers.join(", "));
}

logEvenNumbers();

 