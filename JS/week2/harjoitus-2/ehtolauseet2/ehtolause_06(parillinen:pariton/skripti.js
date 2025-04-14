/* 
Kirjoita funktio nimeltä isEven:
Ota parametrina luku.
Palauta true, jos luku on parillinen, tai false, jos se on pariton.
Kutsu funktiota luvuilla kuten 4 ja 7, ja tulosta "Numero on pariton!" tai "Numero on parillinen!" tuloksen perusteella.
*/
function isEven (num){
    return num % 2 === 0 ? true : false
}
let num1 = 4
let num2 = 7

console.log(isEven (num1) ? "Numero on parillinen!" : "Numero on pariton!")
console.log(isEven (num1) ? "Numero on pariton!" : "Numero on parillinen!")
