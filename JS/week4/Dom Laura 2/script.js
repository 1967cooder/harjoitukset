//id="tekstiInput" id="tekstiOutput"

document.getElementById("tekstiInput").addEventListener("input", function(event){
document.getElementById("tekstiOutput").textContent = event.target.value;

})
// ylempi tekee saman kuin alla

//funktio tarvitsee toimiakseen parametrin funktion ulkopuolelta
function liveUpdate (event){
    //muokataan käyttäjän syötä sivun p-elementtiin
    document.getElementById("tekstiOutput").textContent = event.target.value;
}

//funktiota kutsutaan, kuin syötetään tekstiä
document.getElementById("tekstiInput").addEventListener("input", )