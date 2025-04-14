/* Toteuta HTML sivu, jolla on nappi. Lisää tälle <button> elementille id. 
Napin vieressä on numero nolla. Lisää tälle tekstipaikalle myös id. 

Lisää napille getElementById:n avulla tapahtumakäsittelijä, joka kuuntelee 
"click" -tapahtumaa. Kun nappia painetaan, verkkosivun numeron arvo kasvaa yhdellä. 

*/

document.getElementById("myButton").addEventListener("click", function() {
document.getElementById("counter").textContent = current + 1;
})


    