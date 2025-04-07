/* Luo funktio nimeltä capitalize, joka:
Ottaa yhden parametrin, str.
Palauttaa merkkijonon siten, että ensimmäinen kirjain on iso ja loput pieniä.
Kutsu funktiota merkkijonolla "javascript".
Tulosta tulos käyttäen console.log().

Vinkki: Käytä str[0].toUpperCase() ja str.slice(1).toLowerCase().
*/
function capitalize(str){
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("javascript"));


const capitalizeArrow = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
console.log(capitalizeArrow("javascript"));