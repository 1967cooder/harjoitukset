/* Luo funktio nimeltä generateRandomNumber, joka:
Ottaa kaksi parametria, min ja max.
Palauttaa satunnaisen kokonaisluvun min:n ja max:n väliltä (mukaan lukien).
Kutsu funktiota arvoilla 1 ja 10.
Tulosta tulos käyttäen console.log().

Vinkki: Käytä Math.random(), Math.floor() ja yksinkertaista matikkaa.
*/

function generateRandomNumber(min, max) {
    return Math.Floor(Math.random() * (max - min + 1)) + min;
}
console.log(generateRandomNumber(1, 10));


const generateRandomNumberArrow = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

console.log(generateRandomNumberArrow(1, 10));


