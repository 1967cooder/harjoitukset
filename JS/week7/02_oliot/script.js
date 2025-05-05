/* Tehtävä 1
Luo olio `weather`, jossa on ominaisuudet `temperature`, `humidity` ja `condition` (esim. "Aurinkoinen", "Sateinen").
Kirjoita funktio, joka tulostaa `"Ota sateenvarjo!"` jos sää on sateinen.
*/

const weather = {
    temperature: 30, 
    humidity: 100,
    condition: "sateinen"
}
if (weather.condition === "sateinen")//weathe voi olla kirjoitettu noin w.
    console.log("Ota sateenvarjo")

/* Tehtävä 2
Määrittele olio nimeltä `shoppingCart`, joka sisältää taulukon tuotteista.
Jokaisella tuotteella on `name`, `price` ja `quantity`.
Kirjoita funktio, joka laskee kaikkien ostoskorin tuotteiden kokonaishinnan.
*/

const shoppingCart = {
    products: [
    {name: "Maito", price: 1.5, quantity: 2},
    {name: "Leipä", price: 2.0, quantity: 1},
    {name: "Juusto", price: 3.75, quantity: 1},
], 
};
function getCarTotal(){
    return shoppingCart.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
}
console.log (getCarTotal(shoppingCart));

/* Tehtävä 3
Luo taulukko nimeltä `restaurants`, jossa jokainen ravintola on olio, jolla on ominaisuudet `name`, `cuisineType` ja `rating`.
Kirjoita funktio, joka palauttaa vain ne ravintolat, joiden arvio on 4 tai enemmän.
*/

const restaurants = [
    {name: "Ravintola1", cuisineType: "Bulgarialainen", rating: 5},
    {name: "Ravintola2" , cuisineType: "Suomalainen", rating: 5.5},
    {name: "Ravintola3", cuisineType: "Taimaalainen", rating: 4},
]
function getBestRestorants(){
    return restaurants.filter(r => r.rating >= 5)
}

console.log(getBestRestorants())
/* Tehtävä 4
Määrittele olio nimeltä `bankAccount`, jossa on ominaisuudet `accountHolder`, `balance` ja `transactions` (numeroiden taulukko).
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

const bankAccount = {
    accountHolder: "Linda Karjalainen",
    balance: 500,
    transactions: [+50, -100, -100, +200],
}
function finalBalance(account) {
    return account.balance + account.transactions.reduce((sum, t) =>  sum + t, 0);
}
console.log(finalBalance(bankAccount))

/* Tehtävä 5
Luo taulukko `students`, jossa jokaisella opiskelijalla on `name`, `scores` (numeroiden taulukko) ja `averageScore` (aluksi null).
Kirjoita funktio, joka laskee ja päivittää kunkin opiskelijan `averageScore`-arvon.
*/

const students = [
    {name: "Päivi", scores: [3, 6, 2], averageScore: null}, 
    {name: "Paavo", scores: [4, 3, 5], averageScore: null}, 
]
 function calculateAveriges(list){
    list.forEach((s) => { //s on student
        const sum = s.scores.reduce((a, b) => a + b, 0)
        s.averageScore = sum / s.scores.length
    })
 }
/* Tehtävä 6
Määrittele taulukko nimeltä `courses`, jossa jokaisessa kurssissa on `courseName`, `instructor` ja `studentsEnrolled`.
Kirjoita funktio, joka tulostaa niiden kurssien nimet, joissa on yli 30 opiskelijaa.
*/
const courses = [
    {courseName: "Biology" ,  instructor: "Minna", studentsEnrolled: 22 },
    {courseName: "History",  instructor: "Pekka", studentsEnrolled: 30 },
    {courseName: "Mathics",  instructor: "jussi", studentsEnrolled: 35},
];
let bigCourses = courses.filter(course => course.studentsEnrolled > 30)
bigCourses.forEach(course => {
    console.log(course.courseName)
})
// tai

function vastCourses(courses) {
    courses.forEach((course) => {
       if (course.studentsEnrolled > 30) {
        console.log(course.courseName)
       }
    });
}
vastCourses(courses)

/* Tehtävä 7
Luo olio `pet`, jossa on ominaisuudet `species`, `name` ja `isVaccinated`.
Kirjoita funktio, joka palauttaa `"Rokotusta tarvitaan"` jos lemmikkiä ei ole rokotettu.
*/

const  pet = {
    species: "Koira",
    name: "Mini",
    isVaccinated: false,
};
function checkVaccination(p) {//pet
    if (!p.isVaccinated) {
        return "Rokotusta tarvitaan"
    } 
    return "Rokotukset ok"

    }

console.log(checkVaccination(pet))

/* Tehtävä 8
Määrittele olio nimeltä `city`, jossa on ominaisuudet `name`, `population` ja `landmark`.
Kirjoita funktio, joka tulostaa `"Tämä on suuri kaupunki!"` jos väkiluku ylittää 1 000 000.
*/

const city = {
    name: "Sofia", 
    population: 1500000,
    landmark: "Uspenskikirkko",
};
function checkCitySize(c) {//c on city
if (c.population > 1000000){
    console.log("Tämä on suuri kaupunki!");
}
}
checkCitySize(city)

/* Tehtävä 9
Luo taulukko `transactions`, jossa jokainen tapahtuma on olio, jolla on `type` ("credit" tai "debit") ja `amount`.
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

const transactions = [
{type: "credit" , amaount: 100},
{type: "debit" , amaount: 150},
{type: "credit" , amaount: 200},
];
function calculateBalance(txns){//txns on trransactions
    return txns.reduce((balance,t) => {
        return t.type === "credit" ? balance + t.amaount : balance - t.amaount;
    }, 0);
}
console.log(calculateBalance(transactions));

/* Tehtävä 10
Määrittele olio nimeltä `foxPack`, joka sisältää taulukon kettuolioita.
Jokaisella ketulla on `name`, `age` ja `furColor`.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne ketut, jotka ovat alle 2-vuotiaita.
*/
const foxPack = {
    foxes: [
        {name:"Peppi", age: 3, furColor: "red" },
        {name:"Lili", age: 1, furColor: "brown" },
    ],
};
function youngFoxes(pack){
    return pack.foxes.filter((f) => f.age < 2);//f. on fox
}
console.log(youngFoxes(foxPack));

/* Tehtävä 11
Luo olio nimeltä `gameCharacter`, jolla on ominaisuudet `name`, `level`, `health` ja `inventory` (taulukko).
Kirjoita funktio, joka tulostaa hahmon koko varustelistan.
*/
const gameCharacter = {
    name: "Player",
    level: 3,
    health: 99,
    inventory: ["Block", "Miekka", "Food"],
};
function printInventory(char){
    console.log("Inventory");//tai console.log(`${char.name} inventory:`);
    char.inventory.forEach((item) => console.log("- " + item));
}
printInventory(gameCharacter);

/* Tehtävä 12
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `role` ja `workingHours`.
Kirjoita funktio, joka etsii ja tulostaa ne työntekijät, jotka työskentelevät yli 40 tuntia viikossa.
*/

const employees = [
    {name:"Minna", role: "Menager", workingHours: 37},
    {name: "Jussi", role: "SM", workingHours: 43},
];
function overTimeWorkers(list){
    list.forEach((emp) => { 
        if(emp.workingHours > 40) {
            console.log(emp.name);
        }
});
}
overTimeWorkers(employees);

/* Tehtävä 13
Luo taulukko `musicAlbums`, jossa jokaisella albumilla on `title`, `artist` ja `releaseYear`.
Kirjoita funktio, joka tulostaa ne albumit, jotka on julkaistu vuoden 2000 jälkeen.
*/

const musicAlbums = [
    {title: "Album A", artist: "Artist1", releaseYear: 1995 },
    {title: "Album B", artist: "Artist2", releaseYear: 2015},  
];
function recentAlbums(albums) {
    albums.forEach((a) => {
        if(a.releaseYear > 2000){
        console.log(a.title);
    }
});
}
recentAlbums( musicAlbums);
/* Tehtävä 14
Määrittele taulukko nimeltä `cars`, jossa jokaisella autolla on `brand`, `model` ja `horsepower`.
Kirjoita funktio, joka etsii ja palauttaa auton, jolla on suurin hevosvoimamäärä.
*/

const cars = [
    {brand: "Ford", model: "PT77", horsepower: 350 },
    {brand: "Volvo", model: "360 KTG", horsepower: 530 },
];
function fastestCar(cars) {
    return cars.reduce((best, car) =>
        car.horsepower > best.horsepower ? car : best
    );
}
console.log(fastestCar(cars));

/* Tehtävä 15
Luo taulukko `airports`, jossa jokaisella lentokentällä on `name`, `country` ja `flightsPerDay`.
Kirjoita funktio, joka etsii lentokentän, jolla on eniten lentoja päivässä.
*/
const airports = [
    {name: "Sofia", country: "Bulgaria", flightsPerDay: 100 },
    {name:"Arlanda", country:"Swiden", flightsPerDay: 500 },
];
function busiestAirport(airports) {
    return airports.reduce((max, ap) => 
        ap.flightsPerDay > max.flightsPerDay ? ap : max
    );
}
console.log(busiestAirport(airports));