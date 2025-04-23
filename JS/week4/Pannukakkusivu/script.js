
/*
// 1. Haetaan tarvittavat DOM elementit HTML:stä
const typeSelect = document.getElementById("type");
const toppingCheckboxes = document.querySelectorAll(".topping");
const extraCheckboxes = document.querySelectorAll(".extra");
const totalPriceBanner = document.getElementById("totalPrice");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");

// 2. Lasketaan kokonaishinta käyttäjän valintojen perusteella
function calculateTotal() {
  // 2.1. Aloita valitusta pannukakkutyypistä (5€, 6€, 7€)
  let total = parseFloat(typeSelect.value);

  // 2.2. Lisätään 1€ jokaisesta valitusta täytteestä
  toppingCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      total += parseFloat(checkbox.value); // (checkbox.value)kaikki täytteet ovat 1€; total-lasketaan kokonaishinta;+= tarkoitta-jokaisesta valitusta täytteestä lisätään 1€ hintaan.
    }
  });

  // 2.3. Lisätään lisukkeiden hinnat (esim. 2€, 3€)
  extraCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      total += parseFloat(checkbox.value);
    }
  });

  // 2.4. Muotoile hinta ja lisää "€"-merkki
  //jos halutaan muotoilla 2 desimalilla pitää olla
  //const formattedPrice = total.toFixed(2) + "€"; --> tulee num.jälkeen 00,esim.13.00
  const formattedPrice = total + "€";
  
  // 2.5. Päivitä hinnat molempiin kohtiin
  totalPriceBanner.textContent = formattedPrice;
  totalPriceDisplay.textContent = formattedPrice;
  
}
  

// 3. Aseta tapahtumankuuntelijat kaikille valinnoille. Event Listener metoodia  käytätään 
// kun käyttäjä vaihtaa pannukakuntyypin ja valitsee tai poistaa täyttäitä ja lisukkeita, 
// niin että tulee uusi hinta
typeSelect.addEventListener("change", calculateTotal);
toppingCheckboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", calculateTotal)
);
extraCheckboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", calculateTotal)
);

// 4. Lasketaan hinta heti alussa (oletus)
calculateTotal();
*/

document.addEventListener("DOMContentLoaded", function() {
   const typeSelect = document.getElementById("type");
   const toppingCheckboxes = document.querySelectorAll(".topping");
   const extraCheckboxes = document.querySelectorAll(".extra");

   typeSelect.addEventListener("change", updatePrice);
   console.log("type of order changed");
   toppingCheckboxes.forEach((topping) => {
      topping.addEventListener("change", updatePrice);

});
extraCheckboxes.forEach((extra) => 
   extra.addEventListener("change", updatePrice)
);

updatePrice();
});

function updatePrice(){
   const typeSelect = document.getElementById("type");
   const toppingCheckboxes = document.querySelectorAll(".topping:checked");
   const extraCheckboxes = document.querySelectorAll(".extra:checked");

let total = parseFloat(typeSelect.value);

total += toppingCheckboxes.length * 1;

extraCheckboxes.forEach((extra) => {
   console.log("Extra topping added");
   total += parseFloat(extra.value);
   console.log("Total price for now is:", total);
});

const formattedTotal = total.toFixed(2 + "€");
document.getElementById("totalPrice").textContent = formattedTotal;
document.getElementById("totalPriceDisplay").textContent = formattedTotal;
}