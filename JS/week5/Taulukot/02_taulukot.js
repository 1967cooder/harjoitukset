

// Harjoitus 1: Määritä taulukon pituus ja tarkista ehto
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
let pituus = myAlphabet.length // Määritetään taulukon pituus

console.log(myAlphabet)
console.log("Taulukon pituus on:",  myAlphabet.length)
/*
Luo funktio nimeltä myAlphabetLength, joka tulostaa myAlphabet-taulukon pituuden.
Jos pituus on 5 tai enemmän, tulosta: "Taulukon pituus on riittävä".
Muussa tapauksessa tulosta: "Taulukon pituus on liian lyhyt."
*/
// Kirjoita funktiosi tähän
// Tarkistetaan ehto: onko taulukossa vähintään 5 kirjainta?
function myAlphabetLength(){
 let length = 7// tai 7 paikalle --> myAlphabetLength.length
if (length >=5 ) {
    console.log("Taulukon pituus on riittävä")
} else {
    console.log("Taulukon pituus on liian lyhyt")
}
}
myAlphabetLength()


// Harjoitus 2: Käy läpi planets-taulukko ja tulosta jokainen planeetta ja sen indeksi
const planets = ["Merkurius", "Venus", "Maa", "Mars", "Jupiter"];
/*
Tulosta jokainen planeetta planets-taulukosta ja sen indeksi.
Odotettu tulos:
"Planeetta: Merkurius, Indeksi: 0"
...
"Planeetta: Jupiter, Indeksi: 4"
*/
// Kirjoita koodisi tähän
for (let i = 0; i < planets.length; i++)
    console.log("Planeetta: "  + planets[i] + ", Indeksi: " + i)


// Harjoitus 3: Tulosta taulukon alkioiden tyypit käyttäen mixedValues-taulukkoa
const mixedValues = [42, "Heippa", true, { nimi: "Kettu" }, null, undefined];

/*
Käy läpi mixedValues-taulukko ja tulosta jokainen alkio, sen indeksi ja tietotyyppi.
Odotettu tulos:
"Alkio: 42, Indeksi: 0, Tyyppi: number"
...
"Alkio: undefined, Indeksi: 5, Tyyppi: undefined"
*/
// Kirjoita koodisi tähän

mixedValues.forEach((arvo, indeksi) => {
    console.log(`Alkio: ${arvo}, Indeksi: ${indeksi}, Tyyppi: ${typeof arvo}`)
})



// Harjoitus 4: Tulosta jokainen myArr-taulukon alkio ilman silmukkaa
let myArr = [1, "Koira", 3.14, false];

/*
Tulosta jokainen alkio myArr-taulukosta ilman silmukan käyttöä.
Odotettu tulos: 1, "Koira", 3.14, false
*/
// Kirjoita koodisi tähän
console.log(myArr[0])
console.log(myArr[1])
console.log(myArr[2])
console.log(myArr[3])



// Harjoitus 5: Etsi yleiset eläinlajit elainvarasto1 ja elainvarasto2 taulukoista
let elainvarasto1 = ["Kettu", "Peura", "Pöllö", "Karhu"];
let elainvarasto2 = ["Karhu", "Susi", "Kotka", "Kettu"];

/*
Tunnista ja tulosta eläinlajit, jotka löytyvät molemmista taulukoista.
Odotettu tulos:
"Yhteinen laji: Kettu"
"Yhteinen laji: Karhu"
*/
// Kirjoita koodisi tähän
elainvarasto1.forEach((elain) => {// forEach menee kaiki eleimien  läpi elainvarasto1:ssa
    if (elainvarasto2.includes(elain)){//includes tarkistaa onko elain elainvarasto2:ssa. Jos on --> tulosta consolista
        console.log("Yhteinen  laji:" + elain)
    }
})


// Harjoitus 6: Tulosta jokaisen eläinnimen kirjaimet animalNames-taulukosta
let animalNames = ["Leijona", "Tiikeri", "Panda"];

/*
Tulosta jokaisen animalNames-taulukon alkion kaikki kirjaimet.
Odotettu tulos:
"Kirjaimet sanassa 'Leijona': L, e, i, j, o, n, a"
...
"Kirjaimet sanassa 'Panda': P, a, n, d, a"
*/
// Kirjoita koodisi tähän

animalNames.forEach((animal) => {
    let kirjaimet = animal.split('').join(', ')
    console.log(`Kirjaimet sanassa '${animal}': ${kirjaimet}`)
})


// Harjoitus 7: Suodata vain positiiviset lämpötilat temperatures-taulukosta
let temperatures = [-10, 5, -3, 15, -8, 20, 2];

/*
Suodata ja tulosta vain positiiviset arvot temperatures-taulukosta.
Odotettu tulos: [5, 15, 20, 2]
*/
// Kirjoita koodisi tähän
let positiiviset = temperatures.filter(function(lampotila){
    return lampotila > 0
})
console.log(positiiviset);

// Harjoitus 8: Etsi "Kettu":n indeksi zooAnimals-taulukosta
let zooAnimals = ["Elefantti", "Kirahvi", "Panda", "Kettu", "Kenguru"];

/*
Etsi ja tallenna "Fox":n indeksi zooAnimals-taulukosta.
Odotettu tulos: "Fox:n indeksi: 3"
// Kirjoita koodisi tähän*/
for(let i = 0; i < zooAnimals.length; i++) {
    if (zooAnimals[i] == "Kettu"){
        console.log("Kettu:n indeksi:" + i) 
    }
}
//or
let indeksi = zooAnimals.indexOf("Kettu")
console.log("Kettu:n indeksi:" + index)
    


// Harjoitus 9: Yritä etsiä eläin, jota ei ole zooAnimals-taulukossa
/*
Etsi "Pingviini":n indeksi zooAnimals-taulukosta.
Jos sitä ei löydy, tulosta "Pingviini ei ole eläintarhassa."
Odotettu tulos: -1*/
// Kirjoita koodisi tähän
let index = zooAnimals.indexOf("Pingviini")

if (index ===  -1) {
    console.log("Pingviini ei ole eläintarhassa.")
} else {
    console.log("Pingviini:n indeksi: " + index);
}


// Harjoitus 10: Korvaa "Kirahvi" sanalla "Alpakka" zooAnimals-taulukossa
/*
Odotettu tulos: ["Elefantti", "Alpakka", "Panda", "Kettu", "Kenguru"]
*/
// Kirjoita koodisi tähän
let index = zooAnimals.indexOf("Kirahvi");
if (index !== -1) {
    zooAnimals[index] = "Alpakka";
}
 console.log(zooAnimals);


// Harjoitus 11: Lajittele safariAnimals-taulukko aakkosjärjestykseen
let safariAnimals = ["Zeebra", "Leopardi", "Elefantti", "Gazelli"];
/*
Odotettu tulos: ['Elefantti', 'Gazelli', 'Leopardi', 'Zeebra']
*/
// Kirjoita koodisi tähän
safariAnimals.sort()
console.log(safariAnimals)


// Harjoitus 12: Käännä safariAnimals-taulukon järjestys
/*
Käännä safariAnimals-taulukon järjestys päinvastaiseksi.
Odotettu tulos: ['Zeebra', 'Leopardi', 'Gazelli', 'Elefantti']
*/
// Kirjoita koodisi tähän
safariAnimals.reverse()
console.log(safariAnimals)


// Harjoitus 13: Tarkista sisältääkö zooAnimals "Tiikeri":n
/*
Odotettu tulos:
true (jos sisältää)
false (jos ei sisällä)
*/
// Kirjoita koodisi tähän
let index = safariAnimals.indexOf("Tiikerii")

if (index ==! -1) {
    console.log(true)
} else {
    console.log(false);
}


// Harjoitus 14: Etsi kaikki "Jonna":n esiintymät attendees-taulukossa
let attendees = ["Jonna", "Santtu", "Jonna", "Alex", "Jonna"];

/*
Etsi kaikki kohdat, joissa "Jonna" esiintyy attendees-taulukossa.
Odotettu tulos: [0, 2, 4]
*/
// Kirjoita koodisi tähän
let jonnaIndexes = []
attendees.forEach ((attendee, index) => {
    if (attendee === "Jonna") {
jonnaIndexes.push(index)
    }
})
console.log(jonnaIndexes)

// Harjoitus 15: Muunna kaikki attendees-taulukon nimet isoiksi kirjaimiksi
/*
Luo uusi taulukko, jossa jokainen attendees-taulukon nimi on kirjoitettu isoilla kirjaimilla.
Odotettu tulos: ['JONNA', 'SANTTU', 'JONNA', 'ALEX', 'JONNA']
*/
// Kirjoita koodisi tähän
let capitalizedAttendees = attendees.map((attendee) => attendee.toUpperCase());
console.log(capitalizedAttendees); 


// Harjoitus 16: Yhdistä forestAnimals- ja farmAnimals-taulukot
let forestAnimals = ["Peura", "Karhu", "Susi"];
let farmAnimals = ["Hevonen", "Lammas", "Vuohi"];

/*
Yhdistä forestAnimals ja farmAnimals uuteen taulukkoon.
Odotettu tulos: ["Peura", "Karhu", "Susi", "Hevonen", "Lammas", "Vuohi"]
*/
// Kirjoita koodisi tähän

let animals = [...forestAnimals, ...farmAnimals]
console.log(animals.join(", "))


// Harjoitus 17: Poista ensimmäinen ja viimeinen alkio birdSpecies-taulukosta
let birdSpecies = ["Kotka", "Pöllö", "Haukka", "Pääsky", "Pingviini"];

/*
Odotettu tulos: ['Pöllö', 'Haukka', 'Pääsky']
*/
// Kirjoita koodisi tähän
birdSpecies.unshift("Kotka")
birdSpecies.pop("Pingviini")
console.log(birdSpecies)

// Harjoitus 18: Käytä `splice`:a poistaaksesi ja korvataksesi arvoja numbers-taulukossa
let numbers = [10, 20, 30, 40, 50];

/*
Käytä splice-metodia poistamaan "30" ja korvaamaan se arvoilla "25" ja "27".
Odotettu tulos: [10, 20, 25, 27, 40, 50]
*/
// Kirjoita koodisi tähän
numbers.splice(2,1, "25", "27")
console.log(numbers )


// Harjoitus 19: Korota jokaista hintaa 10 % käyttäen `map`-metodia
let prices = [5, 10, 15, 20];

/*
Luo uusi taulukko, jossa jokainen hinta on kasvatettu 10 %.
Odotettu tulos: [5.5, 11, 16.5, 22]
*/
// Kirjoita funktiosi tähän
let increasedPrices = prices.map((price) => price * 1.1)// 10 % korotus
console.log(increasedPrices)


// Harjoitus 20: Suodata `filter`:in avulla sanat, jotka ovat pidempiä kuin 5 kirjainta
let words = ["omena", "banaani", "kirsikka", "kiivi", "mansikka"];

/*
Luo uusi taulukko, joka sisältää vain sanat, joissa on yli 5 kirjainta words-taulukosta.
Odotettu tulos: ['banaani', 'kirsikka', 'mansikka']
*/
// Kirjoita funktiosi tähän
let longWords = words.filter(word => word.length > 5)
console.log(longWords)