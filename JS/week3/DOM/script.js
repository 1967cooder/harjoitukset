
//Jos on vain yksi nappula joka tekee tätä yhtä työtä, käytä tätä:

document.getElementById("press").addEventListener("click", function () {
document.getElementById("content").textContent = "Hei maailma";

});

//jos on USEAMPI eri elementti joka käyttäytyy samanlailla, käytä tätä:
document.getElementById("press").addEventListener("click", hello);
function hello() {
document.getElementById("content");
textContent = "Hi World!";
}


function updateText (){
  const element = getElementById (content);
  element.textContent = "Hei, maailma!"

}