/* Tehtävä 1
Luo olio `weather`, jossa on ominaisuudet `temperature`, `humidity` ja `condition` (esim. "Aurinkoinen", "Sateinen").
Kirjoita funktio, joka tulostaa `"Ota sateenvarjo!"` jos sää on sateinen.
*/

const weather = {
    temperature: 30, 
    humidity: 100,
    condition: "sateinen"
}
if (weather.condition === "sateinen")//weather voi olla kirjoitettu noin w.
    console.log("Ota sateenvarjo");
// tai
const weather1 = {
    temperature: 30, 
    humidity: 100,
    condition: "sateinen"
}

const weather2 = {
    temperature: 30, 
    humidity: 100,
    condition: "Aurinkoinen"
}
    function checkRain(weather){
    if (weather.condition === "sateinen") {
        console.log("Ota sateenvarjo");
      
    } else  if (weather.condition === "Aurinkoinen"){
        console.log("Nauti auringosta")
    } else {
        console.log("Pidä kivaa");
    }

    }
    checkRain(weather1);
    checkRain(weather2);

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
function getCartTotal(){
    return shoppingCart.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
}
console.log (getCartTotal());
/*
//tai
 function calculateTotal(cart){
 let total = 0
 cart.map((item) => {
    total += item.price * item.quantity;
 });
 return total;
}
console.log("Yhtäänsä :", calculateTotal(shoppingCart));
*/


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
    return restaurants.filter(r => r.rating >= 4)
}

console.log(getBestRestorants())


//tai
const topRated = (list) => {
    return list.filter((r) => r.rating >= 4);
};
console.log(topRated(restaurants));

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
    return account.balance + account.transactions.reduce((sum, t) => sum + t, 0);
}
console.log(finalBalance(bankAccount))

//tai
const getFinalBalance = (account) => {
    let total = account.balance;
    account.transactions.map((t) => {
    total += t;
});
return total;
};
console.log("Lopullinen saldo: ", getFinalBalance(bankAccount));


/* Tehtävä 5
Luo taulukko `students`, jossa jokaisella opiskelijalla on `name`, `scores` (numeroiden taulukko) ja `averageScore` (aluksi null).
Kirjoita funktio, joka laskee ja päivittää kunkin opiskelijan `averageScore`-arvon.
*/

const students = [
    {name: "Päivi", scores: [3, 6, 2], averageScore: null}, 
    {name: "Paavo", scores: [4, 3, 5], averageScore: null}, 
]
 function calculateAverages(list){
    list.forEach((s) => { //s on student
        const sum = s.scores.reduce((a, b) => a + b, 0)
        s.averageScore = sum / s.scores.length
    })
 }
 
 //tai
 const calculateAverages1 = (students) => {//Tämä on nuolifunktio
    //Luupataan kaikki oliopt
    students.forEach((student) => {
        let total = 0;
        //Luupataan kukin opiskelijan "scorse"
        student.scores.map((score) => {
            //lasketaan summa
            total += score;
        });
        //Päivitetään keskiarvo
        student.averageScore = total / student.scores.length

    });
 };

 calculateAverages(students);
 calculateAverages1(students);
 console.log(students)
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
//helpompi
function vastCourses(courses) {
    courses.forEach((course) => {
       if (course.studentsEnrolled > 30) {
        console.log(course.courseName)
       }
    });
}
//tai ?
const printBigCourses = (courses) =>
    courses.forEach((course) => {
        if(course.studentsEnrolled >= 30) {
        console.log(course.courseName)
        } else {
         console.log("Liian pieni opiskelijamäärä")
    } 
    })
    //tai tämä ei toimi
   /*const printLargeCourses = (courses) => {
    courses.map((c) => {
        if (c.studentsEnrolled >= 30) {
            console.log(c.courseName)
        }
    })
   }
    printLargeCourses(courses)
    */
vastCourses(courses)
printBigCourses(courses)


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
    //tai
    const checkVaccination1 = (pet) => {
        return pet.isVaccinated ? "Rokotettu" : "Rokotusta Tarvitaan";
    };

console.log(checkVaccination1(pet));


/* Tehtävä 8
Määrittele olio nimeltä `city`, jossa on ominaisuudet `name`, `population` ja `landmark`.
Kirjoita funktio, joka tulostaa `"Tämä on suuri kaupunki!"` jos väkiluku ylittää 1 000 000.
*/

const city = {
    name: "Sofia", 
    population: 1500000,
    landmark: "Uspenskikirkko",
};
function checkCitySize(city) {//c on city
if (city.population > 1000000) {
    console.log("Tämä on suuri kaupunki!");
}
}
const checkCitySize1 = (city) => {
    if (city.population >= 1000000) {
        console.log("Tämä on suuri kaupunki");
    }
};

checkCitySize(city)
checkCitySize1(city)

/* Tehtävä 9
Luo taulukko `transactions`, jossa jokainen tapahtuma on olio, jolla on `type` ("credit" tai "debit") ja `amount`.
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

const transactions = [
{type: "credit" , amount: 100},
{type: "debit" , amount: 150},
{type: "credit" , amount: 200},
];
function calculateBalance(txns){//txns on trransactions
    return txns.reduce((balance,t) => {
        return t.type === "credit" ? balance + t.amount : balance - t.amount;
    }, 0);
}
console.log(calculateBalance(transactions));

//tai
function calculateTransactionBalance(transactions){
let balance = 0
transactions.map((t) => {
    if (t.type == "credit") {
        balance += t.amount;
} else  if (t.type == "debit") {
    balance -= t.amount
}
});
return balance;
}
console.log("Balance: ", calculateTransactionBalance(transactions));

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
function youngFoxes(pack) {
    return pack.foxes.filter((f) => f.age < 2);//f. on fox
}

//tai
const filterAges = (pack) => {
    return pack.foxes.filter((f) => f.age < 2);
}

console.log(youngFoxes(foxPack));
console.log(filterAges(foxPack));

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
//"- " tulostaa 
// - Block
// - Miekka
// - Food

//Tai 
const printInventory1 = (character) => {
    console.log(character.inventory)

 console.log(character.inventory.join(", "))
};

printInventory(gameCharacter);
printInventory1(gameCharacter);

/* Tehtävä 12
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `role` ja `workingHours`.
Kirjoita funktio, joka etsii ja tulostaa ne työntekijät, jotka työskentelevät yli 40 tuntia viikossa.
*/

const employees = [
    {name:"Minna", role: "Manager", workingHours: 37},
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

//tai
const overTimeWorkers1 = (employees) => {
    //Luupataan kaikki oliopt
   employees.forEach((e) => {
       if(e.workingHours >= 40) {
        console.log(e.name, "You have overworking hours")
       } else {
        console.log(e.name, "You are fine")
       }
   });
   }
   
  overTimeWorkers1(employees);




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
    return cars.reduce((best, car) =>//.reduce(...) е метод за масив, 
    // който „сгъва“ всички стойности в една. В този случай: 
    // избира само най-бързата кола.
    //best е най-добрата кола досега (в началото – първата от масива).
    //car е текущата кола, която се сравнява с best.
        car.horsepower > best.horsepower ? car : best//Това е тернарен оператор 
        // (условие в едноредов формат):
        //Ако текущата кола има повече конски сили → вземи нея.
        //Иначе запази досегашната best.
    //Така .reduce() обикаля всички коли и избира тази с най-голяма мощност.
    );
}
console.log(fastestCar(cars));

//tai
const getMostPowerful = (cars) => {
    //käytetään säilyttämään  haluttu auto
    let largest;
    //käytetään vertailemaan hevosvoima
    let measurment = 0;
    cars.map ((car) => {
        //jos löytyy auto suuremmalla hevosvoimalla kuin entinen suuri
        if (car.horsepower > measurment) {
            //Päivitä hevosvoima ja vahvin auto
            measurment = car.horsepower;
            largest = car
        }
    })
    return largest;
}
console.log(getMostPowerful(cars))

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