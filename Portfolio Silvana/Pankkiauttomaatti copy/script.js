
let balance = 0;//aloitussaldo
const correctPIN = "1234"; // Voit vaihtaa PINin tähän

//valitaan document.getElementById(...)— valitaan HTML-elementit, joihin tarvitaan viittauksia
const loginSection = document.getElementById("loginSection");
const pinInput = document.getElementById("pinInput");
const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");


const atmSection = document.getElementById("atmSection");
const balanceElement = document.getElementById("balance");
const depositInput = document.getElementById("depositAmount");
const withdrawInput = document.getElementById("withdrawAmount");
const messageElement = document.getElementById("message");


function login() { //kirjaudutaan
    const enteredPIN = pinInput.value;
    if (enteredPIN === correctPIN) {// kun syöttökoodi on oikea
        loginSection.style.display = "none";//Tämä piilottaa kirjautumislomakkeen (PIN-kentän ja napin) selaimessa."none" tarkoittaa, että elementti ei näy lainkaan sivulla, ei vie tilaa, eikä ole aktiivinen.
        atmSection.style.display = "block";//Tämä näyttää varsinaisen pankkiautomaatin (saldo, talletus, nosto), joka oli aiemmin piilotettuna."block" tarkoittaa, että elementti näkyy normaalisti (rivielementtinä) sivulla.
        updateBalance();
    } else {
        loginMessage.textContent = "Väärä PIN-koodi";
    }

}

function updateBalance() { //päivittää saldon näkyviin
  balanceElement.textContent = balance.toFixed(2);
}

function showMessage(msg, isError = true) { //äyttää virheen tai onnistumisviestin punaisena tai vihreänä
  messageElement.textContent = msg;
  messageElement.style.color = isError ? "red" : "green";
}

function deposit() { //lukee syötteen, tarkistaa sen ja kasvattaa saldoa
  const amount = parseFloat(depositInput.value);
  if (isNaN(amount) || amount <= 0) { //isNaN(amount) — estää ei-numeerisen syötteen; amount <= 0 — estää negatiiviset tai nollasyötteet
    showMessage("Syötä kelvollinen summa talletukseen.");
    return;
  }
  balance += amount;
  updateBalance();
  showMessage("Talletus onnistui!", false);
  depositInput.value = "";
}

function withdraw() { //lukee syötteen, tarkistaa sen ja vähentää saldoa vain jos riittää
  const amount = parseFloat(withdrawInput.value);
  if (isNaN(amount) || amount <= 0) { //isNaN(amount) — estää ei-numeerisen syötteen; amount <= 0 — estää negatiiviset tai nollasyötteet
    showMessage("Syötä kelvollinen summa nostoon.");
    return;
  }
  if (amount > balance) { //amount > balance — estää nostot, jos rahaa ei riitä
    showMessage("Saldo ei riitä nostoon.");
    return;
  }
  balance -= amount;
  updateBalance();
  showMessage("Nosto onnistui!", false);
  withdrawInput.value = "";
}

loginBtn.addEventListener("click", login);//Kun käyttäjä klikkaa "Kirjaudu" - pääsää sisään
document.getElementById("depositBtn").addEventListener("click", deposit);//Kun käyttäjä klikkaa "Talleta" → kutsutaan deposit()
document.getElementById("withdrawBtn").addEventListener("click", withdraw);//Kun käyttäjä klikkaa "Nosta" → kutsutaan withdraw()

// Alussa näytetään saldo
updateBalance();
