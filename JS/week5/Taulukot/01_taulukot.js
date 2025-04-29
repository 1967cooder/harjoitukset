/* 
Alkuperäinen data:
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade'];







7. Etsi "Mikko":n indeksi taulukossa.  //indexOF("Mikko") - tulostetaan console.log(teamMembers.indexOf("Mikko"))

 //teamMembers.splice(2, 1, "Maria", "Netta")
console.log(teamMembers)
10. Liitä "Ahmad" taulukkoon ja tallenna tulos uuteen taulukkoon, alkuperäistä muuttamatta.  
11. Kopioi koko `teamMembers`-taulukko `slice`-metodilla ja tallenna se uuteen muuttujaan.  
12. Luo `newMembers`-taulukko, jossa on "Tiina" ja "Myrsky", ja yhdistä se `teamMembers`-taulukkoon uuteen taulukkoon.  
13. Etsi kaikki "Joni":in esiintymät ja tallenna niiden indeksit uuteen taulukkoon.  
14. Muunna kaikki nimet taulukossa isoiksi kirjaimiksi, muuttamatta alkuperäistä taulukkoa.  
15. Lajittele `teamMembers` aakkosjärjestykseen.  
16. Käännä `teamMembers`-taulukon järjestys päinvastaiseksi.  
17. Tarkista, onko ainakin yksi jäsen nimeltään "Joni".  
18. Tarkista, onko kaikilla nimillä yli kolme kirjainta.
*/

//1. Käy `teamMembers`-taulukko läpi ja tulosta jokainen nimi konsoliin.  
teamMembers.forEach(name) => {
    console.log(name)
}

//2. Poista taulukon ensimmäinen jäsen. //shift 
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.shift()//Poista taulukon ensimmäinen jäsen. //shift 
console.log(teamMembers)


//3. Poista taulukon viimeinen jäsen.  //pop
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.pop()//Poista taulukon viimeinen jäsen.  //pop
console.log(teamMembers)


//4. Lisää uusi jäsen "Alex" taulukon alkuun.  //unshift
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.unshift("Alex")//Lisää uusi jäsen "Alex" taulukon alkuun.  //unshift
console.log(teamMembers)

//5. Lisää uusi jäsen "Linda" taulukon loppuun.  //push
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.push("Linda")
console.log(teamMembers)


//6. Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä ja jätä alkuperäinen muuttumattomaksi. //splice  
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.splice(0,2)
//tai
let withoutFirstTwo = teamMembers.slice(2)
console.log(withoutFirstTwo)

//7.Etsi "Mikko":n indeksi taulukossa.  //indexOF("Mikko") - tulostetaan console.log(teamMembers.indexOf("Mikko"))
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
console.log(teamMembers.indexOf("Mikko"))

let mikkoIndex = teamMembers.indexOf("Mikko")
console.log("Mikon indeksi:", mikkoIndex)


//8. Yritä etsiä "Jake":n indeksi (ei ole taulukossa). //.indexOf("Jake")- tulostetaan console.log(teamMembers.indexOf("Jake"))
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.indexOf("Jake")
console.log(teamMembers.indexOf("Jake"))

let jakeIndex = teamMembers.indexOf("Jake")
console.log("Jake:n",  jakeIndex:)

//9. Korvaa "Mikko" kahdella uudella jäsenellä: "Maria" ja "Netta". 
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.splice(2, 1, "Maria", "Netta")
console.log(teamMembers)
if  (mikkoIndex !== -1) {
    teamMembers.slice(mikkoIndex, 1 "Maria", "Netta")
}
console.log(teamMembers)

10.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.splice(4, 0, "Ahmad")
console.log(teamMembers)
let newList = [...teamMembers, "Ahmad"]
console.log(newList)


11.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
let copiedTeam = teamMembers.slice()
console.log(copiedTeam)

let copiedTeam = teamMembers.slice
console.log(copiedTeam)



12.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']

let newMembers = ("Tiina","Myrsky")
teamMembers.push(newMembers)
console.log(teamMembers)

// tai

let newMembers = ("Tiina","Myrsky")
let combinedTeam = teamMembers.concat(newMembers)
console.log(combinedTeam)


13.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
let joniIndexes = []//uusi taulukko indexille
teamMembers.forEach((member, index) => { //Käydään läpi kaikki alkioit ja tarkistetaan, onko kyseessä "Joni"
    if(member === "Joni") {
    joniIndexes.push(index)
}
})
console.log(joniIndexes)

14.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
let upperCased = teamMembers.map((teamMembers) => teamMembers.toUpperCase())
console.logu(upperCased)



15.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.sort()
console.log(teamMembers)

let sortedTeam = [...teamMembers].sort()
console.log(sortedTeam)

16. let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.reverse()
console.log(teamMembers)

let sortedDescending = [...sortedTeam].reverse
console.log(sortedTeam)


17.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
let hasJoni = teamMembers.some((teamMembers) => teamMembers === "Joni")
console.log(hasJoni)

console.log("Does it have Joni:", teamMembers.includes("Joni") )


18.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
let kaikkiYliKolme = teamMembers.every((nimi) => nimi.length > 3)
console.log(kaikkiYliKolme)

let allongNames = teamMembers.every((name) => name.length > 3)
console.log("Kaikilla on yli 3", allongNames)