
/*
const form = document.getElementById('pancakeForm');
const totalPriceDisplay = document.getElementById('totalPriceDisplay');//alhalla
const priceBanner = document.getElementById('totalPrice');
const seeOrderButton = document.getElementById('seeOrder');//button
const summaryText = document.getElementById('summaryText');//tilauksen yhteenvetolet toppings = [];

let toppings = [];
let extras = [];
let deliveryPrice = 0;
let basePrice = 5;

function updateTotalPrice() {
    let toppingsPrice = toppings.length * 1;
    let extrasPrice = extras.reduce((sum, item) => sum + item.price, 0);
    let total = basePrice + toppingsPrice + extrasPrice + deliveryPrice;

    totalPriceDisplay.textContent = `${total}€`;
  priceBanner.textContent = `${total}€`;
}

// Lomakkeen change-kuuntelija
form.addEventListener('change', (event) => {
    const target = event.target;

    // Jos pannukakun tyyppi vaihtuu
  if (target.id === 'type') {
    basePrice = parseInt(target.selectedOptions[0].dataset.price);
  }

   // Jos täyte valitaan tai poistetaan
   if (target.classList.contains('topping')) {
    const toppingName = target.parentElement.textContent.trim(); */

    document.addEventListener("DOMContentLoaded", function() {
//nämä muuttujat ovat vapaaehtoisia
   const form = document.getElementById("pancakeForm");
   const totalPriceBanner = document.getElementById("totalPrice");
   const totalPriceDisplay = document.getElementById("totalPriceDisplay");
   const seeOrderButton = document.getElementById("seeOrder");
    const summaryText = document.getElementById("summaryText");
    const typeSelect = document.getElementById("type");


    //nämä taulukot tarvitaan, ne ovat tyhjiä taulukoita aluksi.
    let toppings = [];
    let extras = [];

    //Yksi tapahtumakäsittälijä koko lomakkeelle.Kun lomakkeella tapahtuu muutos (esim. checkbox valitaan), 
    // tämä koodi aktivoituu. target = elementti, johon käyttäjä vaikutti.
    form.addEventListener("change", function (event) {
        const target = event.target;

        if (target.classList.contains("topping")){// onko tullut checkboxiin muutos
        handleToppings(target);//kutsuttu funktiolta
    } else if (target.classList.contains("extra")) {
        handleExtras(target);
    }
    updatePrice();//päivitetään hinta
    }) 

    //updatePrice-funktio  laskee hinnan jokaisen muutoksen jälkeen.
    function updatePrice(){
        const pancakeType = document.getElementById("type");
        const selectedType = pancakeType.options[pancakeType.selectedIndex];
        let total = parseFloat(selectedType.getAttribute("data-price"));

    //täytteen lisääminen, lisätään loppusummaan jokaisesta täytteestä 1€
        total = total + toppings.length * 1;


    //haetaan lisukkeet listaan ja käsitellään lista. Lisätään valittujen hinta
        let extraChoices = document.querySelectorAll(".extra");
        extraChoices.forEach((checkbox) => {
            if (checkbox.checked) {
                    total = total + parseFloat(checkbox.getAttribute("data-price"));
            }
        });
    //haetaan kuljetuksen arvo ja lisätään hinta(hinta voi olla 0)
        let delivery = document.querySelector("input[name='delivery']:checked");
         total += parseFloat(delivery.getAttribute("data-price"));

        

    //muotoillaan kokonaishinta desimaaliluvuksi.Pyöristetään kahden desimaalin tarkkuuteen 
    // ja näytetään molemmissa hintaelementeissä.
        let formattedTotal = total.toFixed(2) + "€"
        totalPriceBanner.textContent = formattedTotal ;
        totalPriceDisplay.textContent = formattedTotal ;
    
    }

function handleToppings(checkbox) {//mennää topings kautta

    const toppingName = checkbox.parentElement.textContent.trim()//parentElement on Lable; trim ottaa pois htmlstä välilyönnit
    if (checkbox.checked) { //Jos täyte on valittu, lisätään listaan
        toppings.push(toppingName)
    } else {
        toppings = toppings.filter((t) => t !== toppingName);//menee ja valitsee ne jotka eivät ole valittuja 
        // ja luo uuden toppingtaulukon, t on topping
    }
    console.log("täytteet:", toppings);
  
    
}

function handleExtras(checkbox) {//mennää textras kautta

    const extraName = checkbox.parentElement.textContent.trim()
    if (checkbox.checked) {
        extras.push(extraName)
    } else {
        extras = extras.filter((e) => e !== extraName);
    }   
    console.log("lisukkeet:", extras);
  
}
//Tilauksen näyttö
seeOrderButton.addEventListener("click", function(){ 
    //haetaan tilaajan niumi
    const customerName = document.getElementById("customerName").value.trim();
    const selectedType = typeSelect.options[typeSelect.selectedIndex];
    const delivery = document.querySelector("input[name=delivery]:checked").parentElement.textContent.trim();

//Näytetään tilauksen tiedot.Kun käyttäjä painaa "Näytä tilaus" -nappia, näytetään asiakkaan nimi.
    let summary = `<strong>Asiakas:</strong> ${customerName || "(ei nimeä)"
}<br>`;

summary += `Tyyppi: ${selectedType.value}<br>`;
summary +=  `Täytteet: ${toppings.length > 0 ? toppings.join(", ") : "Ei täytteitä"}<br>`;
summary +=  `Lisukkeet: ${extras.length > 0 ? extras.join(", ") : "Ei lisukkeitä"}<br>`;
summary +=  `Toimitustapa: ${delivery}<br>`;
summary += `Kokonaishinta: ${totalPriceDisplay.textContent}`;

    summaryText.innerHTML = summary;

    })
});






