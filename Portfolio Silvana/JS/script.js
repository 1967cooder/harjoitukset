


















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