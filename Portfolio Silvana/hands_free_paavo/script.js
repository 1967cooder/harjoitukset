document.getElementById("toggleBtn").addEventListener("click", () => {
    const text = document.getElementById("hiddenText");
    text.style.display = text.style.display === "none" || text.style.display === "" ? "block" : "none";
  });
  
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("formMessage").textContent = "✅ Message sent successfully!";
  });
  