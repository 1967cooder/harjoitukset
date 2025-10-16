//dropdown menu---------------------
function toggleDropdown(event) {
  //toggleDropdown() näyttää tai piilottaa valikon, kun "Projects" klikataan.
  event.preventDefault(); //estää <a>-linkin siirtymästä uuteen sivuun, kun sitä klikataan.

  const select = document.getElementById("projectsSelect");
  select.style.display = select.style.display === "block" ? "none" : "block";
} //Jos select on näkyvissä (display: block), piilottaa sen (display: none).
//Jos se on piilotettu, näyttää sen.Tämä mahdollistaa dropdownin avaamisen
// ja sulkemisen napsautuksella

function navigateToPage(selectElement) {
  //hakee url osoitteen
  const url = selectElement.value;
  if (url) {
    //Jos arvo (URL) on olemassa, selain siirtyy kyseiseen osoitteeseen.
    window.location.href = url;
  }
}

document.addEventListener("click", function (event) {
  //Tämä kuuntelee kaikki klikkaukset.
  const dropdown = document.querySelector(".dropdown");
  const select = document.getElementById("projectsSelect");

  if (!dropdown.contains(event.target)) {
    //Jos klikataan jotain muuta kuin dropdownin sisältöä,
    select.style.display = "none"; // piilottaa <select>-valikon.
  }
});

//Vaihda teema nappi---------------------
f; // 🚀 Когато страницата се зареди, проверяваме запазената тема
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const themeBtn = document.querySelector(".theme-toggle i");

  if (savedTheme === "dark") {
    body.classList.replace("light-theme", "dark-theme");
    themeBtn.classList.replace("fa-moon", "fa-sun");
  } else {
    // Ако няма запазена тема или е "light"
    body.classList.add("light-theme");
    themeBtn.classList.replace("fa-sun", "fa-moon");
  }
});

// 🌓 Функция за смяна и запазване на темата
function toggleTheme() {
  const body = document.body;
  const themeBtn = document.querySelector(".theme-toggle i");

  if (body.classList.contains("light-theme")) {
    body.classList.replace("light-theme", "dark-theme");
    themeBtn.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark"); // 💾 Запази избора
  } else {
    body.classList.replace("dark-theme", "light-theme");
    themeBtn.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light"); // 💾 Запази избора
  }
}

//userForm----------------------------------------------------------------

const form = document.getElementById("userForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault(); //lopettaa lataamista

  // Haetaan kenttien arvot kun lähetetään lomakkeen l
  const name = document.getElementById("yourName").value;
  const email = document.getElementById("yourEmail").value;
  const message = document.getElementById("messageToMe").value;

  // Tyhjennä mahdollinen aiempi viesti
  errorMessage.textContent = "";

  if (email.trim() === "") {
    event.preventDefault(); // Estää lomakkeen lähetyksen
    errorMessage.textContent = "Email field cannot be empty!";
    errorMessage.style.color = "red";
    return; //Lopettaa lähettämista jos email on tyhjä
  }

  //jos kaikki on ok
  alert("Thank you, " + name + "! Your message has been sent."); // Näyttää viesti

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  form.reset();
});

//nappi ylös--------------------------------------------------------
document.getElementById("toTopBtn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
