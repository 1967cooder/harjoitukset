document.getElementById("nappi").addEventListener("click", function () {
document.getElementById("tekstiOutput").textContent = document.getElementById("tekstiInput").value;

console.log("ensimmäinen tapahtui");
})


//sama asia kuin edellinen

function naytaSyote(){
    //asetetaan muuttujan arvo silloin, kun nappia on painettu
const userInput = document.getElementById("tekstiInput").value;
//korvataan olemassa oleva teksti muuttujan arvolla
document.getElementById("tekstiOutput").textContent = (kayttajaInput);
console.log("toinen tapahtui");

}

//kutsutaan funktiota, kun nappia painetaan
document.getElementById("nappi").addEventListener("click", naytaSyote)