//operaattorit_01
/* 
- Luo muuttujat a ja b ja anna niille kokonaislukuarvot.
- Käytä yhteen-, vähennys-, kerto- ja jakolaskuoperaattoreita muuttujille a ja b. Tallenna jokainen tulos erilliseen muuttujaan (summa, erotus, tulo, osamäärä, jakojäännös).

- Käytä console.log() -metodia tulostamaan jokaisen operaation tulos konsoliin.

- Lisää kommentteja koodiin selittämään, mitä kukin operaatio tekee.
*/

let a = 5
let b = 3

let summa = a + b; // on yhtä suuri kuin 8
let erotus = a - b;  // on yhtä suuri kuin 2
let tulo = a * b; // on yhtä suuri kuin 15
let jakolasku = a / b; // on suurin piirtein 1.67


console.log('Summa (a + b):', summa);            // Tulostetaan yhteenlaskun tulos
console.log('Erotus (a - b):', erotus);          // Tulostetaan vähennyslaskun tulos
console.log('Tulo (a * b):', tulo);              // Tulostetaan kertolaskun tulos
console.log('Jakolasku (a / b):', jakolasku);      // Tulostetaan jakolaskun osamäärä

/*Koodin selitys:
Määritellään muuttujat a ja b: Näihin annetaan kokonaislukuarvot.

Lasketaan operaatiot:

Summa: Yhteenlasku (a + b).

Erotus: Vähennyslasku (a - b).

Tulo: Kertolasku (a * b).

Osamäärä: Jakolasku (a / b).



Tulostetaan tulokset console.log() -metodilla, jolloin jokainen laskettu tulos tulee näkyviin konsolissa.
*/