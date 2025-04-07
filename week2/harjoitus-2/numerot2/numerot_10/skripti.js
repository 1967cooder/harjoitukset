/* 
1. Luo muuttuja num ja aseta sille arvoksi 5.67.
2. Käytä Math.round() metodia sen pyöristämiseen lähimpään kokonaislukuun. 
3. Käytä Math.floor() metodia sen pyöristämiseen alaspäin edelliseen lähimpään kokonaislukuun.
4. Käytä Math.ceil() metodia sen pyöristämiseen ylöspäin seuraavaan lähimpään kokonaislukuun.
5. Tulosta kaikki saamasi tulokset console.log() avulla ja lisää jokaiselle selittävät teksti.
*/
let num = 5.67;
let rounded = Math.round (num);
let floored = Math.floor (num);
let ceiled = Math.ceil (num);

console.log("Math.round() pyöristää 5.67 lähimpään kokonaislukuun:" + rounded); //Math.round(5.67) palauttaa 6, koska se pyöristää lähimpään kokonaislukuun.
console.log ("Math.floor() pyöristää 5.67 alaspäin lähimpään kokonaislukuun: " + floored); //Math.floor(5.67) palauttaa 5, koska se pyöristää alaspäin.
console.log("Math.ceil() pyöristää 5.67 ylöspäin seuraavaan kokonaislukuun: " + ceiled); //Math.ceil(5.67) palauttaa 6, koska se pyöristää ylöspäin.


