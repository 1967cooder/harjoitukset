
//dropdown menu---------------------
function toggleDropdown(event){//toggleDropdown() näyttää tai piilottaa valikon, kun "Projects" klikataan.
    event.preventDefault();//estää <a>-linkin siirtymästä uuteen sivuun, kun sitä klikataan.
  
  
    const select = document.getElementById("projectsSelect");
    select.style.display =  select.style.display === "block" ? "none" : "block";
  }//Jos select on näkyvissä (display: block), piilottaa sen (display: none).
  //Jos se on piilotettu, näyttää sen.Tämä mahdollistaa dropdownin avaamisen 
  // ja sulkemisen napsautuksella
  
  function navigateToPage(selectElement) {//hakee url osoitteen
    const url = selectElement.value;
    if (url) {//Jos arvo (URL) on olemassa, selain siirtyy kyseiseen osoitteeseen.
      window.location.href = url;
    }
  }
  
  document.addEventListener("click", function(event) {//Tämä kuuntelee kaikki klikkaukset.
    const dropdown = document.querySelector(".dropdown");
    const select = document.getElementById("projectsSelect");
  
    if (!dropdown.contains(event.target)) {//Jos klikataan jotain muuta kuin dropdownin sisältöä,
      select.style.display = "none"// piilottaa <select>-valikon.
    }
  })


//Vaihda teema nappi---------------------
function toggleTheme() {
  const body = document.body;
  // Vaihdetaan teemaluokka
  if (body.classList.contains('light-theme')) {
    body.classList.replace('light-theme', 'dark-theme');
  } else {
    body.classList.replace('dark-theme', 'light-theme');
  }
}




//userForm----------------------------------------------------------------

const form = document.getElementById("userForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault()//lopettaa lataamista
  
  // Haetaan kenttien arvot kun lähetetään lomakkeen l
  const name = document.getElementById("yourName").value
  const email= document.getElementById("yourEmail").value;
  const message = document.getElementById("messageToMe").value;
 
// Tyhjennä mahdollinen aiempi viesti
 errorMessage.textContent = "";

 
  if (email.trim() === "") {
    event.preventDefault(); // Estää lomakkeen lähetyksen
    errorMessage.textContent = "Email field cannot be empty!";
    errorMessage.style.color = "red";
  return;//Lopettaa lähettämista jos email on tyhjä

  }

//jos kaikki on ok
    alert('Thank you, ' + name + '! Your message has been sent.');// Näyttää viesti

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

form.reset();

});


  //nappi ylös--------------------------------------------------------
document.getElementById("toTopBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });