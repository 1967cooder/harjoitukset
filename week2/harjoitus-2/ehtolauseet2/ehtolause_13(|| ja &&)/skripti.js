/* 
Kirjoita funktio nimeltä planAdventure:
Ota kolme parametria: isWeekend, isSunny ja likesFoxes.
Käytä loogisia operaattoreita:
Jos on viikonloppu JA aurinkoista JA pitää ketuista, palauta "Täydellinen päivä kettuseikkailulle!"
Jos on viikonloppu TAI aurinkoista, palauta "Hyvä päivä, mutta ei täydellinen."
Muussa tapauksessa palauta "Ehkä joku toinen päivä."
Kutsu funktiota eri yhdistelmillä ehtoja.
*/
function planAdventure(isWeekend, isSunny, likesFoxes) {
    if (isWeekend && isSunny && likesFoxes){
        return "Täydellinen päivä kettuseikkailulle!"
    }
    else if (isWeekend || isSunny) {
        return "Hyvä päivä, mutta ei täydellinen."

    } else {
        return "Ehkä joku toinen päivä."
    }  
}
console.log (planAdventure (true, true, true))
console.log (planAdventure (false, false, false))
console.log (planAdventure (false, true, false))
console.log (planAdventure (false, false, true))
console.log (planAdventure (true, true, false))