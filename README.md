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
