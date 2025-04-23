/*
Luo HTML-tiedosto, joka sisältää:
- <button> taustavärin vaihtamiseen.
- <input>-kenttä, johon käyttäjä voi syöttää värin.
- <p>-elementti, jonka tekstin väri muuttuu syötetyn värin mukaan.

Kirjoita JavaScript-koodi, joka:
- Vaihtaa taustavärin satunnaiseksi, kun painiketta klikataan.
- Päivittää kappaleen tekstivärin vastaamaan käyttäjän syöttämää arvoa.
*/

const bgButton = document.getElementById("backgroundcolor");
const textColorInput = document.getElementById("textColor");
const paragraph = document.getElementById("text");

function changeBackgroundColor(){
const r = Math.floor(Math.random () * 256);
const g = Math.floor(Math.random () * 256);
const b = Math.floor(Math.random () * 256);
document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
bgButton.addEventListener("click", changeBackgroundColor)

function changeTextColor () {
        paragraph.style.accentColor = textColorInput.value

}
textColorInput.addEventListener("input", changeTextColor)
