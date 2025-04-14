/* Kopioi tähän koodi edellisestä tehtävästä. Kopioi myös tekemäsi HTML tiedosto tähän samaan kansioon. 

Toteuta HTML sivu, jolla on nappi. Lisää tälle <button> elementille id. 
Napin vieressä on numero nolla. Lisää tälle tekstipaikalle myös id. 

Lisää napille getElementById:n avulla tapahtumakäsittelijä, joka kuuntelee 
"click" -tapahtumaa. Kun nappia painetaan, verkkosivun numeron arvo kasvaa yhdellä. 


Lisää sivulle toinen nappi, jota klikkaamalla laskurin arvo vähenee yhdellä. 

Muista lisätä uudelle napille oma id ja sille oma tapahtumankuuntelija. Tee kaksi funktiota, jotka muuttavat saman muuttujan arvoa. 
*/

    let current = 0

    document.getElementById("oldButton").addEventListener("click", countUp);
    function countUp () {
    document.getElementById("counter").textContent = current += 1;

    }
    
    
    document.getElementById("newButton").addEventListener("click", countDown);
    function  countDown () {
    document.getElementById("counter").textContent = current -=1;

    }
    countUp (current)
    countDown (current)

