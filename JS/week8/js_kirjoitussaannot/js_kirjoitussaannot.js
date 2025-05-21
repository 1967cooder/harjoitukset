/* Tehtävä 1: Käytä \"strict mode\" -tilaa

Luo funktio `task1`, joka käyttää \"use strict\" -tilaa.
Yritä käyttää muuttujaa ilman sen julistamista.
Ota virhe kiinni ja loggaa: \"Strict mode -virhe: [virheilmoitus]\"
*/
let tehtava = 1
function task1() {
    "use strict";
    try {
        underclearedVar = 42;//muuttuja ei ole julistettu
    } catch (error) {
        console.log("Strict mode virhe", error.message);//massage pakalle voi olla name
  /*  } finally {
        console.log("funktio suoritettu")*/
    }
  }
  task1();
  console.log("Tehtevä", tehtava++)//tehtävä++ tämå tarkoittaa, että se osoittaa seuravaan tehtevään


  /* Tehtävä 2: Muuttujien oikea julistus
  
  Julista vakio `MAX_USERS = 100` ja muuttuja `currentUsers = 10`.
  Yritä muuttaa vakion arvoa ja ota virhe kiinni.
  */
  
  function task2() {
    const MAX_USERS = 100
    let currentUsers = 10
    try {
        currentUsers += 10;
        MAX_USERS += 10; 
        currentUsers += 5 ;
    }
    catch (error){
        console.log("Vakiota ei voi muuttaa", error.message);
    }
    console.log("MAX_USERS:", MAX_USERS);
    console.log("currentUsers:", currentUsers)
  }
  task2()

  /* Tehtävä 3: Luo objekti ja tulosta se
  
  Luo objekti `userProfile`, jossa kentät:
  - name
  - email
  - isAdmin
  Tulosta objekti konsoliin.
  */

  class userProfile {
   constructor(name,email, isAdmin) {
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin
   }
  }
  function task3() {
    const user1 = new userProfile("Pekka","pekka@topohanta.fi", true);
    const user2 = new userProfile(true, 45, "jotain");
    console.log(user1);
    console.log(user2);
  }
task3();


  
  /* Tehtävä 4: Yksinkertainen funktio pinta-alan laskemiseen
  
  Luo funktio `calculateArea(width, height)`, joka palauttaa suorakulmion pinta-alan.
  */
  
  function calculateArea(width, height) {
   return width * height; 
   }
// Esimerkkikutsut:
console.log("Alue 5×10 =", calculateArea(5, 10));
console.log("Tehtävä", tehtava++);

  
  /* Tehtävä 5: Vältä taikalukuja
  
  Määritä vakio `DISCOUNT = 0.1`.
  Luo funktio `applyDiscount(price)`, joka laskee hinnasta alennuksen.
  */
  
  const DISCOUNT = 0.1;
  function applyDiscount(price) {
    return price - price * DISCOUNT;
  }
  console.log(applyDiscount(100));
  
  /* Tehtävä 6: Kirjoita hyödyllisiä kommentteja
  
  Kirjoita funktio `greetUser(name)`, joka palauttaa tervehdyksen käyttäjälle.
  Lisää funktioon kommentti, joka selittää sen tarkoituksen.
  */
 //ne comenttit alhalla teke JSDoc joka on hyvä asentamaan HomeBRuw
 /**
  * 
  * @param  //name-kutsuttavan käyttäjän nimi
  * @returns//tervehdyksen merkkijono
  */

  function greetUser(name) {
    return `Hello, ${name}!;` 
  }
  // Esimerkki:
    console.log(greetUser("Bob")); // "Hello, Bob!"

  /* Tehtävä 7: Refaktoroi epäselvä koodi selkeämmäksi
  
  Paranna epäselvää funktiota käyttämällä parempia nimiä ja muotoilua.
  
  Ennen:
  function f(n){return n<0 ? 'negative' : 'positive';}
  
  /*function f(n) {//huono nimi
    return n < 0 ? "negative" : "positive"
   }
  */  
   function f(number) {//parempi
    return number < 0 ? "negative" : "positive"
   }
  //tai
  function checkNumber(number) {
   if (number < 0) {
    return "negative"
   } else {
    return "positive";
   }
  }
   console.log(f(8));
   console.log(checkNumber(8))

   
  // Esimerkki:
  console.log(checkNumber(-5)); // "negative"
  console.log(checkNumber(0)); // "positive"
  
  
  
  /* Tehtävä 8: Korjaa koodin muotoilu
  
  Kirjoita koodi uudelleen käyttäen oikeaa muotoilua ja sisennystä.
  
  Ennen:
  let x=10; function example(){console.log(x);}
  */

  function example() {
   let x = 10;
   console.log(x);
  }
  example();