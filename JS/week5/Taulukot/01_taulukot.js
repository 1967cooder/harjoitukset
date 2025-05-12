
//Alkuperäinen data:
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade'];

//1. Käy `teamMembers`-taulukko läpi ja tulosta jokainen nimi konsoliin.  
teamMembers.forEach((nimi) => console.log(nimi))

//tai
for (let i = 0; i < teamMembers.length; i++) {
    console.log(teamMembers[i]);  
}

//2. Poista taulukon ensimmäinen jäsen. //shift 
teamMembers.shift()// ['Emilia', 'Mikko', 'Sade']
console.log(teamMembers)


//3. Poista taulukon viimeinen jäsen.  //pop
teamMembers.pop()// ['Emilia', 'Mikko']
console.log(teamMembers)


//4. Lisää uusi jäsen "Alex" taulukon alkuun.  //unshift
teamMembers.unshift("Alex")// ['Alex', 'Emilia', 'Mikko']
console.log(teamMembers)

//5. Lisää uusi jäsen "Linda" taulukon loppuun.  //push  Lisää "Linda" loppuun
teamMembers.push("Linda")// ['Alex', 'Emilia', 'Mikko', 'Linda']
console.log(teamMembers)


//6. Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä ja jätä alkuperäinen muuttumattomaksi. //splice  
teamMembers.splice(0,2)
console.log(teamMembers)

//tai
let slicedMembers = teamMembers.slice(2); // ['Mikko', 'Linda']
console.log(teamMembers)
//tai
let withoutFirstTwo = teamMembers.slice(2)
console.log(teamMembers)

//7.Etsi "Mikko":n indeksi taulukossa.  //indexOF("Mikko") - tulostetaan console.log(teamMembers.indexOf("Mikko"))
let mikkoIndex = teamMembers.indexOf("Mikko");
console.log(teamMembers.indexOf("Mikko"))
console.log("Mikon indeksi:", mikkoIndex);

//8. Yritä etsiä "Jake":n indeksi (ei ole taulukossa). 
let jakeIndex = teamMembers.indexOf("Jake");
console.log(teamMembers.indexOf("Jake"))
console.log("Jaken indeksi:", jakeIndex)

//9. Korvaa "Mikko" kahdella uudella jäsenellä: "Maria" ja "Netta". 
let mikkoIndex2 = teamMembers.indexOf("Mikko");
if (mikkoIndex2 !== -1) {
  teamMembers.splice(mikkoIndex2, 1, "Maria", "Netta");
}
console.log("Korvattu Mikko:", teamMembers);

//10. Liitä "Ahmad" taulukkoon ja tallenna tulos uuteen taulukkoon, alkuperäistä muuttamatta. 
teamMembers.splice(4, 0, "Ahmad")
console.log(teamMembers)

let newList = [...teamMembers, "Ahmad"]//"newList" voi olla "extendedTeam"
console.log(newList)


//11. Kopioi koko `teamMembers`-taulukko `slice`-metodilla ja tallenna se uuteen muuttujaan.  
let copiedTeam1 = teamMembers.slice()
console.log(copiedTeam1)

//tai
let copiedTeam2 = [...teamMembers] 
console.log(copiedTeam2)


//12. Luo `newMembers`-taulukko, jossa on "Tiina" ja "Myrsky", ja yhdistä se `teamMembers`-taulukkoon uuteen taulukkoon.


let newMembers = ("Tiina","Myrsky")
let combinedTeam = teamMembers.concat(newMembers)
console.log(combinedTeam)//tulostaa lisäksi vain "Myrsky"

//tai
let newMembers1 = ["Tiina", "Myrsky"];
let combinedTeams1 = [...teamMembers, ...newMembers1];
console.log(combinedTeams1)//tulostaa [ 'Maria', 'Netta', 'Linda', 'Ahmad', 'Tiina', 'Myrsky' ]


//13. Etsi kaikki "Joni":in esiintymät ja tallenna niiden indeksit uuteen taulukkoon. 
let joniIndexes = []//uusi taulukko indexille
teamMembers.forEach((member, index) => { //Käydään läpi kaikki alkioit ja tarkistetaan, onko kyseessä "Joni"
    if(member === "Joni") {
    joniIndexes.push(index)
}
})
console.log(joniIndexes)



//14. Muunna kaikki nimet taulukossa isoiksi kirjaimiksi, muuttamatta alkuperäistä taulukkoa.  
let upperCased = teamMembers.map((nimi) => nimi.toUpperCase())
console.log(upperCased)


// 15. Lajittele aakkosjärjestykseen (kopio, jotta ei muokata alkuperäistä)
teamMembers.sort()
console.log(teamMembers)

let sortedTeam = [...teamMembers].sort()
console.log(sortedTeam)

//tai
let sortedMembers = [...teamMembers].sort();
console.log("Aakkosjärjestyksessä:", sortedMembers);


//16. Käännä `teamMembers`-taulukon järjestys päinvastaiseksi.  
teamMembers.reverse()
console.log(teamMembers)

let sortedDescending = [...sortedTeam].reverse
console.log(sortedTeam)

//tai
let reversedMembers = [...teamMembers].reverse();
console.log("Päinvastaisessa järjestyksessä:", reversedMembers);


//17. Tarkista, onko ainakin yksi jäsen nimeltään "Joni". 
let hasJoni = teamMembers.some((teamMembers) => teamMembers === "Joni")
console.log(hasJoni)

console.log("Does it have Joni:", teamMembers.includes("Joni") )

//tai
let sisaltaaJonin = teamMembers.includes("Joni");
console.log("sisältääkö Jonin?", sisaltaaJonin);


//18. Tarkista, onko kaikilla nimillä yli kolme kirjainta.
let kaikkiYliKolme = teamMembers.every((nimi) => nimi.length > 3)
console.log(kaikkiYliKolme)

//tai sana kolme on 3
let kaikkiYli3 = teamMembers.every((nimi) => nimi.length > 3);
console.log("Onko kaikki yli 3 pitkiä?", kaikkiYli3);

let allongNames = teamMembers.every((name) => name.length > 3)
console.log("Kaikilla on yli 3", allongNames)