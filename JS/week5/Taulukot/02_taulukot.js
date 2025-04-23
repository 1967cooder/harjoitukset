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
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.shift()
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.pop()
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.unshift("Alex")
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.push("Linda")
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.splice(0,2)
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
console.log(teamMembers.indexOf("Mikko"))
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.indexOf("Jake")
console.log(teamMembers.indexOf("Jake"))
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.splice(2, 1, "Maria", "Netta")
console.log(teamMembers)*/
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade']
teamMembers.splice(4, 0, "Ahmad")
console.log(teamMembers)