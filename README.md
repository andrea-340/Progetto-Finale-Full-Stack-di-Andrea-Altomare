# Progetto-Finale-Full-Stack-di-Andrea-Altomare
# TITAN - Performance & Fitness WebApp 🏋️‍♂️

Benvenuti nel repository di **TITAN**, il progetto finale per il percorso Full Stack. Questa WebApp è stata concepita per offrire agli atleti uno strumento completo per la gestione del proprio allenamento, integrando un sistema di e-commerce per programmi professionali e una sezione dedicata alla candidatura di nuovi coach.

## 🎯 Visione e Obiettivi
TITAN nasce per supportare gli atleti nel passaggio dall'allenamento amatoriale al professionismo. 
Le caratteristiche principali includono:
- **Navigazione Dinamica:** Esperienza Single Page Application (SPA) fluida.
- **Profilazione Utente:** Registrazione e Login con persistenza dei dati.
- **Shop Professionale:** Selezione di piani di coaching (Base, Medium, Pro).
- **Download Center:** Accesso immediato a schede di allenamento PDF personalizzate per genere e obiettivo.
- **Candidature Coach:** Modulo per l'invio di CV (formato PDF) salvati direttamente sul backend.

## 🛠️ Stack Tecnologico
Il progetto segue un'architettura **Full Stack** modulare:

- **Frontend:** HTML5, CSS3 (Custom Design in Dark Mode), JavaScript Vanilla.
- **Backend:** Java con Spring Boot (o specifica il tuo framework), architettura REST.
- **Database:** MySQL per la persistenza di utenti e candidature.
- **Gestione API:** Sistema centralizzato di chiamate asincrone tramite `fetch`.

## 📁 Struttura del Progetto
Il repository è organizzato per separare chiaramente le responsabilità:

```text
TITAN-PROJECT/
├── backend/                  # Codice sorgente del server
│   └── src/main/resources/static/
│       ├── index.html        # Entry point dell'applicazione
│       ├── src/
│       │   ├── js/           # api.js (API Centralizzate), main.js, script.js
│       │   └── css/          # style.css (Design custom)
│       ├── images/           # Asset grafici e carosello
│       └── schede-personalizzate/ # PDF scaricabili
├── database.sql              # Script di inizializzazione MySQL
└── README.md                 # Documentazione del progetto


# 🏋️‍♂️ TITAN | Training & Shop - Web App
---

## 🛠️ 1. Requisiti di Sistema e guida 

Assicurati di avere i seguenti componenti installati sul tuo computer:

* **Java 17 JDK**: Necessario per compilare ed eseguire l'app (Verifica con `javac -version`).
* **Maven**: Per la gestione delle dipendenze del backend.
* **MySQL**: Per la persistenza dei dati.

> **Nota per macOS:** Se visualizzi l'errore "No compiler is provided", imposta il percorso di Java aggiungendo `export JAVA_HOME=$(/usr/libexec/java_home -v 17)` nel tuo file `~.zshrc` e digita `source ~/.zshrc`.

---

## 🗄️ 2. Configurazione del Database

### A. Installazione di MySQL (se mancante)
Se non hai MySQL installato, puoi farlo rapidamente tramite terminale

```

Configura il database direttamente tramite la shell di MySQL:

```bash
# 1. Accedi a MySQL (inserisci la password se richiesta)
mysql -u root -p

# 2. All'interno della shell MySQL, esegui i seguenti comandi:
CREATE DATABASE titandb;
USE titandb;

# 3. Importa lo schema SQL (inserisci il percorso reale del tuo file)
SOURCE /percorso/assoluto/al/file/database.sql;

# 4. Esci dalla shell
EXIT;

```

---

## 🚀 3. Esecuzione del Backend (Spring Boot)

Naviga nella directory del server ed esegui il comando Maven per avviare l'applicazione:

```bash
cd progetto-titan-webapp-back
mvn clean spring-boot:run

```

Una volta visualizzato il messaggio di log `Started ... Application in X seconds`, il server backend sarà attivo all'indirizzo `http://localhost:8080`.

---

## 🌐 4. Esecuzione del Frontend

Per avviare l'interfaccia utente:

1. Apri la cartella `progetto-titan-webapp-front` con **Visual Studio Code**.
2. Avvia l'estensione **Live Server** (solitamente cliccando su "Go Live" in basso a destra).
3. L'app sarà disponibile all'indirizzo `http://127.0.0.1:5500`.

---

## ✅ 5. Verifica Funzionamento

* **Test API:** Visita `http://localhost:8080/api/auth/login`. Se ricevi una risposta (anche un errore 405), il server è correttamente in ascolto.
* **Log Console:** Controlla la console del browser (F12) per verificare che non ci siano errori di caricamento per i file `style.css`, `api.js` e `main.js`.

---

