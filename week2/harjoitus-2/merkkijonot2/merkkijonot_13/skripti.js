/* Luo muuttuja nimeltä description ja anna sille arvoksi " JavaScript is Fun and powerful! ".
Tee seuraavat toimenpiteet:
- Poista ylimääräiset välilyönnit käyttäen .trim().
- Muunna merkkijono pieniksi kirjaimiksi.
- Tarkista, sisältääkö se sanan "fun".
- Korvaa "powerful" sanalla "amazing".
- Tulosta lopullinen merkkijono ja tieto siitä, sisältääkö se sanan "fun" käyttäen console.log().

Esimerkkituloste:
"Final description: javascript is fun and amazing!"
"Does it include 'fun'? true"
*/
let description = " JavaScript is Fun and powerful! ";


let lowerCaseDescription = "description".toLowerCase();


let chek = description.includes("fun");


let newText = description.replace("powerful", "amazing");

console.log(description.trim(0));
console.log(lowerCaseDescription);

console.log("Final description:" + description.replace("powerful", "amazing"));
console.log("Does it include 'fun'? " + chek);