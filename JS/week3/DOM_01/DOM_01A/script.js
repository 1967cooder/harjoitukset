/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin tekstisisällön painamalla nappia tekstiksi "Hei, maailma!".
*/
document.getElementById("myButton").addEventListener("click", function () {
    alert("Painiketta klikattiin!")
document.getElementById("teksti").textContent = "Hei maailma";/*päivittää valitun elementin tekstisisällön*/
});
