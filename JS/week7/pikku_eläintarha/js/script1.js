let animals = [
    { name: "kssa", type: "nisäkäs" }, 
    { name: "koira", type: "nisäkäs" },
    { name: "rupikonna", type: "sammakkoeläin" },
    { name: "kurki", type: "lintu" },
    { name: "silakka", type: "kala" },
    { name: "kameleontti", type: "matelija" },
    { name: "särki", type: "kala" },
    { name: "papukaja", type: "lintu" },
    { name: "närhi", type: "lintu" },
];
//ensi otetaan animallist HTMLsta
const animalList = document.getElementById("animalList");
const addButton = document.getElementById("addAnimal");//7
const newNameInput = document.getElementById("newAnimalName");//8
const newTypeSelect = document.getElementById("newAnimalType");//8
const filterSelect = document.getElementById("filterType");//11
const sortButton = document.getElementById("sortAnimals");
const searchInput = document.getElementById("searchAnimal");

//1
function renderList(){
    //6
//tyhjentää ja lataa uudelleen
animalList.innerHTML = ""

//taulukko johon suodetaan eläimet
let filtered = [];//11/1

let filterType = filterSelect.value//saadaan arvot//12
let searchTerm = searchInput.value.trim().toLowerCase();

//13 tehdään silmukka tarkistamaan onko  nimen arvot  vasta tyypiin arvoo
for(let i = 0; i < animals.length; i++){//käy kaikien elementien läpi
    const a = animals[i];

//jos toinen ehdoista täytyy, silmukan kierros päättyy tähän
    if(filterType !== "kaikki" && a.type !== filterType){//valitsee kaikki muutt paitsi "Kaikki"
    continue;
    }
//jos eläimen nimi ei sisällä haettua sanaa tai osa sanasta myös pienimällä kirjaimilla
    if (!a.name.toLowerCase().includes(searchTerm)){
        continue;//hyppätää seuraavaan silmukan kierrokseen Eläin ohitetaan (ei lisätä listaan).
    }
    //jos tapahtui "continue", tätä ei suoriteta
    filtered.push(a)//lisää eläimen filtered taulukkoon
}

    //2
 //pitää mennä kaikkien nimien läpi että saadaan ne näkyvillä  
 //näyttää vai suodatut eläimet 
    filtered.forEach((animal) => {
        let li = document.createElement("li");
//3
 // otetaan animals arvot( name ja type ) spanin kanssa voi erotella teksti näkymätämällä tavalla   
 //class on kuin on monta   
        li.innerHTML = `
   <span class="animal-name">${animal.name}</span>
    <span class="animal-type">${animal.type}</span>
    `;//muodostaa  nimet ja tyypit

        //4
        animalList.appendChild(li);//laitetaan nimet  ja tyypit kiini uliin
    });

    //7 Lisätään eläin
    addButton.addEventListener("click", (event) => {
        event.preventDefault()//ei tarvitsee, mutta on pakko kuin on form. 
        // laitetaan aina joka tapauksessa

        let name = newNameInput.value.trim().toLowerCase();//9
        let type = newTypeSelect.value.toLowerCase();

        if (name) {//10
        animals.push({ name, type });//(laitta nimi)
         newNameInput.value = "";//tyhjentää kentä
         renderList();
        
    }

    });

    filterSelect.addEventListener("change", renderList);
    searchInput.addEventListener("input", renderList);
}
//5
renderList();
