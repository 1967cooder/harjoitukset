/* 
Kirjoita funktio nimeltä checkForFox:
Ota looginen parametri hasFox.
Jos hasFox on tosi, palauta "Sinulla on lemmikkikettu!"
Muussa tapauksessa palauta "Ei havaittu kettua!"
Kutsu funktiota arvoilla true ja false ja tulosta tulos.
*/
function checkForFox (hasFox){
    if (hasFox == true){
    console.log ("Sinulla on lemmikkikettu!");
    } else {
        console.log("Ei havaittu kettua!");
    }

}
checkForFox(true);
checkForFox(false);