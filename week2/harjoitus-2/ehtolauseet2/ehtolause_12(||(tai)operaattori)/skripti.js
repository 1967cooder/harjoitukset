/* 
Kirjoita funktio nimeltä checkFoxLover:
Ota kaksi parametria: age ja likesFoxes.
Jos ikä on 18 tai enemmän:
Tarkista, onko likesFoxes tosi.
Jos on, palauta "Olet aikuinen, joka tykkää ketuista!"
Muussa tapauksessa palauta "Et ole kettufani, mutta se on ok!"
Kutsu funktiota eri ikä- ja mieltymysyhdistelmillä. Varmista, että ohjelma toimii halutulla tavalla. 
*/
function checkFoxLover (age, likesFoxes) {
    if(age >=  18 || likesFoxes) {
        return ("Olet aikuinen, joka tykkää ketuista!")
    } else {
        return ("Et ole kettufani, mutta se on ok!")
    }      
    }
     
console.log(checkFoxLover (18))
console.log(checkFoxLover (20))
console.log(checkFoxLover (16))


