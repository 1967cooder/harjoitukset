document.getElementById("userForm").addEventListener("submit", function (event) {
    // Haetaan kenttien arvot
    const password = document.getElementById("passowrd").value;
    const confirm = document.getElementById("checkpassowrd").value;
    const errorMessage = document.getElementById("errorMessage");

    // Tyhjennä mahdollinen aiempi viesti
    errorMessage.textContent = "";

    // Tarkista vastaavuus
    if (password !== confirm) {
      event.preventDefault(); // Estää lomakkeen lähetyksen
      errorMessage.textContent = "Salasanat eivät täsmää!";
      errorMessage.style.color = "red";
    }
});