/* 
Luo lomake, jossa on pakolliset nimi- ja sähköpostikentät.
Kirjoita JavaScript-koodi, joka:
- Estää lomakkeen lähetyksen, jos jompikumpi kenttä on tyhjä.
- Näyttää virheilmoituksen, jos kenttiä on tyhjänä.
*/
//annetaan nimi funktioon ja annetaan parametrin
function sendForm (event){
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;

if(name === "" || email === "" ) {//jos puuttuu "täytä molemmat kentät" "täytä sähköposti"  - and/or 
    event.preventDefault(); //estee että lähtää tyhjä 
    document.getElementById("erroMessage").textContent =
    "Täytä molemmat tiedot";//tähän paikkaan voit laitta myös "!", mutta ei ole pakko
    }

}



//kutsutaan se funktio
document.getElementById("userForm").addEventListener("submit", );