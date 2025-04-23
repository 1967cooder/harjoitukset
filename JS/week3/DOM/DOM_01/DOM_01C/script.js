/* Kopioi tähän koodi edellisestä tehtävästä. Kopioi myös tekemäsi HTML tiedosto tähän samaan kansioon. 

Toteuta HTML sivu, jolla on nappi. Lisää tälle <button> elementille id. 
Napin vieressä on numero nolla. Lisää tälle tekstipaikalle myös id. 

Lisää napille getElementById:n avulla tapahtumakäsittelijä, joka kuuntelee 
"click" -tapahtumaa. Kun nappia painetaan, verkkosivun numeron arvo kasvaa yhdellä. 


Lisää sivulle toinen nappi, jota klikkaamalla laskurin arvo vähenee yhdellä. 

Muista lisätä uudelle napille oma id ja sille oma tapahtumankuuntelija. Tee kaksi funktiota, jotka muuttavat saman muuttujan arvoa. 
*/

document.getElementById("lisaaNappi").addEventListener("click", function() {
    document.getElementById("numero").textContent++;
    });
 
document.getElementById("vahennaNappi").addEventListener("click", function() {
    document.getElementById("numero").textContent--;});