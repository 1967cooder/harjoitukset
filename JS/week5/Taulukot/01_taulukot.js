/* 
Alkuperäinen data:
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade'];

1. Käy `teamMembers`-taulukko läpi ja tulosta jokainen nimi konsoliin.  
2. Poista taulukon ensimmäinen jäsen. //shift 
3. Poista taulukon viimeinen jäsen.  //pop
4. Lisää uusi jäsen "Alex" taulukon alkuun.  //unshift
5. Lisää uusi jäsen "Linda" taulukon loppuun.  //push
6. Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä ja jätä alkuperäinen muuttumattomaksi. //splice  
7. Etsi "Mikko":n indeksi taulukossa.  //indexOF("Mikko") - tulostetaan console.log(teamMembers.indexOf("Mikko"))
8. Yritä etsiä "Jake":n indeksi (ei ole taulukossa). //.indexOf("Jake")- tulostetaan console.log(teamMembers.indexOf("Jake"))
9. Korvaa "Mikko" kahdella uudella jäsenellä: "Maria" ja "Netta".  //teamMembers.splice(2, 1, "Maria", "Netta")
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

/*
2.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.shift()

3.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.pop()
4.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.unshift("Alex")

5.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.push("Linda")

6.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.splice(0,2)

7.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
console.log(teamMembers.indexOf("Mikko"))

8.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.indexOf("Jake")
console.log(teamMembers.indexOf("Jake"))

9.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.splice(2, 1, "Maria", "Netta")
console.log(teamMembers)

10.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.splice(4, 0, "Ahmad")
console.log(teamMembers)

11.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
let copiedTeam = teamMembers.slice()
console.log(copiedTeam)

12.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
let newMembers = ("Tiina","Myrsky")
teamMembers.push(newMembers)
console.log(teamMembers)

13.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
let joniIndexes = []//uusi taulukko indexille
teamMembers.forEach((member, index) => { //Käydään läpi kaikki alkioit ja tarkistetaan, onko kyseessä "Joni"
    if(member === "Joni") {
    joniIndexes.push(index)
}
})
console.log(joniIndexes)

14.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
let capitalizedteamMembers = teamMembers.map((teamMembers) => teamMembers.toUpperCase())
console.log(capitalizedteamMembers)

15.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.sort()
console.log(teamMembers)

16. let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.reverse()
console.log(teamMembers)

17.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
let hasJoni = teamMembers.some((teamMembers) => teamMembers === "Joni")
console.log(hasJoni)

18.let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
let kaikkiYliKolme = teamMembers.every((nimi) => nimi.length > 3)
console.log(kaikkiYliKolme)*/