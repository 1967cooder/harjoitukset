/* 
Kirjoita funktio nimeltä canEat:
Ota kaksi parametria: isHungry ja hasFood.
Jos molemmat ovat tosi, palauta "Aika syödä!".
Jos jompikumpi on epätosi, palauta "Sinun täytyy löytää ruokaa!"
Kutsu funktiota eri isHungry ja hasFood yhdistelmillä.
*/

function canEat(isHungry, hasFood) {
    if (isHungry && hasFood) {
        return "Aika syödä!";

        } else {
        return "Sinun täytyy löytää ruokaa!";
    }
}
console.log(canEat(true, true))
console.log(canEat(true, false))
console.log(canEat(false, true))
console.log(canEat(false, false))