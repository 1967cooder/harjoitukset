

/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `library`, joka edustaa kirjakokoelmaa.
Jokaisella kirjalla tulee olla ominaisuudet `title` (otsikko), `author` (kirjoittaja) ja `yearPublished` (julkaisuvuosi).
Lisää kokoelmaan vähintään kaksi kirjaoliota.
*/
const library = [
    {title:"kuolema ja Pingviini", author:"Kurkov, Andrei", yarBublished: 1996},
    {title:"Eloquent JavaScript, 4th edition", author:"Haverbeke, Marjin", yarPublished: 2024},
    {title:"Nevermoor: Morriganin koetuksrt", author:"Townsend, Jessica", yarPublished: 2018},
]



/* Tehtävä 2
Hae `library`-kokoelman ensimmäisen kirjan `title` ja tulosta se konsoliin.
Muokkaa toisen kirjan `yearPublished` uudeksi vuodeksi ja tulosta päivitetty kirja konsoliin.
*/

console.log("Ensimäisen kirjan nimi:", library[0].title);
library[1].yarBublished = 2025;
console.log("Toisen kirjan uusi julkaisvuosi:", library[1].yarBublished);

/* Tehtävä 3
Käytä piste-notaatiota lisätäksesi uuden ominaisuuden `genres` (merkkijonotaulukko) ensimmäiseen kirjaan `library`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-tyyppisen ominaisuuden `isAvailable`, joka kertoo onko kirja saatavilla.
*/
library[0].genres = ["Absurdi", "Tragikomiikka"];
console.log("genres:", library[0]);

/* Tehtävä 4
Määrittele konstruktori-funktio nimeltä `Book`, joka luo uusia kirjoja, joilla on `title`, `author`, `yearPublished` ja `genres`.
Luo uusi kirjaolio `Book`-konstruktorilla ja lisää se `library`-kokoelmaan.
*/

class Book {
    constructor(title, author, yearPublished, genres) {
      this.title = title;
      this.author = author;
      this.yearPublished = yearPublished;
      this.genres = genres;
    }
} 
  
  // 3. Uuden kirjan luominen
  const kirja1 = new Book("Alkemisti", "Coelho, Paulo", 1988, "hengellisyys");

  // 4. Lisää kirja kirjastoon
library.push(kirja1);

  // Tarkistetaan
console.log(library);

/* Tehtävä 5
Kirjoita funktio nimeltä `createBook`, joka ottaa parametreina `title`, `author`, `yearPublished` ja `genres` (taulukko).
Funktion tulee palauttaa uusi kirjaolio näillä ominaisuuksilla.
Testaa `createBook`-funktiota luomalla uusi kirja käyttäjän antamilla arvoilla ja tulosta se konsoliin.
*/


//tehdään se myöhemmin

/* Tehtävä 6
Muunna `library`-kokoelma JSON-merkkijonoksi ja tulosta se konsoliin.
Jäsennä JSON-merkkijono takaisin JavaScript-olioksi ja tulosta ensimmäisen kirjan `title` konsoliin.
*/

//tehdään se myöhemmin

/* Tehtävä 7
Luo taulukko nimeltä `students`, jossa jokaisella oppilaalla on `name`, `age` ja `grade`.
Tulosta niiden oppilaiden nimet, joiden arvosana on yli 90.
*/

const students = [
    {name: "Liisa" , age: 28, grade: 88},
    {name: "Matti", age: 27, grade: 93},
    {name: "Emma", age: 32, grade: 70},
    {name: "Antti", age: 41, grade: 95},
]
//suodatetaan hyvät opiskeljat
let goodGrades = students.filter(student => student.grade > 90)

//tulostetaan hyvien opiskelijoiden pelkät nimet
goodGrades.forEach(topStudent => {
console.log(topStudent.age) //age paikalla voi olla name tai grade tulostukseen mitä halutaan
})


/* Tehtävä 8
Määrittele olio nimeltä `car`, jossa on ominaisuudet `brand`, `model`, `year` ja `isElectric`.
Käytä funktiota tarkistamaan onko auto sähköinen. Jos on, tulosta `"This car is eco-friendly!"`, muussa tapauksessa `"This car runs on fuel."`
*/

const car = {

    brand: "Tesla",
    model: "Model 3",
    year: 2022,
    isElectric: true,
}

if (car.isElectric) {//tähän ei tarvitse kirjoittaa == true
    console.log("This car is eco-friendly")
} else {
console.log("This car runs on fuel.")

}
//vaihtoehto ehtolauseelle
car.isElectric ? console.log("This car is eco-friendly") : console.log("This car runs on fuel.");
//vaihtoehto ehtolauseelle  ja tulostamiselle
console.log(car.isElectric ? "sähköauto" : "polttomoottoriauto" )


if (car.year >= 2020){//tässä on pakko laittaa >= 2020
    console.log("Auto on uusi")
} else {
console.log("Auto on vanha")
}

/* Tehtävä 9
Luo `movies`-taulukko, jossa jokainen elokuva on olio, jolla on ominaisuudet `title`, `director` ja `rating`.
Kirjoita silmukka, joka tulostaa kaikkien niiden elokuvien otsikot, joiden arvio on yli 8.
*/

const movies = [
  {title:"Star Wars",director: "George Lucas",rating: 9 },
  {title: "Mission: Impossible", director:"Brian De Palma", rating: 7},
  {title: "Spider-Man", director: "Sam Raimi", rating: 8},
]

//suodataan hyvät elokuvat
let goodRatings = movies.filter(movie => movie.rating > 8)

//tulostetaan hyvien elokuvien nimet
goodRatings.forEach(topMovie => {
  console.log(topMovie.title)
})

/* Tehtävä 10
Kirjoita funktio `findOldestCar`, joka ottaa vastaan taulukon auto-olioita ja palauttaa auton, jolla on varhaisin `year`.
*/

// Kirjoita koodisi tähän

/* Tehtävä 11
Määrittele `userProfiles`-taulukko, joka sisältää käyttäjäolioita.
Jokaisella käyttäjällä tulee olla `username`, `email` ja `isAdmin` -ominaisuudet.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne käyttäjät, jotka ovat ylläpitäjiä.
*/

// Käyttäjäprofiilit
const userProfiles = [
  { username: "matti", email: "matti@example.com", isAdmin: false },
  { username: "liisa", email: "liisa@example.com", isAdmin: true },
  { username: "kalle", email: "kalle@example.com", isAdmin: true },
  { username: "teppo", email: "teppo@example.com", isAdmin: false },
];

// Funktio: suodattaa adminit
function getAdmins(users) {
  return users.filter(user => user.isAdmin);
}

// Testi
const adminUsers = getAdmins(userProfiles);
console.log(adminUsers);

/* Tehtävä 12
Määrittele taulukko nimeltä `orders`, jossa jokaisella tilauksella on `orderId`, `customerName`, `totalAmount` ja `status` ("pending" tai "completed").
Kirjoita funktio, joka palauttaa vain valmiit tilaukset.
*/
const orders = [
  {orderId: 1, customerName:"Maija Meikäläinen" , totalAmount: 49.90, status: "completed"},
  {orderId: 2, customerName:"Pekka Pouta" , totalAmount: 29.50, status: "pending"},
  {orderId: 3, customerName:"Liisa Luminen" , totalAmount: 99.00, status: "completed"},
  {orderId: 4, customerName:"Antti Aurinkoinen" , totalAmount: 15.25, status: "pending"},

]
function getCompletedOrders(){
  return orders.filter(order => order.status === "completed")
}
console.log(getCompletedOrders())

/* Tehtävä 13
Luo olio nimeltä `smartphone`, jolla on ominaisuudet `brand`, `model`, `batteryLife` ja `is5GEnabled`.
Kirjoita funktio, joka tulostaa `"This phone supports 5G!"` jos `is5GEnabled` on `true`, muussa tapauksessa tulostaa `"This phone does not support 5G."`
*/

const smartphone = {
  brand: "Nokia",
  model: 1234,
  batteryLife: "5 yars",
  is5GEnabled: true,
}
if (smartphone.is5GEnabled){
  console.log("This phone supports 5G!")
} else {
  console.log("This phone does not support 5G.")
}
//tai
smartphone.is5GEnabled ? console.log("This phone supports 5G!"): console.log("This phone does not support 5G.");

/* Tehtävä 14
Määrittele olio nimeltä `fox`, jolla on ominaisuudet `name`, `age` ja `habitat`.
Kirjoita funktio, joka tulostaa `"This fox is young"` jos ikä on alle 3, ja `"This fox is an adult"` jos 3 tai enemmän.
*/

const fox = {
  name:" Nelli",
  age: 5,
  habitat:"forest"
}
if (fox.age < 3){
  console.log("This fox is young")
} else {
  console.log("This fox is an adult")
}

/* Tehtävä 15
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `position` ja `salary`.
Kirjoita funktio, joka laskee kaikkien työntekijöiden yhteenlasketun palkan.
*/

const employees = [
{name: "Pekka" , position:"Disainer", salary: 2500 },
{name: "Nelly", position: "Developer", salary: 2800 },
{name: "Alex", position: "Manager", salary: 3000 },

]
function getTotalSalarys(){
  return employees.reduce((total,employee) => total + employee.salary, 0)
}
console.log(getTotalSalarys())