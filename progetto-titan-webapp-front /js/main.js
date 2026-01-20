const main = document.getElementById("home1");
let genereSelezionato = "";
let carrelloConteggio = 0;
let totalePrezzo = 0;

/* =============================================
   FUNZIONE UTILITY PER LA FRECCIA
   ============================================= */
function gestisciFrecciaIndietro(mostra, destinazione) {
  const backBtnContainer = document.getElementById("back-button-container");
  const backBtn = document.getElementById("btn-back");
  if (!backBtnContainer || !backBtn) return;

  if (mostra) {
    backBtnContainer.style.display = "block";
    backBtn.onclick = () => window[destinazione]();
  } else {
    backBtnContainer.style.display = "none";
  }
}

/* =========================
   HOME LOGGATA - GUIDA & MOTIVAZIONE
========================= */
function mostraHomeUtente() {
  gestisciFrecciaIndietro(false);
  main.innerHTML = `
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
          <button id="startButton" class="submit-button" style="width: 100%; max-width: 400px; font-size: 1.2rem;">Inizia Ora (Scheda Gratuita)</button>
          <button onclick="mostraShop()" style="background: transparent; border: 1px solid #ccc; color: white; padding: 10px 20px; cursor: pointer; border-radius: 5px; transition: 0.3s;">Esplora i Piani Professionali</button>
        </div>

      </div>
    </section>
  `;
  document
    .getElementById("startButton")
    .addEventListener("click", mostraHomeUtente3);
}

/* =========================
   CHI SIAMO
========================= */
function mostraHomeUtente1() {
  gestisciFrecciaIndietro(true, "mostraHomeUtente");
  main.innerHTML = `
    <section class="about-section">
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
    </section>
  `;
}

/* =========================
   PROFILO DATI (PESO/ALTEZZA)
========================= */
function mostraHomeUtente3() {
  gestisciFrecciaIndietro(true, "mostraHomeUtente");
  main.innerHTML = `
  <section id="page-dati" class="home-utente2">
    <h1 class="h1">TITAN PROFILE</h1>
    <div class="form-container-dati" style="max-width:400px; margin:0 auto;">
      <div class="form-group" style="margin-bottom:15px;">
        <label>Genere</label>
        <select id="genere" style="width:100%; padding:10px;">
          <option value="Uomo">Uomo 🏋️‍♂️</option>
          <option value="Donna">Donna 🏋️‍♀️</option>
        </select>
      </div>
      <div class="form-group" style="margin-bottom:15px;">
        <label>Altezza (cm)</label>
        <input type="number" id="altezza" placeholder="es. 175" style="width:100%; padding:10px; box-sizing:border-box;">
      </div>
      <div class="form-group" style="margin-bottom:15px;">
        <label>Peso (kg)</label>
        <input type="number" id="peso" placeholder="es. 70" style="width:100%; padding:10px; box-sizing:border-box;">
      </div>
      <button id="btn-conferma-dati" class="submit-button">Continua</button>
    </div>
  </section>
  `;

  document.getElementById("btn-conferma-dati").addEventListener("click", () => {
    genereSelezionato = document.getElementById("genere").value;
    mostraSceltaAllenamento();
  });
}

/* =========================
   SCELTA ALLENAMENTO
========================= */
function mostraSceltaAllenamento() {
  gestisciFrecciaIndietro(true, "mostraHomeUtente3");
  main.innerHTML = `
    <section class="text2">
      <h1 class="h1">SCEGLI LA SCHEDA</h1>
      <button id="workout1" class="submit-button" style="margin:10px;">🏋️‍♂️ Full Body Intense</button>
      <button id="workout2" class="submit-button" style="margin:10px;">🏃‍♂️ Cardio Burn</button>
      <button id="workout3" class="submit-button" style="margin:10px;">🔥 Power & Mass</button>
    </section>
  `;

  document
    .getElementById("workout1")
    .addEventListener("click", mostraHomeUtente4);
  document
    .getElementById("workout2")
    .addEventListener("click", mostraHomeUtente5);
  document
    .getElementById("workout3")
    .addEventListener("click", mostraHomeUtente6);
}

/* =========================
   LOGICA DOWNLOAD SCHEDE
========================= */
function mostraPaginaDownload(titolo, desc, fileUomo, fileDonna) {
  gestisciFrecciaIndietro(true, "mostraSceltaAllenamento");
  let file = genereSelezionato === "Uomo" ? fileUomo : fileDonna;

  main.innerHTML = `
    <section class="download-page">
      <h1 class="h1">${titolo}</h1>
      <p style="text-align:center; color:white;">${desc}</p>
      <div style="text-align:center; margin-top:30px;">
        <button class="submit-button" id="btn-scarica-scheda" style="width:auto; padding: 15px 30px;">
          SCARICA SCHEDA ${genereSelezionato.toUpperCase()}
        </button>
      </div>
    </section>
  `;

  // Event listener per scaricare il PDF
  const btnDownload = document.getElementById("btn-scarica-scheda");
  btnDownload.addEventListener("click", () => {
    fetch(`/schede-personalizzate${file}`)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = file;
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.error("Errore download PDF:", err);
        alert(
          "Impossibile scaricare il PDF. Controlla che sia nella cartella corretta."
        );
      });
  });
}

function mostraHomeUtente4() {
  mostraPaginaDownload(
    "FULL BODY",
    "Allenamento totale.",
    "scheda-fullbody-uomo.pdf",
    "full-body-donna.pdf"
  );
}
function mostraHomeUtente5() {
  mostraPaginaDownload(
    "CARDIO BURN",
    "Brucia calorie.",
    "cardio-uomo.pdf",
    "cardio-donna.pdf"
  );
}
function mostraHomeUtente6() {
  mostraPaginaDownload(
    "POWER & MASS",
    "Forza bruta.",
    "power-uomo.pdf",
    "power-donna.pdf"
  );
}

/* =========================
   LAVORA CON NOI
========================= */
function mostraLavoraConNoi() {
  gestisciFrecciaIndietro(true, "mostraHomeUtente");
  main.innerHTML = `
    <section class="work-with-us">
      <h1 class="h1">JOIN THE TEAM</h1>
      <div class="company-presentation" style="background:rgba(255,255,255,0.05); padding:20px; border-radius:10px; margin-bottom:20px;">
        <p style="color:white;">Cerchiamo Coach esperti per espandere la visione TITAN.</p>
      </div>
      <form id="cvForm" class="form-container-dati">
        <input type="text" placeholder="Nome Completo" required style="width:100%; margin-bottom:10px; padding:10px; box-sizing:border-box;">
        <input type="file" accept=".pdf" required style="color:white; margin-bottom:10px;">
        <button type="submit" class="submit-button">INVIA CV</button>
      </form>
    </section>
  `;
  document.getElementById("cvForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Candidatura inviata con successo!");
    mostraHomeUtente();
  });
}

/* =========================
   SHOP E CARRELLO
========================= */
function mostraShop() {
  gestisciFrecciaIndietro(true, "mostraHomeUtente");
  main.innerHTML = `
    <section class="shop-container">
      <h1 class="h1">TITAN SHOP</h1>
      <div class="pricing-table">
        <div class="price-card">
          <h3>BASE</h3>
          <p>Accesso alle funzionalità essenziali.</p>
          <ul>
            <li>Programmi di allenamento standard</li>
            <li>funzione di supporto non disponibile</li>
          </ul>
          <div class="price">29<span>€</span></div>
          <button class="submit-button" onclick="aggiungiAlCarrello('BASE', 29)">Aggiungi</button>
        </div>
        <div class="price-card featured">
          <h3>MEDIUM</h3>
          <p>Accesso completo alle funzionalità principali.</p>
          <ul>
            <li>Programmi di allenamento personalizzati</li>
            <li>Accesso alla community TITAN</li>
            <li>Supporto via email</li>
          </ul>
          <div class="price">59<span>€</span></div>
          <button class="submit-button" onclick="aggiungiAlCarrello('MEDIUM', 59)">Aggiungi</button>
        </div>
        <div class="price-card">
          <h3>PRO</h3>
          <p>Tutte le funzionalità premium.</p>
          <ul>
            <li>Coaching 1:1 mensile</li>
            <li>Accesso anticipato alle nuove funzionalità</li>
            <li>Supporto prioritario 24/7</li>
            <li>dietologo dedicato</li>
          </ul>
          <div class="price">99<span>€</span></div>
          <button class="submit-button" onclick="aggiungiAlCarrello('PRO', 99)">Aggiungi</button>
        </div>
      </div>
    </section>
  `;
}

function aggiungiAlCarrello(piano, prezzo) {
  carrelloConteggio++;
  totalePrezzo += prezzo;

  const contatoreVisivo = document.getElementById("cart-count");
  if (contatoreVisivo) {
    contatoreVisivo.innerText = carrelloConteggio;
    contatoreVisivo.style.transform = "scale(1.5)";
    setTimeout(() => {
      contatoreVisivo.style.transform = "scale(1)";
    }, 200);
  }
  alert(`Piano ${piano} aggiunto! \nTotale: €${totalePrezzo}`);
}
// Gestione alert per i link Assistenza
document.getElementById("centro-aiuto").addEventListener("click", function (e) {
  e.preventDefault();
  alert(
    "CENTRO AIUTO\n\n" +
      "Se hai problemi con l'app o il sito, puoi contattarci via email all'indirizzo altomarea59@gmail.com oppure chiamare il numero +39 342 501 5092. " +
      "Siamo disponibili dal lunedì al venerdì, dalle 9 alle 18."
  );
});

document.getElementById("faq").addEventListener("click", function (e) {
  e.preventDefault();
  alert(
    "FAQ - Domande Frequenti\n\n" +
      "1. Come scarico la mia scheda di allenamento?\n" +
      "   Dopo la registrazione, clicca su 'Inizia Ora' e seleziona il tuo genere e tipo di allenamento.\n\n" +
      "2. Posso cambiare il mio genere dopo la registrazione?\n" +
      "   Sì, puoi modificare il genere nella sezione 'Il Mio Profilo'.\n\n" +
      "3. Come funziona lo Shop?\n" +
      "   Puoi acquistare piani personalizzati e aggiungerli al carrello. Riceverai conferma e fattura via email."
  );
});

document.getElementById("termini").addEventListener("click", function (e) {
  e.preventDefault();
  alert(
    "TERMINI E CONDIZIONI\n\n" +
      "1. Accettazione: Utilizzando TITAN, accetti i nostri termini.\n" +
      "2. Responsabilità: Le schede fornite sono a scopo informativo. TITAN non è responsabile per infortuni.\n" +
      "3. Proprietà: Tutti i contenuti (PDF, Grafica) sono di proprietà esclusiva di TITAN.\n" +
      "4. Abbonamenti: I piani acquistati nello Shop non sono rimborsabili."
  );
});
