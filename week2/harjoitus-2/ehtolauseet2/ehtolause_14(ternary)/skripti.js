/* 
Kirjoita funktio nimeltä rainAdvice:
Ota parametri isRaining.
Käytä ternary operatoria palauttamaan:
- "Pysy sisällä" jos isRaining on tosi.
- "Nauti ulkoilmasta!" muussa tapauksessa.
Kutsu funktiota eri arvoilla isRaining.
*/
function rainAdvice (isRaining) {
    return isRaining === true? "Pysy sisällä" : "Nauti ulkoilmasta!"
}
console.log (rainAdvice (true))
console.log (rainAdvice (false))