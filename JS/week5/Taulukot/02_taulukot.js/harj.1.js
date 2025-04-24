// Harjoitus 1: Määritä taulukon pituus ja tarkista ehto
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
let pituus = myAlphabet.length // Määritetään taulukon pituus

console.log(myAlphabet)
console.log("Taulukon pituus on:",  myAlphabet.length)
/*
Luo funktio nimeltä myAlphabetLength, joka tulostaa myAlphabet-taulukon pituuden.
Jos pituus on 5 tai enemmän, tulosta: "Taulukon pituus on riittävä".
Muussa tapauksessa tulosta: "Taulukon pituus on liian lyhyt."
*/
// Kirjoita funktiosi tähän
// Tarkistetaan ehto: onko taulukossa vähintään 5 kirjainta?
function myAlphabetLength(){
 let length = 7// tai 7 paikalle --> myAlphabetLength.length
if (length >=5 ) {
    console.log("Taulukon pituus on riittävä")
} else {
    console.log("Taulukon pituus on liian lyhyt")
}
}
myAlphabetLength()