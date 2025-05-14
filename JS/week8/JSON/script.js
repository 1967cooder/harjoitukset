
/* Tehtävä 1
Luo JavaScript-olio nimeltä `student`, jolla on ominaisuudet:
- `name`
- `age`
- `grade`
Muunna olio JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const student = {name:  "John Doe", age: 30, grade: 30};

const jsonString = JSON.stringify(student);
console.log(jsonString);

/* Tehtävä 2
Ota Tehtävä 1:ssä luotu JSON-merkkijono ja muunna se takaisin JavaScript-olioksi.
Tulosta muunnetun olion `name`-ominaisuus.
*/

const studentObject = JSON.parse(jsonString);
console.log(studentObject);

/* Tehtävä 3
Luo taulukko nimeltä `classroom`, jossa jokainen alkio on opiskelijaa kuvaava olio.
Jokaisella opiskelijaoliolla tulee olla ominaisuudet `name`, `age` ja `grade`.
Muunna taulukko JSON-merkkijonoksi ja tulosta se konsoliin.
*/
const classroom = [
    {name: "Minna", age: 15, grade: 30},
    {name: "Anna", age: 20, grade:50},
]

const jsonString3 = JSON.stringify(classroom);
console.log(jsonString3);

/* Tehtävä 4
Ota Tehtävä 3:ssa luotu JSON-merkkijono, muunna se takaisin JavaScript-taulukoksi
ja tulosta kaikkien opiskelijoiden nimet.
*/
const classroomObject = JSON.parse(jsonString);
console.log(classroomObject);

/* Tehtävä 5
Luo olio nimeltä `weatherReport`, jossa on seuraavat ominaisuudet:
- `temperature`
- `humidity`
- `conditions` (esim. "Sunny", "Rainy")
Muunna olio JSON-merkkijonoksi ja tallenna se muuttujaan `weatherJSON`.
Sen jälkeen pura JSON takaisin olioksi ja tulosta `conditions`-ominaisuus.
*/


const weatherReport = {
    temperature: 30,
    humidity: 100,
    conditions: "Sunny",
}


const weatherJSON = JSON.stringify(weatherReport)
console.log(weatherJSON);

const parcedWeather = JSON.parse(weatherJSON);
console.log(parcedWeather.conditions);


/* Tehtävä 6
Määrittele taulukko nimeltä `movies`, jossa jokaisella elokuvalla on:
- `title`
- `director`
- `rating`

Muunna tämä taulukko JSON-merkkijonoksi ja pura se takaisin JavaScript-olioksi.
Tulosta kaikki elokuvien nimet, joiden arvosana on yli 8.
*/

const movies = [
    {title: "Inception", director: "Christopher Nolan", rating: 5.8},
    {title: "The Matrix", director: "The Wachowskis", rating: 8.7},
    {title: "Parasite", director: "Bong Joon-ho", rating: 7.6},
  ];

  const moviesJSON = JSON.stringify(movies)

  const parsedMovies = JSON.parse(moviesJSON)

  parsedMovies.forEach((movie) => {
    if(movie.rating > 8) {
        console.log("THyvä elokuva:", movie.title);

    //tai
      parsedMovies.filter(movie => movie.rating > 8)
        
    }  
  });

 

/* Tehtävä 7
Kirjoita funktio `filterHighRatedMovies(jsonString)`, joka:
- Ottaa vastaan JSON-merkkijonon, joka edustaa elokuvataulukkoa.
- Muuntaa sen JavaScript-taulukoksi.
- Palauttaa uuden taulukon, joka sisältää vain elokuvat, joiden arvosana on yli 8.
*/

function filterHighRatedMovies(jsonString) {
    const array = JSON.parse(jsonString);//muutetaan takaisin olioksi
    return array.filter((movie) => movie.rating > 8);
}
const highRated = filterHighRatedMovies(moviesJSON)

console.log = filterHighRatedMovies(moviesJSON)
console.log(highRated)

/* Tehtävä 8
Määrittele olio nimeltä `shoppingCart`, jossa on:
- `items` (taulukko tuotteista, jokaisella on `name` ja `price`)
Muunna `shoppingCart` JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const shoppingCart = {

    items: [
        { name: "Apple", price: 0.99 },
        { name: "Bread", price: 2.5 },
        { name: "Milk", price: 1.89 }
    ]
};

const cartJSON = JSON.stringify(shoppingCart);
console.log(cartJSON);

/* Tehtävä 9
Kirjoita funktio `totalCartValue(jsonString)`, joka:
- Saa parametrina ostoskorin JSON-merkkijonon.
- Muuntaa sen JavaScript-olioksi.
- Palauttaa ostoskorin kaikkien tuotteiden yhteenlasketun hinnan.
*/

function totalCartValue(jsonString) {

    const cart = JSON.parse(jsonString);
    const total = cart.items.reduce((sum, item) => sum + item.price, 0);

    //taic onst total paikalle
    let sum = 0;
    cart.items.forEach((item) => {
        sum += item.price
    })
    
       return sum;

    }
  
console.log("ostosten summa on:", totalCartValue(cartJSON))

/* Tehtävä 10
Luo olio nimeltä `gameProgress`, jossa on:
- `level`
- `score`
- `livesRemaining`

Muunna olio JSON-merkkijonoksi ja tulosta se.
Pura JSON takaisin olioksi ja päivitä `score`-ominaisuutta lisäämällä siihen 100 pistettä.
Tulosta päivitetty olio.
*/

const gameProgress = {
    level: 3,
  score: 1450,
  livesRemaining: 2
}

const progressJson = JSON.stringify(gameProgress);
console.log(progressJson)
const parcedProgress = JSON.parse(progressJson);
parcedProgress.score += 100

console.log(parcedProgress)
