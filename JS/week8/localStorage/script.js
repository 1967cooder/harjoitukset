/* Tehtävä 1
Tallenna merkkijono `"Hello, LocalStorage!"` LocalStorageen avaimella `"message"`.
Hae se ja tulosta konsoliin.
*/
localStorage.setItem("message", "Hello, LocalStorage!");


const messageFromStorage = localStorage.getItem("message")
console.log(messageFromStorage);

 


/* Tehtävä 2
Luo olio `userSettings`, jossa on:
- `theme` ("dark" tai "light")
- `language` ("English", "Spanish" jne.)

Muunna se JSON-merkkijonoksi ja tallenna LocalStorageen.
Hae se, pura JSON ja tulosta `theme`-ominaisuus.
*/

const userSettings = {
    theme: "dark",
    language: "English",
}
const settingsJSON = JSON.stringify(userSettings);
localStorage.setItem("userSettings", settingsJSON);

const storedSettings = localStorage.getItem("userSettings")

const parsedSettings = JSON.parse(storedSettings)

console.log(parsedSettings.theme)

/* Tehtävä 3
Määrittele taulukko `favoriteBooks`, jossa on vähintään kolme kirjaoliota (`title` ja `author`).
Tallenna taulukko LocalStorageen.
Hae ja pura se, sitten tulosta kaikkien kirjojen nimet.
*/
const favoriteBooks = [
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" }
  ];

  localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
const puretutKirjat = localStorage.getItem("favoriteBooks");
const kirjatTaulukkona = JSON.parse(puretutKirjat)
console.log(kirjatTaulukkona);

/* Tehtävä 4
Kirjoita funktio `saveToLocalStorage(key, object)`, joka:
- Muuntaa olion JSONiksi.
- Tallentaa sen LocalStorageen annetulla avaimella.
Testaa tallentamalla olio ja hakemalla se.
*/

function saveToLocalStorage(key, object) {
    const jsonString = JSON.stringify(object);
    localStorage.setItem(key,jsonString)
}
const eläin = {
    nimi: "Kissa",
    ikä: 3,
    laji: "Kissalaji"
};

saveToLocalStorage("eläin", eläin)

const haettuJSON = localStorage.getItem("eläin");
const haettuOlio = JSON.parse(haettuJSON)

console.log(haettuOlio);

/* Tehtävä 5
Kirjoita funktio `getFromLocalStorage(key)`, joka:
- Hakee arvon LocalStoragesta.
- Purkaa sen jos se on JSON.
- Tulostaa haetun arvon.
*/
function getFromLocalStorage(key) {
    const valueFromStorage = localStorage.getItem(key);

 //tarkista löytykö jotain   
 if (valueFromStorage === null) {
    console.log("Mitään ei löytynyt tällä avaimella:", key);
    return   
}
try { //yritä muuntaa teksti JSON-olioksi
const parsedValue = JSON.parse(valueFromStorage);//muuntaa JSON-olio
console.log("Haettu ja muunnettu JSON-olio:", parsedValue);
} catch (error) {
//jos ei ollut JSON, tulosta sellaisenaan
console.log("Haettu arvo ei ole JSON-muodossa:", valueFromStorage);
}
}
const eläin1 = { nimi: "Kissa", ikä: 2 };
localStorage.setItem("eläin1", JSON.stringify(eläin1));
getFromLocalStorage("eläin1");

/* Tehtävä 6
Luo olio `userProfile`, jossa on:
- `username`
- `email`
- `preferences` (olio, jossa on `theme` ja `notifications`)

Tallenna se LocalStorageen.
Hae se ja päivitä `theme` arvoksi `"dark mode"`, sitten tulosta päivitetty olio.
*/

const userProfile = {
    username: "laura123",
    email: "laura@example.com",
    preferences:  { 
        theme: "dark",
        notifications: true
    }
};
localStorage.setItem("userProfile", JSON.stringify(userProfile));
const profileFromStorage = localStorage.getItem("userProfile");
const parsedProfile = JSON.parse(profileFromStorage)
parsedProfile.preferences.theme = "dark mode";

console.log(parsedProfile)

/* Tehtävä 7
Määrittele olio `shoppingList`, jossa on taulukko `items` (merkkijonoja).
Tallenna se LocalStorageen.
Kirjoita funktio `addItemToList(item)`, joka:
- Hakee `shoppingList` LocalStoragesta.
- Lisää uuden tuotteen.
- Tallentaa päivitetyn listan takaisin LocalStorageen.
- Tulostaa päivitetyn listan.
*/

const shoppingList = {
    items: ["maito", "leipä", "juusto", "omenat"]
};
localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

function addItemToList(item) {
 const listFromStorage = localStorage.getItem("shoppingList")

 if (listFromStorage === null) {
    console.log("Ostolista puuttuu localStoragesta.");
    return   
}
const parsedList = JSON.parse(listFromStorage);//Muunna JSON-teksti takaisin olioksi

parsedList.items.push(item);

localStorage.setItem("shopinList", JSON.stringify(parsedList));

console.log("Päivitetty ostoslista:", parsedList.items);
}
addItemToList("banaanit");
addItemToList("kahvi");
 
/* Tehtävä 8
Luo olio `counter`, jossa on:
- `count` (alkaa arvosta 0)
Tallenna se LocalStorageen.
Kirjoita funktio `incrementCounter()`, joka:
- Hakee counterin.
- Kasvattaa `count` arvoa yhdellä.
- Tallentaa päivitetyn counterin.
- Tulostaa uuden arvon.
*/

const counter = { count: 0,}
localStorage.setItem("counter", JSON.stringify(counter));

function incrementCounter() {
   const counterFromStorage = localStorage.getItem("counter");
   if (counterFromStorage === null) {
    console.log("Counteria ei löytynyt.");
    return;
  }
   const parsedCounter = JSON.parse(counterFromStorage);
    parsedCounter.counter++;

   localStorage.setItem("counter", JSON.stringify(parsedCounter.Counter));

   console.log("Päivitetty counter:", parsedCounter.count);
}

incrementCounter();

/* Tehtävä 9
Luo taulukko `tasks`, jossa jokainen tehtävä on olio (`id`, `description`, `completed`).
Tallenna se LocalStorageen.
Kirjoita funktio `markTaskComplete(taskId)`, joka:
- Hakee `tasks` LocalStoragesta.
- Etsii annetulla ID:llä olevan tehtävän ja asettaa `completed` arvoksi `true`.
- Tallentaa päivitetyt tehtävät.
- Tulostaa päivitetyn listan.
*/

const tasks = [
    { id: 1, description: "Siivoa huone", completed: false },
    { id: 2, description: "Tee kotitehtävät", completed: true },
    { id: 3, description: "Käy kaupassa", completed: false }
  ];
  localStorage.setItem("tasks", JSON.stringify(tasks));

  function markTaskComplete(taskId) {
    const taskFromStorage = localStorage.getItem("tasks");
    if (taskFromStorage === null) {
        console.log("Tehtävälistaa ei löytynyt.");
        return;
      }
      const parsedTasks = JSON.parse(taskFromStorage);
      const taskToUpdate = parsedTasks.find(task => task.id === taskId);

      if (!taskToUpdate) {
        console.log("Tehtevä e löytynyt ID:lla:", taskId);
        return;
      }
      taskToUpdate.completed = true;
      localStorage.setItem("tasks", JSON.stringify(parsedTasks))
      console.log("päivitetty tehtävälista:", parsedTasks);
  }

markTaskComplete(3);

/* Tehtävä 10
Kirjoita funktio `clearLocalStorage()`, joka poistaa kaiken LocalStorageen tallennetun datan.
Kutsu funktiota ja varmista että LocalStorage on tyhjä.
*/

// Kirjoita koodi tähän