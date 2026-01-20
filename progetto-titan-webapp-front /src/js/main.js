let currentSlide = 0;
let main = document.getElementById("home1");
let carrelloConteggio = 0;
let totalePrezzo = 0;
let carrelloOggetti = [];
let genereSelezionato = "";

function getCarouselHTML() {
  return `
    <div class="carousel">
      <div class="slides" id="carousel-slides">
        <img src="images/images-1.jpg" class="active">
        <img src="images/images-2.jpg">
        <img src="images/images-3.jpg">
        <img src="images/images-4.png">
        <img src="images/cris.png">
        <img src="images/imgts.jpg"/>
        <img src="images/1.jpg"/>
        <img src="images/2.jpg"/>
        <img src="images/4.jpg"/>
      </div>
      <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
      <button class="next" onclick="moveSlide(1)">&#10095;</button>
    </div>`;
}
function getFooterHTML() {
  return `
  <footer class="footer-info" style="background:#111; padding:20px; color:white;">
    <div class="footer-container" style="display:flex; gap:15px; flex-wrap:wrap; justify-content:center;">
      
      <!-- Bottoni Assistenza -->
      <button id="btn-centro-aiuto" style="background:#000; color:white; padding:12px 25px; border:none; border-radius:6px; cursor:pointer; font-weight:bold;">
        Centro Aiuto
      </button>
      
      <button id="btn-faq" style="background:#000; color:white; padding:12px 25px; border:none; border-radius:6px; cursor:pointer; font-weight:bold;">
        FAQ
      </button>
      
      <button id="btn-termini" style="background:#000; color:white; padding:12px 25px; border:none; border-radius:6px; cursor:pointer; font-weight:bold;">
        Termini e Condizioni
      </button>
    </div>

    <!-- Contatti e Social -->
    <div class="footer-container" style="display:flex; gap:30px; flex-wrap:wrap; justify-content:center; margin-top:20px;">
      <div style="text-align:center;">
        <h4>CONTATTI</h4>
        <p>📧 altomarea59@gmail.com</p>
        <p>📞 +39 342 501 5092</p>
        <p>📍 Santo Stefano di Rogliano (CS)</p>
      </div>
      <div style="text-align:center;">
        <h4>SOCIAL</h4>
        <p>IG: @titan_fitness</p>
      </div>
    </div>
  </footer>`;
}

/* =========================
chatbot HTML
========================= */

function getChatbotHTML() {
  return `
    <div id="chat-bubble" onclick="toggleChat()">🤖</div>
    <div id="chatbot-container" style="display:none; flex-direction:column;">
      <div id="chatbot-header">TITAN ASSISTANT <button id="close-chat" onclick="toggleChat()">×</button></div>
      <div id="chatbot-messages" style="flex:1; overflow-y:auto; padding:10px;">
        <div class="bot-msg">Benvenuto Atleta! Come posso aiutarti oggi?</div>
      </div>
      <div id="chatbot-options" style="padding:10px; display:flex; flex-wrap:wrap; gap:5px;">
        <button onclick="botRisposta('piani')"> Come funzionano i piani</button>
        <button onclick="botRisposta('contatti')">Contatti</button>
        <button onclick="botRisposta('schede')">Come funzionano schede-personalizzate</button>
        <button onclick="botRisposta('tecnica')">La tecnica</button>
      </div>
    </div>`;
}

/* =========================
AVVIO APPLICAZIONE
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const n = localStorage.getItem("utenteNome");
  mostraNavbar(n);

  /* =========================
LOGICA FUNZIONALE (CARRELLO, BOT, DOWNLOAD)
========================= */
  window.toggleChat = function () {
    const chat = document.getElementById("chatbot-container");
    if (chat)
      chat.style.display =
        chat.style.display === "none" || chat.style.display === ""
          ? "flex"
          : "none";
  };
});
window.botRisposta = function (t) {
  const m = document.getElementById("chatbot-messages");
  const r = {
    piani:
      "Puoi scegliere tra BASE, MEDIUM e PRO nello Shop. Ogni piano offre diversi livelli di supporto e servizi personalizzati. Dop aver selezionato il piano, potrai procedere al pagamento e iniziare subito il tuo percorso con noi!",
    contatti:
      "Scrivici a altomarea59@gmail.com o al numero +39 342 501 5092 .siamo sempre pronti ad aiutarti!",
    schede:
      "Le scarichi dalla sezione 'Inizia Ora' dopo il profilo.E poi scegli il genere e il tipo di allenamento che preferisci!",
    tecnica:
      "Nel piano PRO analizziamo i video delle tue esecuzioni per correggere la tecnica e massimizzare i risultati!e per ogni dubbio siamo sempre disponibili.grazie mille per aver scelto titan!",
  };
  m.innerHTML += `<div class="bot-msg" style="background:#333; margin-top:5px; padding:8px; border-radius:5px;">${r[t]}</div>`;
  m.scrollTop = m.scrollHeight;
};

window.aggiungiAlCarrello = function (piano, prezzo) {
  carrelloConteggio++;
  totalePrezzo += prezzo;
  carrelloOggetti.push({ piano, prezzo });
  const countSpan = document.getElementById("cart-count");
  if (countSpan) countSpan.innerText = carrelloConteggio;
  alert(`Piano ${piano} aggiunto al carrello!`);
};

window.mostraRiepilogoOrdine = function () {
  if (carrelloOggetti.length === 0) return alert("Il carrello è vuoto!");
  if (confirm("Vuoi inviare l'ordine?")) {
    if (carrelloOggetti.length > 0)
      localStorage.setItem(
        "utentePiano",
        carrelloOggetti[carrelloOggetti.length - 1].piano,
      );

    alert("Ordine ricevuto!");
    location.reload();
  }
};

window.scaricaScheda = function (tipoAllenamento) {
  let genere = genereSelezionato;
  if (!genere) {
    const selectGenere = document.getElementById("genere");
    genere = selectGenere ? selectGenere.value : "Uomo";
  }

  const schede = {
    Uomo: {
      fullbody: "schede-personalizzate/full-body-uomo.pdf",
      cardio: "schede-personalizzate/cardio-uomo.pdf",
      power: "schede-personalizzate/power-uomo.pdf",
    },
    Donna: {
      fullbody: "schede-personalizzate/fullbody-donna.pdf",
      cardio: "schede-personalizzate/cardio-donna.pdf",
      power: "schede-personalizzate/power-donna.pdf",
    },
  };

  const nomeFile = schede[genere]?.[tipoAllenamento];
  if (!nomeFile) {
    alert("Scheda non trovata!");
    return;
  }

  const a = document.createElement("a");
  a.href = nomeFile;
  a.download = nomeFile.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

/* =========================
PAGINA LOGIN
========================= */
window.mostraLogin = function () {
  renderPage(`
    <h1 class="h1">TITAN LOGIN</h1>
    <section class="login-section">
      <form id="loginForm" class="form-container-dati">
        <div class="form-group">
          <input type="email" id="loginEmail" placeholder="Email" required>
        </div>
        <div class="form-group">
          <input type="password" id="loginPass" placeholder="Password" required>
        </div>
        <button type="submit" class="submit-button">ENTRA NELLA TANA</button>
      </form>
      <p style="text-align:center; margin-top:20px; color:white;">
        Nuovo atleta? <a href="#" onclick="mostraRegistrazione()" style="color:#00ff00; text-decoration:none; font-weight:bold;">Crea account</a>
      </p>
    </section>
  `);
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    gestisciLogin();
  });
};

function renderPage(contentHTML) {
  if (!main) main = document.getElementById("home1");
  main.innerHTML = `
    <div id="dynamic-content">${contentHTML}</div>
    ${getCarouselHTML()}
    ${getChatbotHTML()}
    ${getFooterHTML()}
  `;
  window.currentSlide = 0;
  setTimeout(() => {
    agganciaEventiFooter();
  }, 0);
}

/* =========================
FUNZIONI REGISTRAZIONE / LOGIN
========================= */

window.mostraRegistrazione = function () {
  renderPage(`
   <h1 class="h1">TITAN</h1> <section class="register-section"> <form id="registerForm" class="form-container-dati"> 
   <div class="form-group"> <input type="text" id="inputNome" placeholder="Nome" required> </div> 
   <div class="form-group"> <input type="text" id="inputCognome" placeholder="Cognome" required> </div> 
   <div class="form-group"> <input type="email" id="inputEmail" placeholder="Email" required> </div>
    <div class="form-group"> <input type="password" id="inputPass" placeholder="Password" required> </div> 
    <button type="submit" class="submit-button">REGISTRATI ORA</button> </form> 
    <p style="text-align:center; margin-top:20px; color:white;"> Hai già un account? 
   <a href="#" onclick="mostraLogin()" style="color:#00ff00; text-decoration:none; font-weight:bold;">Accedi ora</a> </p> </section>
  `);

  const registerForm = document.getElementById("registerForm");
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const d = {
      nome: document.getElementById("inputNome").value,
      cognome: document.getElementById("inputCognome").value,
      email: document.getElementById("inputEmail").value,
      password: document.getElementById("inputPass").value,
    };

    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(d),
      });

      if (res.ok) {
        const user = await res.json();
        localStorage.setItem("utenteNome", user.nome);
        localStorage.setItem("utenteLoggato", "true");
        alert("Registrazione completata, benvenuto Atleta!");
        mostraNavbar(user.nome);
        mostraHomeUtente();
      } else {
        alert("Errore registrazione");
      }
    } catch (err) {
      alert("email già in uso utilizza un'altra email");
    }
  });
};

window.mostraLogin = function () {
  renderPage(`
   <section class="login-section"> 
   <form id="loginForm" class="form-container-dati"> <div class="form-group">
    <input type="email" id="loginEmail" placeholder="Email" required> </div>
     <div class="form-group"> 
     <input type="password" id="loginPass" placeholder="Password" required> </div>
      <button type="submit" class="submit-button">ENTRA NELLA TANA</button> 
      </form> 
      <p style="text-align:center; margin-top:20px; color:white;"> Nuovo atleta? <a href="#" onclick="mostraRegistrazione()" style="color:#00ff00; text-decoration:none; font-weight:bold;">Crea account</a> 
      </p> </section>
  `);

  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPass").value;

    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const user = await res.json();
        localStorage.setItem("utenteNome", user.nome);
        localStorage.setItem("utenteLoggato", "true");
        alert("Bentornato su TITAN!");
        mostraNavbar(user.nome);
        mostraHomeUtente();
      } else {
        alert("Credenziali errate");
      }
    } catch (err) {
      alert("Errore di connessione al server");
    }
  });
};

/* =========================
   AVVIO APP
========================= */
/* =========================
   AVVIO APPLICAZIONE (UNIFICATO)
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  const loggato = localStorage.getItem("utenteLoggato") === "true";
  const nome = loggato ? localStorage.getItem("utenteNome") : null;
  mostraNavbar(nome);
  if (!loggato) {
    mostraRegistrazione();
  } else {
    mostraHomeUtente();
  }
  window.toggleChat = function () {
    const chat = document.getElementById("chatbot-container");
    if (chat) {
      chat.style.display =
        chat.style.display === "none" || chat.style.display === ""
          ? "flex"
          : "none";
    }
  };
});

window.logoutUtente = function () {
  localStorage.clear();
  location.reload();
};

async function inviaCandidatura(e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append("titolo", document.getElementById("cvTitolo").value);
  formData.append("nomeCompleto", document.getElementById("cvNome").value);
  formData.append("descrizione", document.getElementById("cvDesc").value);
  formData.append("file", document.getElementById("cvFile").files[0]);

  try {
    const res = await fetch("http://localhost:8080/api/cv/upload", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const user = await res.json();
      localStorage.setItem("utenteNome", user.nome);
      localStorage.setItem("utenteLoggato", "true");
      alert("Bentornato su TITAN!");
      location.reload();
    } else {
      alert("Errore durante l'invio.");
    }
  } catch (e) {
    alert("Errore di connessione al server.");
  }
}
window.mostraHomeUtente = function () {
  renderPage(`
     <section class="welcome-guide" style="padding: 20px; max-width: 800px; margin: 0 auto; color: white;">
      
      <div class="welcome-header" style="text-align: center; margin-bottom: 40px;">
        <h2 style="font-size: 2.5rem; color: #ff4d4d; text-transform: uppercase; margin-bottom: 10px;">Benvenuto in TITAN 💪</h2>
        <p style="font-size: 1.2rem; color: #ccc;">Il tuo viaggio verso la vetta inizia oggi. Non è solo allenamento, è disciplina.</p>
      </div>

      <div class="guide-steps" style="display: grid; gap: 20px;">
        
        <div class="step-card" style="background: rgba(255,255,255,0.05); padding: 25px; border-radius: 15px; border-left: 4px solid #ffffff;">
          <h3 style="margin-top: 0;">1. Inizia con la tua Scheda OMAGGIO 🎁</h3>
          <p style="line-height: 1.6;">Vogliamo che tu metta alla prova la nostra qualità. Cliccando su <strong>"Inizia Ora"</strong>, potrai configurare il tuo profilo e scaricare una scheda di allenamento base personalizzata per il tuo genere, <strong>completamente gratuita</strong>.</p>
          <ul style="margin: 10px 0; padding-left: 20px; color: #bbb;">
            <li>Perfetta per approcciarsi al mondo del fitness.</li>
            <li>Focus sui movimenti fondamentali.</li>
          </ul>
        </div>

        <div class="step-card" style="background: rgba(255,77,77,0.1); padding: 25px; border-radius: 15px; border-left: 4px solid #ff4d4d;">
          <h3 style="margin-top: 0; color: #ff4d4d;">2. Evolvi con il Supporto Pro 🏆</h3>
          <p style="line-height: 1.6;">Se il tuo obiettivo è la massima performance o la preparazione a una gara, il nostro team di professionisti è pronto a seguirti passo dopo passo. Accedendo alla sezione <strong>Shop</strong>, troverai i nostri abbonamenti.</p>
          <ul style="margin: 10px 0; padding-left: 20px; color: #bbb;">
            <li>Piani alimentari studiati da professionisti.</li>
            <li>Check video per correggere la tua tecnica (essenziale per Powerlifter).</li>
            <li>Contatto diretto h24 con il tuo Coach.</li>
          </ul>
        </div>

        <div class="motivation-quote" style="text-align: center; margin: 30px 0; padding: 20px; border-top: 1px solid #333;">
          <p style="font-style: italic; font-size: 1.1rem; color: #ff4d4d;">""TITAN: NO PAIN, NO GAIN. ENTRA COME ATLETA, ESCI COME LEGGENDA. SE INIZI CON NOI, IL FALLIMENTO NON È UN'OPZIONE: NON CI SI FERMA FINCHÉ IL PESO NON SALE. MAI MOLLARE, MAI CEDERE.""</p>
        </div>

        <div class="action-buttons" style="display: flex; flex-direction: column; gap: 15px; align-items: center;">
         <button onclick="mostraHomeUtente3()" class="submit-button" style="width:100%; max-width:400px; cursor:pointer;">Inizia Ora (Scheda Gratuita)</button>
        <button onclick="mostraShop()" style="background:transparent; border:1px solid #ccc; color:white; padding:10px; margin-top:10px; cursor:pointer;">Esplora i Piani Professionali</button>
        </div>

      </div>
    </section>
  `);
};
window.mostraProfilo = function () {
  const nome = localStorage.getItem("utenteNome") || "N/D";
  const cognome = localStorage.getItem("utenteCognome") || "N/D";
  const email = localStorage.getItem("utenteEmail") || "N/D";
  const piano = localStorage.getItem("utentePiano") || "GRATUITO";

  renderPage(
    `
    <h1 class="h1">IL TUO PROFILO TITAN</h1>
    <section style="max-width:500px; margin:0 auto; background:rgba(255,255,255,0.05); padding:30px; border-radius:15px; border:1px solid #333; color:white;">
      <p style="margin-bottom:10px;"><strong>NOME:</strong> ${nome}</p>
      <p style="margin-bottom:10px;"><strong>COGNOME:</strong> ${cognome}</p>
      <p style="margin-bottom:10px;"><strong>EMAIL:</strong> ${email}</p>
      <div style="margin-top:20px; padding:15px; background:rgba(255,77,77,0.1); border:1px solid #ff4d4d; border-radius:10px;">
        <p><strong>PIANO ATTIVO:</strong> <span style="color:#00ff00; font-weight:bold;">${piano}</span></p>
      </div>
      <button onclick="mostraShop()" class="submit-button" style="width:100%; margin-top:20px;">CAMBIA PIANO</button>
    </section>
  `,
    true,
    "mostraHomeUtente",
  );
};
window.mostraSceltaAllenamento = function () {
  renderPage(
    `
    <h1 class="h1">SCEGLI LA SCHEDA</h1>
    <div style="display:flex; flex-direction:column; align-items:center; gap:15px;">
      <button onclick="scaricaScheda('fullbody')" class="submit-button" style="width:250px;">🏋️‍♂️ Full Body</button>
      <button onclick="scaricaScheda('cardio')" class="submit-button" style="width:250px;">🏃‍♂️ Cardio</button>
      <button onclick="scaricaScheda('power')" class="submit-button" style="width:250px;">🔥 Power</button>
    </div>
  `,
    true,
    "mostraHomeUtente3",
  );
};

window.mostraShop = function () {
  renderPage(
    `
<h1 class="h1">TITAN SHOP</h1>
<div class="pricing-table" style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
<div class="price-card" style="border:1px solid #333; padding:20px; text-align:center;">
<h3>BASE</h3><p>29€</p>
<button onclick="aggiungiAlCarrello('BASE', 29)" class="submit-button">Aggiungi</button>
</div>
<div class="price-card" style="border:1px solid #333; padding:20px; text-align:center;">
<h3>MEDIUM</h3><p>60€</p>
<button onclick="aggiungiAlCarrello('MEDIUM', 60)" class="submit-button">Aggiungi</button>
</div>
<div class="price-card" style="border:1px solid #ff4d4d; padding:20px; text-align:center;">
<h3>PRO</h3><p>99€</p>
<button onclick="aggiungiAlCarrello('PRO', 99)" class="submit-button">Aggiungi</button>
</div>
</div>
`,
    true,
    "mostraHomeUtente",
  );
};
window.mostraLavoraConNoi = function () {
  renderPage(
    `
    <h1 class="h1">LAVORA CON NOI</h1>
    <form id="cvForm" class="form-container-dati" style="max-width:450px; margin:0 auto;">
      <input type="text" id="cvTitolo" placeholder="Titolo (es. Personal Trainer)" required>
      <input type="text" id="cvNome" placeholder="Nome Completo" required>
      <textarea id="cvDesc" placeholder="Breve descrizione di te..." style="width:100%; height:100px; margin:10px 0; background:#222; color:white; border:1px solid #444; padding:10px;"></textarea>
      <label style="color:white; display:block; margin-bottom:5px;">Carica il tuo CV (PDF)</label>
      <input type="file" id="cvFile" accept=".pdf" required style="color:white; margin-bottom:20px;">
      <button type="submit" class="submit-button">INVIA CANDIDATURA</button>
    </form>
  `,
    true,
    "mostraHomeUtente",
  );
  document.getElementById("cvForm").onsubmit = inviaCandidatura;
};

/* =========================
NAVBAR 
========================= */
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
          <li><a href="#" onclick="mostraProfilo()">Profile</a></li>
        </ul>
      </nav>`
        : ""
    }

    <div class="header-right">
      ${
        n
          ? `
        <div class="cart-box" onclick="mostraRiepilogoOrdine()" style="cursor:pointer;">
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
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
}

window.mostraHomeUtente1 = function () {
  renderPage(
    `<section class="about-section">
      <div class="about-container" style="padding: 40px 20px; max-width: 900px; margin: 0 auto; color: white;">
        
        <h1 class="h1">BEYOND THE LIMITS</h1>
        
        <div class="founder-box" style="display: flex; flex-wrap: wrap; gap: 30px; align-items: center; margin-bottom: 50px; background: rgba(255,255,255,0.05); padding: 30px; border-radius: 20px; border-left: 5px solid #ff4d4d;">
          <div class="founder-text" style="flex: 1; min-width: 300px;">
            <h2 style="color: #ff4d4d; text-transform: uppercase; margin-bottom: 10px;">Il Fondatore: La mia Visione</h2>
            <p style="line-height: 1.8; font-size: 1.1rem;">
              Sono un <strong>Powerlifter di 21 anni</strong>. Ho passato ore sotto il bilanciere, sentendo il peso della ghisa e il battito del cuore accelerare prima di ogni massimale. Non ho ancora avuto l'occasione di salire su quel palco di gara che tanto sogno, ma è proprio da questa attesa che è nata la scintilla di <strong>TITAN</strong>.
            </p>
            <p style="line-height: 1.8; font-size: 1.1rem; margin-top: 15px;">
              Ho creato questa WebApp perché credo che la forza non sia solo nei muscoli, ma nella capacità di <strong>realizzarsi</strong>. Voglio dare a tutti gli strumenti per trasformare il proprio potenziale in realtà, offrendo un supporto che io stesso avrei voluto trovare lungo il mio percorso.
            </p>
          </div>
        </div>

        <div class="mission-box" style="text-align: center; margin-bottom: 50px;">
          <h2 style="text-transform: uppercase; letter-spacing: 2px; color: #ff4d4d;">Dall'Amatore al Professionista</h2>
          <p style="line-height: 1.8; font-style: italic; font-size: 1.2rem; color: #ccc;">
            "Il nostro obiettivo è portarti sul palco, in pedana o semplicemente alla migliore versione di te stesso."
          </p>
          <p style="line-height: 1.8; margin-top: 20px;">
            Che il tuo sogno sia gareggiare come professionista o rivoluzionare il tuo stile di vita, TITAN è il tuo partner. Siamo specializzati nel <strong>coaching per competizioni</strong> in ogni disciplina fitness, guidandoti passo dopo passo verso l'eccellenza.
          </p>
        </div>

        <div class="team-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
          <div class="team-card" style="background: rgba(0,0,0,0.6); padding: 20px; border: 1px solid #333; border-radius: 10px; text-align: center;">
            <h3 style="color: #ff4d4d;">Nutrizione Tecnica</h3>
            <p>Esperti nel settore alimentare per diete personalizzate e preparazione atletica specifica.</p>
          </div>
          <div class="team-card" style="background: rgba(0,0,0,0.6); padding: 20px; border: 1px solid #333; border-radius: 10px; text-align: center;">
            <h3 style="color: #ff4d4d;">Performance Coaching</h3>
            <p>Professionisti dello sport focalizzati su forza, ipertrofia e biomeccanica del movimento.</p>
          </div>
          <div class="team-card" style="background: rgba(0,0,0,0.6); padding: 20px; border: 1px solid #333; border-radius: 10px; text-align: center;">
            <h3 style="color: #ff4d4d;">Supporto Gare</h3>
            <p>Un team dedicato per chi vuole affacciarsi al mondo del professionismo e delle competizioni.</p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 50px;">
          <button onclick="mostraHomeUtente3()" class="submit-button" style="width: auto; padding: 15px 40px;">Unisciti alla nostra visione</button>
        </div>

      </div>
    </section>`,
    true,
    "mostraHomeUtente",
  );
};
window.mostraHomeUtente3 = function () {
  renderPage(
    `
    <h1 class="h1">TITAN PROFILE</h1>
    <div class="form-container-dati" style="max-width:400px; margin:0 auto;">
      <label>Genere</label>
      <select id="genere" style="width:100%; padding:10px;"><option value="Uomo">Uomo</option><option value="Donna">Donna</option></select>
      <input type="number" id="altezza" placeholder="Altezza (cm)" style="width:100%; margin:10px 0; padding:10px;">
      <input type="number" id="peso" placeholder="Peso (kg)" style="width:100%; margin:10px 0; padding:10px;">
      <button onclick="genereSelezionato=document.getElementById('genere').value; mostraSceltaAllenamento();" class="submit-button">Continua</button>
    </div>`,
    true,
    "mostraHomeUtente",
  );
};
document.addEventListener("DOMContentLoaded", () => {
  const loggato = localStorage.getItem("utenteLoggato") === "true";
  const nome = loggato ? localStorage.getItem("utenteNome") : null;

  mostraNavbar(nome);

  if (!loggato) {
    mostraRegistrazione();
  } else {
    mostraHomeUtente();
  }
});

function agganciaEventiFooter() {
  const centro = document.getElementById("btn-centro-aiuto");
  const faq = document.getElementById("btn-faq");
  const termini = document.getElementById("btn-termini");

  if (centro)
    centro.onclick = () => {
      alert(`📞 CENTRO AIUTO - TITAN

Hai bisogno di assistenza? Il nostro team è a tua disposizione per qualsiasi domanda su registrazione, piani o download delle schede.

Contatti disponibili:
📧 Email: altomarea59@gmail.com
☎️ Telefono / WhatsApp: +39 342 501 5092

Rispondiamo il prima possibile per aiutarti a ottenere il massimo dai nostri servizi.`);
    };

  if (faq)
    faq.onclick = () => {
      alert(`❓ FAQ - TITAN

1️⃣ Come mi registro?
Vai su "Registrati", inserisci nome, cognome, email e password. Riceverai un messaggio di conferma e potrai accedere al sito.

2️⃣ Come scarico le schede di allenamento?
Dopo il login, clicca su "Inizia Ora", scegli il tuo genere e il tipo di allenamento. Riceverai un PDF della scheda personalizzata.

3️⃣ Come acquisto un piano professionale?
Vai su "Shop", seleziona il piano desiderato (BASE, MEDIUM, PRO) e completa il checkout.

4️⃣ Cosa fare se dimentico la password?
Contatta il Centro Aiuto per assistenza sulla reimpostazione della password.`);
    };

  if (termini)
    termini.onclick = () => {
      alert(`⚖️ Termini e Condizioni di Utilizzo del Servizio TITAN

Benvenuto su TITAN. Utilizzando questo sito web o le relative applicazioni, accetti di essere vincolato ai seguenti termini e condizioni.

1. Accettazione dei Termini
Accedendo e utilizzando i servizi offerti da TITAN, dichiari di aver letto, compreso e di accettare integralmente questi Termini e Condizioni.

2. Servizi Offerti
TITAN fornisce contenuti relativi a piani di allenamento, schede personalizzate e guide di fitness. I servizi sono destinati esclusivamente ad uso personale.

3. Registrazione e Account
Alcune funzionalità richiedono la registrazione. Sei responsabile della protezione delle tue credenziali e di qualsiasi azione eseguita tramite il tuo account.

4. Proprietà Intellettuale
Tutti i contenuti, marchi, immagini, testi e materiali pubblicati su questo sito appartengono a TITAN o ai suoi licenziatari e sono protetti da diritti d’autore e di proprietà intellettuale.

5. Responsabilità
L’uso dei contenuti è a tuo rischio. TITAN non è responsabile per eventuali danni derivanti dall’uso dei piani, programmi o strumenti disponibili tramite il sito.

6. Legge Applicabile
Questi Termini sono regolati dalla legge italiana. Qualsiasi controversia relativa all’uso dei servizi sarà di competenza esclusiva dei tribunali italiani.

7. Modifiche ai Termini
TITAN si riserva il diritto di aggiornare o modificare i presenti Termini in qualsiasi momento. La versione aggiornata sarà pubblicata su questa pagina.`);
    };
}
window.moveSlide = function (step) {
  const imgs = document.querySelectorAll(".slides img");
  if (imgs.length === 0) return;
  imgs[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + step + imgs.length) % imgs.length;
  imgs[currentSlide].classList.add("active");
};
