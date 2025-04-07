/* Luo funktio nimeltä findMax, joka:
Ottaa kolme parametria, a, b ja c.
Palauttaa suurimman näistä kolmesta luvusta.
Kutsu funktiota arvoilla 12, 7 ja 20.
Tulosta tulos käyttäen console.log().

Vinkki: Käytä Math.max().
*/
function findMax (a, b, c){
    return Math.max (a, b, c);
}
console.log (findMax (12, 7, 20));

const findMaxArrow = (a, b, c) => Math.max (a, b, c);

console.log (findMaxArrow (12, 7, 20));