const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

// Lisää klikattavat "See more" -linkit
const projectLinks = document.querySelectorAll(".project a");

projectLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    // Jos haluat estää linkin toimimasta ja näyttää vain modaalin:
    // event.preventDefault();

    // Avaa modaali
    modal.style.display = "flex";
  });
});

// Sulje modaali "X":stä
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Sulje modaali jos klikataan taustaa
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});