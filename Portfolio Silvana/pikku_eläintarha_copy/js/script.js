//Odotetaan, että HTML-sivu on latautunut kokonaan, 
// ennen kuin aloitetaan mitään toimintoja.
document.addEventListener("DOMContentLoaded", () => {
// // 1. Eläin­taulukko olioina (nimi + tyyppi)   
let animals = [
    { name: "Kettu", type: "Nisäkäs" }, 
    { name: "Karhu", type: "Nisäkäs" },
    { name: "Kotka", type: "Lintu" },
    { name: "Kilpikonna", type: "Matelija" },
    { name: "Sammakko", type: "Sammakkoeläin" },
    { name: "Lohi", type: "Kala" },
];
// DOM-elementit
const animalList = document.getElementById("animalList");
const searchInput = document.getElementById("searchAnimal");
const filterSelect = document.getElementById("filterType");
const sortButton = document.getElementById("sortAnimals");
const newNameInput = document.getElementById("newAnimalName");
const newTypeSelect = document.getElementById("newAnimalType");
const addButton = document.getElementById("addAnimal");

// 2–5. Renderöinti: haku + filtteri + lista
function renderList() {
// Tyhjennetään lista ennen uuden sisällön luomista.
   animalList.innerHTML = "";

// suodatus 
// Haetaan haettu nimi ja valittu eläintyyppi suodatusta varten.
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filterType = filterSelect.value; 

//Luodaan tyhjä taulukko, johon tallennetaan suodatetut eläimet.
    let filtered = [];

    for(let i = 0; i < animals.length; i++) {
    const a = animals[i];

 //tarkista ensi tyyppi 
 // Jos tyyppi ei vastaa suodatusta, ohitetaan (continue). 
 if (filterType !== "Kaikki" && a.type !== filterType) {
    continue;
 }
 //Jos nimi ei sisällä hakusanaa, ohitetaan.
 if(!a.name.toLowerCase().includes(searchTerm)){
    continue;
 }
 // jos molemmat ehdot täyttyvät, lisäätään eläin filtered taulukkoon
 filtered.push(a);
}

//Jos suodatuksen jälkeen ei jää yhtään eläintä, 
// näytetään viesti "Eläimiä ei löytynyt."
if (filtered.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Eläimiä ei löytynyt.";
    li.classList.add("no-results");
    animalList.appendChild(li);
    return;
}
//Luodaan jokaiselle suodatetulle eläimelle oma listaelementti, 
// jossa näkyy nimi, tyyppi ja "Poista"-nappi.
filtered.forEach((animal, idx) => {
    const li = document.createElement("li");
    li.classList.add("animal-card");

    li.innerHTML = `
    <span class="animal-name">${animal.name}</span>
    <span class="animal-type">${animal.type}</span>
    <button class="delete-btn" data-index="${idx}">Poista</button>
    `;
    animalList.appendChild(li)
});

//6.Poistonapit.Lisätään "Poista"-nappeihin tapahtumakuuntelijat:
document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {

 //Selvitetään mikä eläin halutaan poistaa (käytetään data-index-attribuuttia).
        const i = parseInt(e.target.dataset.index);

//// huom! indeksi perustuu filtered-taulukkoon, etsitään alkuperäisestä
 //Poistetaan se alkuperäisestä taulukosta animals.     
        const toRemove = filtered[i];
        animals = animals.filter((a) => a !== toRemove);

 //Päivitetään lista kutsumalla renderList().       
        renderList();
    });
});
}
// 3. Lisää eläin
//Kun käyttäjä lisää uuden eläimen:
addButton.addEventListener("click", (e) => {

//Estetään lomakkeen oletustoiminto (preventDefault()).
    e.preventDefault();

 //Haetaan syötetyt arvot.   
    const name = newNameInput.value.trim();
    const type = newTypeSelect.value;

 // Jos nimi on annettu, lisätään uusi olio taulukkoon  
    if(name) {
        animals.push({ name, type });

 //Tyhjennetään nimi-kenttä.       
        newNameInput.value = "";

 //Päivitetään lista.       
        renderList();
    }   
});

// 4. Suodatus ja 5. Haku – live-päivitys
//Kun käyttäjä kirjoittaa hakukenttään tai valitsee suodattimen, 
// lista päivittyy automaattisesti.
searchInput.addEventListener("input", renderList);
filterSelect.addEventListener("change", renderList);

// 7. Lajittelu
//Kun klikataan "Järjestä A–Ö", eläintaulukko lajitellaan aakkosjärjestykseen 
// suomen kielen mukaan, ja lista piirretään uudelleen.
//localCompare vertailee mikä kirjaimista on ensin ja mikä seurava
sortButton.addEventListener("click", () => {
    animals.sort((a, b) =>  a.name.localeCompare(b.name, "fi"));
    renderList();
 });
    //Alustava renderöinti(Lopuksi: ensimmäinen renderöinti)
 // Sivun latautuessa suoritetaan heti renderList(), 
 // jotta käyttäjä näkee eläimet heti alussa. 
 renderList();
});