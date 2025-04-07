//numerot_07
/* Luo muuttuja nimeltä price ja anna sille arvoksi 19.56789.
Käytä .toFixed()-metodia:
Pyöristääksesi hinnan kahden desimaalin tarkkuuteen.
Pyöristääksesi hinnan ilman desimaaleja.
Tulosta molemmat tulokset käyttäen console.log() viestien kera:
"Hinta 2 desimaalilla: 19.57"
"Hinta ilman desimaaleja: 20"
*/

let price = 19.5678;
let des2  = price.toFixed(2);
let des0  = price.toFixed(0);
console.log("Hinta 2 desimaalilla:", des2);
console.log("Hinta ilman desimaaleja:", des0);