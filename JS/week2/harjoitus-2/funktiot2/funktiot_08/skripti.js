/* Luo funktio nimeltä roundNumber, joka:
Ottaa kaksi parametria, num ja precision.
Palauttaa luvun pyöristettynä annetun tarkkuuden mukaan (desimaalien määrä).
Kutsu funktiota arvoilla 19.56789 ja 2.
Tulosta tulos käyttäen console.log().

Vinkki: Käytä .toFixed().
*/
function roundNumber (num, precision){
    return parseFloat(num.toFixed(precision))
}
let result = roundNumber(19.56789, 2)

console.log(result)



const roundNumberArrow = (num, precision) => parseFloat(num.toFixed(precision));
console.log(roundNumberArrow(19.56789, 2));


