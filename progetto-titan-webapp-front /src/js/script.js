/* =============================================
   1. VARIABILI GLOBALI E STATO
   ============================================= */
let currentSlide = 0;
let carrelloConteggio = 0;
let totalePrezzo = 0;

/* =============================================
   2. NAVIGAZIONE E NAVBAR (Responsive)
   ============================================= */
function mostraNavbar(n = null) {
  const h = document.getElementById("header-container");
  if (!h) return;

  h.innerHTML = `
    <div class="logo-area">
      <h1 class="logo-text" onclick="location.reload()">TITAN</h1>
    </div>
    ${
      n
        ? `
      <div id="mobile-menu" class="hamburger">&#9776;</div>
      <nav id="nav-menu" class="navbar">
        <ul class="menu">
          <li><a href="#" onclick="mostraHomeUtente()">Home</a></li>
          <li><a href="#" onclick="mostraHomeUtente1()">Chi Siamo</a></li>
          <li><a href="#" onclick="mostraShop()">Shop</a></li>
          <li><a href="#" onclick="mostraLavoraConNoi()">Lavora con Noi</a></li>
          <li><a href="#" onclick="mostraProfilo()">Profilo</a></li>
        </ul>
      </nav>`
        : ""
    }
    <div class="header-right">
      ${
        n
          ? `
        <div class="cart-box" onclick="mostraRiepilogoOrdine()">
          🛒 <span id="cart-count">${carrelloConteggio}</span>
        </div>
        <button onclick="logoutUtente()" class="logout-btn">Logout</button>`
          : ""
      }
    </div>
  `;

  const menuToggle = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");
  if (menuToggle && navMenu) {
    menuToggle.onclick = () => navMenu.classList.toggle("active");
  }
}

/* =============================================
   3. REGISTRAZIONE & LOGIN (Usa api.js)
   ============================================= */
async function gestisciRegistrazione(e) {
  e.preventDefault();
  const d = {
    nome: document.getElementById("inputNome").value,
    cognome: document.getElementById("inputCognome").value,
    email: document.getElementById("inputEmail").value,
    password: document.getElementById("inputPass").value,
  };

  try {
    const res = await window.apiTitan.register(d);

    if (res.ok) {
      const user = await res.json();
      salvaSessione(user.nome);
      alert("Benvenuto Atleta!");
      mostraHomeUtente();
    } else {
      alert("Email già in uso o dati non validi.");
    }
  } catch (err) {
    alert("Errore di connessione al server.");
  }
}
async function gestisciLogin(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPass").value;

  try {
    const res = await window.apiTitan.login({ email, password });
    if (res.ok) {
      const user = await res.json();
      salvaSessione(user.nome);
      alert("Bentornato su TITAN!");
      mostraHomeUtente();
    } else {
      alert("Credenziali errate.");
    }
  } catch (err) {
    alert("Errore di connessione al server.");
  }
}

async function gestisciCandidatura(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  try {
    const res = await window.apiTitan.uploadCV(formData);
    if (res.ok) {
      alert("Candidatura inviata con successo! Ti contatteremo presto.");
      mostraHomeUtente();
    } else {
      alert("Errore durante l'invio del CV.");
    }
  } catch (err) {
    alert("Errore di connessione.");
  }
}

function salvaSessione(nome) {
  localStorage.setItem("utenteLoggato", "true");
  localStorage.setItem("utenteNome", nome);
  mostraNavbar(nome);
}

function logoutUtente() {
  localStorage.clear();
  location.reload();
}

/* =============================================
   4. LOGICA CAROSELLO E CHATBOT
   ============================================= */
function avviaCarosello() {
  const slides = document.querySelectorAll(".slides img");
  if (slides.length === 0) return;

  function showSlide(index) {
    slides.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
      img.classList.toggle("active", i === index);
    });
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000);
}

window.chatResponse = function (tipo) {
  const chatMessages = document.getElementById("chatbot-messages");
  const risposte = {
    scheda: "Registrati, vai su 'Inizia Ora' e scarica il PDF gratis!",
    professionale: "I piani Pro offrono coaching 1-to-1 e check video.",
    contatto: "Scrivici a altomarea59@gmail.com o su WhatsApp.",
  };
  chatMessages.innerHTML += `<div class="user-msg" style="background:#444; padding:5px; margin:5px; border-radius:5px;">Richiesta: ${tipo}</div>`;
  setTimeout(() => {
    chatMessages.innerHTML += `<div class="bot-msg" style="background:#222; border-left:3px solid #ff4d4d; padding:5px; margin:5px;">${risposte[tipo]}</div>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 600);
};

/* =============================================
   5. AVVIO APPLICAZIONE
   ============================================= */
document.addEventListener("DOMContentLoaded", () => {
  const loggato = localStorage.getItem("utenteLoggato") === "true";
  const nome = localStorage.getItem("utenteNome");

  mostraNavbar(nome);

  if (!loggato) {
    if (typeof mostraRegistrazione === "function") mostraRegistrazione();
  } else {
    if (typeof mostraHomeUtente === "function") mostraHomeUtente();
    avviaCarosello();
  }
});
