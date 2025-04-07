/* 
Kirjoita funktio nimeltä checkAnimal:
Ota parametri animalType.

Käytä ternary operatoria palauttamaan:
- "Sinulla on fiksu seuralainen!" jos animalType on "fox".
- "Ei kettu, mutta silti kiva!" muussa tapauksessa.

Kutsu funktiota arvoilla kuten "fox" ja "cat".
*/
function checkAnimal(animalType){
    return animalType === "fox"? "Sinulla on fiksu seuralainen!" : "Ei kettu, mutta silti kiva!"
}
console.log(checkAnimal ("fox"))
console.log(checkAnimal ("cat"))