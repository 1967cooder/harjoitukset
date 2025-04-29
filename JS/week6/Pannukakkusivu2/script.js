
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
//nämä muuttujatnovat vapaaehtoisia
   const form = document.getElementById("panckakeForm");
   const totalPriceBanner = document.getElementById("totalPrice");
   const totalPriceDisplay = document.getElementById("totalPriceDisplay");
   const seeOrderButton = document.getElementById("seeOrder");
    const summaryText = document.getElementById("summaryText");

    //nämä taulukot tarvitaan
    let toppings = [];
    let extras = [];

    //Yksi tapahtumakäsittälij koko lomakkeelle
    form.addEventListener("change", function (event) {
        const target = event.target;//onko tullut checkboxiin muutos

        if (target.classeList.contains("topping")){// onko tullut checkboxiin muutos
        handleToppings(target);//kutsuttu funktiolta
    } else if (target.classeList.contains("extra")) {
        handleExtras(target);
    }
    updatePrice();
    }) ; 

function handleToppings(checkbox) {//mennää topings ja extras kautta

    const toppingName = checkbox.parentElement.textContent.trim()//parentElement on Lable; trim ottaa pois htmlstä välilyönnit
    if (checkbox.checked) {
        toppings.push(toppingName)
    } else {
        toppings = toppings.filter((t) => t !== toppingName);//menee ja valitsee ne jotka eivät ole valittuja ja luo uuden toppingtaulukon, t on topping
    }
    console.log("täytteet:", toppings);
  
    
}

function handleExtras(checkbox) {

    const extraName = checkbox.parentElement.textContent.trim()
    if (checkbox.checked) {
        extras.push(extraName)
    } else {
        extras = extras.filter((e) => e !== extraName);
    }   
    console.log("lisukkeet:", extras);
  
}

function updatePrice(){
    const pancakeType = document.getElementById("type");
    const selectedType = pancakeType.options[pancakeType.selectedIndex];
    let total = parseFloat(selectedType.getAttribute("data-price"));

    totalPriceBanner.textContent = total;
    totalPriceDisplay.textContent = total;

}
});





