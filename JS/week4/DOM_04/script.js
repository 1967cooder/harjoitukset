/*
Luo HTML tiedosto, jossa on <p> elementti ja nappi. 
Kirjoita JavaScript-koodi, joka vaihtaa tekstiosion näkyvyyttä - päälle ja pois - nappia painamalla.
 */


//ensimmäinen vaihtoehto
//funktiokutsun voi tehdä myös html-elementissä onclick-tapahtuma. silloin ei tarvitse seuraavaa riviä eli funktio kutsua
/*function changeText(){
    let change = document.getElementById("teksti");

    if(change.innerHTML === "esimerkkiteksti"){
        change.innerHTML = " ";
    } else{
        change.innerHTML = "esimerkkiteksti";
    }
}

// example Amy
function change texti() {
if(change.innerHTML === "Helloworld"){
change.innerHTML = "Bye World";
} else {
 change.innerHTML ="Hello world";
}
}

*/

//toinen vaihtoehto
//HTML ssä onclick-tapahtuma paikalla on id(katso html file)
function toggle(){
let element = document.getElementById("hideShow");

if (element.style.display === "none"){
    element.style.display = "block";
} else {
    element.style.display = "none" ;
    }

}
document.getElementById("toggleVisibility").addEventListener("click", toggle);

//näkyvyyttä voi muokata myös css-määrittelemällä visibility: hidden / visible

