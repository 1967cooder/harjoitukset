

// Harjoitus 1: Määritä taulukon pituus ja tarkista ehto
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
let pituus = myAlphabet.length // Määritetään taulukon pituus

console.log(myAlphabet)
console.log("Taulukon pituus on:",  myAlphabet.length)
//tai
const myAlphabetLength = (){
    console.log("Taulukon pituus:", myAlphabetLength)
    if (myAlphabetLength >= 5) {
        console.log("Riittava")
    } else {
        console.log("Ei ole riittävä")
    }
}
//tai
let ans = myAlphabet.length >= 5 ? "Riittävä" : "Ei riittävä"
console.log("Tämä on vastaus:", ans)
/*
Luo funktio nimeltä myAlphabetLength, joka tulostaa myAlphabet-taulukon pituuden.
Jos pituus on 5 tai enemmän, tulosta: "Taulukon pituus on riittävä".
Muussa tapauksessa tulosta: "Taulukon pituus on liian lyhyt."
*/
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
for (let i = 0; i < planets.length; i++)
    console.log("Planeetta: "  + planets[i] + ", Indeksi: " + i)

//tai
planets.map("Planeetta: ${planet}, Indeksi: ${index}")



// Harjoitus 3: Tulosta taulukon alkioiden tyypit käyttäen mixedValues-taulukkoa
const mixedValues = [42, "Heippa", true, { nimi: "Kettu" }, null, undefined];
/*
Käy läpi mixedValues-taulukko ja tulosta jokainen alkio, sen indeksi ja tietotyyppi.
Odotettu tulos:
"Alkio: 42, Indeksi: 0, Tyyppi: number"
...
"Alkio: undefined, Indeksi: 5, Tyyppi: undefined"
*/
mixedValues.forEach((arvo, indeksi) => {
    console.log(`Alkio: ${arvo}, Indeksi: ${indeksi}, Tyyppi: ${typeof arvo}`)
})



// Harjoitus 4: Tulosta jokainen myArr-taulukon alkio ilman silmukkaa
let myArr = [1, "Koira", 3.14, false];
/*
Tulosta jokainen alkio myArr-taulukosta ilman silmukan käyttöä.
Odotettu tulos: 1, "Koira", 3.14, false
*/
console.log(myArr[0])
console.log(myArr[1])
console.log(myArr[2])
console.log(myArr[3])

//tai
console.log(myArr[0], myArr[1], myArr[2], myArr[3],)




// Harjoitus 5: Etsi yleiset eläinlajit elainvarasto1 ja elainvarasto2 taulukoista
let elainvarasto1 = ["Kettu", "Peura", "Pöllö", "Karhu"];
let elainvarasto2 = ["Karhu", "Susi", "Kotka", "Kettu"];

/*
Tunnista ja tulosta eläinlajit, jotka löytyvät molemmista taulukoista.
Odotettu tulos:
"Yhteinen laji: Kettu"
"Yhteinen laji: Karhu"
*/
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
animalNames.forEach((animal) => {
    let kirjaimet = animal.split('').join(', ')
    console.log(`Kirjaimet sanassa '${animal}': ${kirjaimet}`)
    //tai console.log("kirjaimet sanassa", name, ", ", letters)
})



// Harjoitus 7: Suodata vain positiiviset lämpötilat temperatures-taulukosta
let temperatures = [-10, 5, -3, 15, -8, 20, 2];
/*
Suodata ja tulosta vain positiiviset arvot temperatures-taulukosta.
Odotettu tulos: [5, 15, 20, 2]
*/
let positiiviset = temperatures.filter(function(lampotila){
    return lampotila > 0
})
console.log(positiiviset);
//tai
let positiiviset = [...temperatures].filter((temp) => > 0)
console.log(positiiviset);




// Harjoitus 8: Etsi "Kettu":n indeksi zooAnimals-taulukosta
let zooAnimals = ["Elefantti", "Kirahvi", "Panda", "Kettu", "Kenguru"];
/*
Etsi ja tallenna "Fox":n indeksi zooAnimals-taulukosta.
Odotettu tulos: "Fox:n indeksi: 3"
*/
for(let i = 0; i < zooAnimals.length; i++) {
    if (zooAnimals[i] == "Kettu"){
        console.log("Kettu:n indeksi:" + i) 
    }
}
//or
let indeksi = zooAnimals.indexOf("Kettu")
console.log("Kettu:n indeksi:" + index)
//or
  let foxIndex = zooAnimals.indexOf("Kettu")
console.log(`Ketunvindeksi: ${foxIndex}`)



// Harjoitus 9: Yritä etsiä eläin, jota ei ole zooAnimals-taulukossa
/*
Etsi "Pingviini":n indeksi zooAnimals-taulukosta.
Jos sitä ei löydy, tulosta "Pingviini ei ole eläintarhassa."
Odotettu tulos: -1*/

let index = zooAnimals.indexOf("Pingviini")

if (index ===  -1) {
    console.log("Pingviini ei ole eläintarhassa.")
} else {
    console.log("Pingviini:n indeksi: " + index);
}
//or
const etsiElain = (elain) => {
    let elainIndex = zooAnimals.indexOf(elain)
    if (elainIndex== -1) {
       console.log(`${elain} ei ole eläintarhassa`) 
        console.log(elainIndex)
    }
}



// Harjoitus 10: Korvaa "Kirahvi" sanalla "Alpakka" zooAnimals-taulukossa
/*
Odotettu tulos: ["Elefantti", "Alpakka", "Panda", "Kettu", "Kenguru"]
*/
let kirahviIndex = zooAnimals.indexOf("Kirahvi")
if (kirahviIndex !== -1) {//jos kirahviIndex Ei ole -1, suoritetaan
    zooAnimals[kirahviIndex] = "Alpakka"
}
console.log(zooAnimals)



// Harjoitus 11: Lajittele safariAnimals-taulukko aakkosjärjestykseen
let safariAnimals = ["Zeebra", "Leopardi", "Elefantti", "Gazelli"];
/*
Odotettu tulos: ['Elefantti', 'Gazelli', 'Leopardi', 'Zeebra']
*/
safariAnimals.sort()
console.log(safariAnimals)
//or
let sortedAnimals = [...safariAnimals].sort(
    console.log(sortedAnimals)
)


// Harjoitus 12: Käännä safariAnimals-taulukon järjestys
/*
Käännä safariAnimals-taulukon järjestys päinvastaiseksi.
Odotettu tulos: ['Zeebra', 'Leopardi', 'Gazelli', 'Elefantti']
*/
safariAnimals.reverse()
console.log(safariAnimals)
//or
let reverseddAnimals = [...safariAnimals].reverse()
    console.log(sortedAnimals)



// Harjoitus 13: Tarkista sisältääkö zooAnimals "Tiikeri":n
/*
Odotettu tulos:
true (jos sisältää)
false (jos ei sisällä)
*/
let index = safariAnimals.indexOf("Tiikerii")

if (index ==! -1) {
    console.log(true)
} else {
    console.log(false);
}
//or
let onkoTiikeri = safariAnimals.includes("Tiikeri")
console.log(onkoTiikeri)



// Harjoitus 14: Etsi kaikki "Jonna":n esiintymät attendees-taulukossa
let attendees = ["Jonna", "Santtu", "Jonna", "Alex", "Jonna"];
/*
Etsi kaikki kohdat, joissa "Jonna" esiintyy attendees-taulukossa.
Odotettu tulos: [0, 2, 4]
*/
let jonnaIndexes = []
attendees.forEach ((name, index) => {
    if (name == "Jonna") {
jonnaIndexes.push(index)
    }
})
console.log(jonnaIndexes)




// Harjoitus 15: Muunna kaikki attendees-taulukon nimet isoiksi kirjaimiksi
/*
Luo uusi taulukko, jossa jokainen attendees-taulukon nimi on kirjoitettu isoilla kirjaimilla.
Odotettu tulos: ['JONNA', 'SANTTU', 'JONNA', 'ALEX', 'JONNA']
*/
let upperCaseNames = [...attendees].map((name) => name.toUpperCase());
console.log(upperCaseNames); 

//or



// Harjoitus 16: Yhdistä forestAnimals- ja farmAnimals-taulukot
let forestAnimals = ["Peura", "Karhu", "Susi"];
let farmAnimals = ["Hevonen", "Lammas", "Vuohi"];
/*
Yhdistä forestAnimals ja farmAnimals uuteen taulukkoon.
Odotettu tulos: ["Peura", "Karhu", "Susi", "Hevonen", "Lammas", "Vuohi"]
*/
let animals = [...forestAnimals, ...farmAnimals]
console.log(animals.join(", "))
//or
let allAnimals = forestAnimals.contact(farmAnimals)
console.log(allAnimals)


// Harjoitus 17: Poista ensimmäinen ja viimeinen alkio birdSpecies-taulukosta
let birdSpecies = ["Kotka", "Pöllö", "Haukka", "Pääsky", "Pingviini"];
/*
Odotettu tulos: ['Pöllö', 'Haukka', 'Pääsky']
*/
birdSpecies.unshift("Kotka")
birdSpecies.pop("Pingviini")
console.log(birdSpecies)

//or
let newArray = birdSpecies.slice(1, -1)
console.log(newArray)




// Harjoitus 18: Käytä `splice`:a poistaaksesi ja korvataksesi arvoja numbers-taulukossa
let numbers = [10, 20, 30, 40, 50];
/*
Käytä splice-metodia poistamaan "30" ja korvaamaan se arvoilla "25" ja "27".
Odotettu tulos: [10, 20, 25, 27, 40, 50]
*/
numbers.splice(2,1, 25, 27)
console.log(numbers )
//or




// Harjoitus 19: Korota jokaista hintaa 10 % käyttäen `map`-metodia
let prices = [5, 10, 15, 20];
/*
Luo uusi taulukko, jossa jokainen hinta on kasvatettu 10 %.
Odotettu tulos: [5.5, 11, 16.5, 22]
*/
let increasedPrices = prices.map((price) => price * 1.1)// 10 % korotus
console.log(increasedPrices)




// Harjoitus 20: Suodata `filter`:in avulla sanat, jotka ovat pidempiä kuin 5 kirjainta
let words = ["omena", "banaani", "kirsikka", "kiivi", "mansikka"];
/*
Luo uusi taulukko, joka sisältää vain sanat, joissa on yli 5 kirjainta words-taulukosta.
Odotettu tulos: ['banaani', 'kirsikka', 'mansikka']
*/
let longWords = words.filter((word) => word.length > 5)
console.log(longWords)