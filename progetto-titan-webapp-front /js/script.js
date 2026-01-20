/* =============================================
   1. GESTIONE STATO UTENTE E NAVIGAZIONE
   ============================================= */
let utenteRegistrato = false;

// Funzione per controllare se l'utente può accedere alle sezioni
function controllaAccesso(callback) {
  if (utenteRegistrato) {
    callback();
  } else {
    alert("Per favore, registrati prima di accedere alle sezioni TITAN!");
  }
}

/* =============================================
   2. GESTIONE MENU MOBILE (HAMBURGER)
   ============================================= */
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Listener per i link della Navbar
  document.getElementById("nav-home").addEventListener("click", (e) => {
    e.preventDefault();
    controllaAccesso(mostraHomeUtente);
    navMenu.classList.remove("active");
  });

  document.getElementById("nav-about").addEventListener("click", (e) => {
    e.preventDefault();
    controllaAccesso(mostraHomeUtente1);
    navMenu.classList.remove("active");
  });

  document.getElementById("nav-work").addEventListener("click", (e) => {
    e.preventDefault();
    controllaAccesso(mostraLavoraConNoi);
    navMenu.classList.remove("active");
  });

  document.getElementById("nav-shop").addEventListener("click", (e) => {
    e.preventDefault();
    controllaAccesso(mostraShop);
    navMenu.classList.remove("active");
  });

  /* =============================================
     3. GESTIONE REGISTRAZIONE
     ============================================= */
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      utenteRegistrato = true;
      alert("Registrazione effettuata con successo! Benvenuto.");

      // Nasconde il form e mostra la home utente
      mostraHomeUtente();

      // Opzionale: Nasconde il carosello o lo sposta per dare spazio
      document.querySelector(".carousel-section").style.marginTop = "20px";
    });
  }

  /* =============================================
     4. GESTIONE CARRELLO (CLICK SU ICONA)
     ============================================= */
  const cartIcon = document.getElementById("cart-container");
  if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      if (carrelloConteggio === 0) {
        alert("Il tuo carrello è attualmente vuoto.");
      } else {
        alert(
          `Riepilogo Carrello TITAN:\n----------------------\nArticoli: ${carrelloConteggio}\nTotale: €${totalePrezzo}\n\nProcedere al pagamento? (Funzione in arrivo)`
        );
      }
    });
  }
});

/* =============================================
   5. LOGICA CAROSELLO (SLIDER)
   ============================================= */
const slides = document.querySelectorAll(".slides img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
    img.classList.toggle("active", i === index);
  });
}

if (slides.length > 0) {
  // Inizializza il carosello
  showSlide(currentSlide);

  next.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  // Auto-play ogni 4 secondi
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000);
}
const chatContainer = document.getElementById("chatbot-container");
const chatBubble = document.getElementById("chat-bubble");
const closeChat = document.getElementById("close-chat");
const chatMessages = document.getElementById("chatbot-messages");

// Apri/Chiudi Chat
chatBubble.onclick = () => (chatContainer.style.display = "flex");
closeChat.onclick = () => (chatContainer.style.display = "none");

function chatResponse(tipo) {
  let response = "";
  let userQuery = "";

  // Logica risposte
  if (tipo === "scheda") {
    userQuery = "Come ottengo la scheda gratis?";
    response =
      "Dopo esserti registrato, clicca su 'Inizia Ora' nella Home, inserisci i tuoi dati e potrai scaricare il PDF immediatamente!";
  } else if (tipo === "professionale") {
    userQuery = "Cosa offrono i piani Pro?";
    response =
      "I piani Pro includono dieta personalizzata, check video della tecnica e supporto diretto 24/7 con i nostri coach professionisti.";
  } else if (tipo === "gare") {
    userQuery = "Voglio gareggiare!";
    response =
      "Grande! TITAN è nata per questo. I nostri coach ti seguiranno nella preparazione atletica, alimentare e nel posing per portarti sul palco.";
  } else if (tipo === "contatto") {
    userQuery = "Voglio parlare con un Coach.";
    response =
      "Puoi scriverci a altomarea59@gmail.com o contattarci su WhatsApp al +39 342 501 5092.";
  }

  // Aggiungi messaggi alla chat
  chatMessages.innerHTML += `<div class="user-msg">${userQuery}</div>`;
  setTimeout(() => {
    chatMessages.innerHTML += `<div class="bot-msg">${response}</div>`;
    chatMessages.scrollTop = chatMessages.scrollHeight; // Autoscroll
  }, 500);
}
