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