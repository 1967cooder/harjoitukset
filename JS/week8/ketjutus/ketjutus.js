"use strict";

/* Tehtävä 1: Korjaa käyttäjädatan käsittely  
Korjaa metodiketjutus niin, että se suodattaa aktiiviset käyttäjät ja palauttaa heidän nimensä isoilla kirjaimilla.
*/

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

// Korjaa tämä
/*const activeUsers = users
  .map((user) => user.Name)
  .filter((name) => name.toUpperCase());*/

  const activeUsers = users
  .filter((user) => user.active) // 1) suodatetaan aktiiviset
  .map((user) => user.name.toUpperCase())
console.log("actitve users", activeUsers); // Odotettu: ["ALICE", "CHARLIE"]

/* Tehtävä 2: Korjaa valinnainen ketjutus  
Käytä turvallisesti `email`-ominaisuutta objektin `user.details` sisältä.
*/

const userData = { details: 
    { contact: 
     { email: "jane@example.com" } } };
const userData1 = { details: "moi"}
// Korjaa tämä
console.log(userData?.details?.contact?.email); // Odotettu: "jane@example.com"
//console.log(userData.contact.email);// Odotettu: "jane@example.com", ohjelma kaattuu ilman kysymysmerkit


/* Tehtävä 3: Korjaa valinnainen ketjutus taulukoiden kanssa  
Käytä turvallisesti taulukon `orders` toista alkiota, jos se on olemassa.
*/

const customer = { orders: [1001, 1002] };

// Korjaa tämä
//console.log(customer.orders[2]);  Odotettu: undefined

console.log(customer.orders?.[1]);//korjattiu


/* Tehtävä 4: Korjaa ketjutettu merkkijonojen käsittely  
Poimi nimikirjaimet koko nimestä metodiketjutuksella.
*/

const fullName = "John Doe";

/*// Korjaa tämä
const initials = fullName.map((word) => word[0].toUpperCase()).join(" ");
console.log(initials); // Odotettu: "J D"*/

//korjattu
const initials1 = fullName
.split(" ")// 1) jaetaan merkkijono sanoiksi
.map((word) => word[0].toUpperCase()) // 2) otetaan joka sanan ensimmäinen kirjain isona
.join(" "); // 3) yhdistetään välilyönnillä

console.log(initials1);

/* Tehtävä 5: Luo oma funktio  
Kirjoita funktio, joka vastaanottaa `products`-taulukon ja palauttaa pilkulla erotetun merkkijonon **vain varastossa olevien** tuotteiden nimistä **isoilla kirjaimilla**.
Testaa seuraavalla taulukolla:
`[{ name: "Laptop", stock: 10 }, { name: "Phone", stock: 0 }]`
Odotettu tuloste: `"LAPTOP"`
*/
// Testi:
const items = [
    { name: "Laptop", stock: 10 },
    { name: "Phone", stock: 0 },
  ];
  console.log(listInStock(items)); // "LAPTOP"

function listInStock(products) {
    return products
      .filter((p) => p.stock > 0) // 1) jätetään varastossa olevat
      .map((p) => p.name.toUpperCase()) // 2) nimet isoiksi kirjaimiksi
      .join(", "); // 3) yhdistetään pilkulla
  }
  //tai
  products.forEach((product) => {
    if (product.stock > 0){
        console.log(product.name.toUpperCase())
    }
  });
  listInStock(items)


