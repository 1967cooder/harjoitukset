/* Luo funktio nimeltä getLength, joka:
Ottaa yhden parametrin, str.
Palauttaa str:n pituuden käyttäen .length.
Kutsu funktiota merkkijonolla "JavaScript".
Tulosta tulos käyttäen console.log().
*/

function getLength(str){
    return str.length
}
getLength("JavaScript");
console.log(getLength("JavaScript"));

const getLengthArow = (str) => str.length;
console.log(getLengthArow("JavaScript"));