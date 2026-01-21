# Progetto-Finale-Full-Stack-di-Andrea-Altomare
# 🏋️ TITAN - Fitness & Training Platform

![TITAN Logo](public/images/favico.ico)
---

# 🔱 TITAN FITNESS - Full Stack Web App

**TITAN** è una piattaforma web completa per la gestione di piani di allenamento e servizi di coaching. Il progetto dimostra l'integrazione tra un backend solido in **Spring Boot** e un frontend dinamico, con gestione di database e upload di file.

## 🚀 Tecnologie Utilizzate

* **Frontend:** JavaScript (ES6+), React 18, CSS3, Fetch API.
* **Backend:** Java 17, Spring Boot 3.2.3, Spring Security, Maven.
* **Database:** MySQL (Produzione) / H2 (Sviluppo).

---

## 🛠️ Configurazione e Avvio
---

### 🗄️ Configurazione Database (Obbligatorio)

Prima di avviare il backend, è necessario creare lo schema del database in **MySQL**. Segui questi passaggi:

1. Apri il tuo terminale MySQL o **phpMyAdmin**.
2. Esegui il comando per creare il database:
```sql
CREATE DATABASE titan_db;

```
3. (Facoltativo) Se vuoi usare lo script già pronto, importa il file `database.sql` che trovi nella root del progetto:
```bash
mysql -u root -p titan_db < database.sql

```
**Nota:** Le credenziali di accesso (username e password) devono corrispondere a quelle scritte nel file `src/main/resources/application.properties` del backend.
### 1. Backend (Java Spring Boot)

Entra nella cartella del backend ed esegui la build:

```bash
cd progetto-titan-webapp-back
mvn clean install
mvn spring-boot:run

```

*Il server si avvierà su: `http://localhost:8080*`

### 2. Frontend (React)

In un altro terminale, entra nella cartella frontend:

```bash
cd progetto-titan-webapp-front
npm install
npm start

```

*L'app sarà disponibile su: `http://localhost:3000*`

---

## 📦 Funzionalità Principali

* 🛒 **Shop Interattivo:** Gestione carrello e acquisto pacchetti (BASE, MEDIUM, PRO).
* 👤 **Area Profilo:** Visualizzazione dei dati utente e download delle schede acquistate.
* 📄 **Scheda Gratuita:** Sistema di acquisizione utenti tramite download immediato di PDF.
* 💼 **Lavora con noi:** Form di recruiting con **upload di CV in formato PDF**.
* 🔐 **Sicurezza:** Sistema di Login/Register con password criptate.

---

## 📁 Struttura del Progetto

* `/progetto-titan-webapp-back`: Codice sorgente Java (Controller, Service, Repository, Model).
* `/frontend`: Interfaccia utente, logica del carrello e assets.
* `database.sql`: Script per la creazione delle tabelle.

---

## 🎯 Obiettivi Professionali e Ringraziamenti

Questo progetto rappresenta il culmine del mio percorso formativo. Il mio obiettivo è consolidare queste competenze all'interno di una grande realtà informatica per contribuire a progetti innovativi su larga scala.

**Ringraziamenti:**
Voglio ringraziare di cuore la mia famiglia per avermi sostenuto in ogni momento di questo percorso. Senza il loro supporto, nulla di tutto questo sarebbe stato possibile.

> **"Solo tu puoi scrivere l'inizio della tua storia."**

---

### 📧 Contatti

* **Sviluppatore:** [Andrea Altomare]
* **Email:** altomarea59@gmail.com
* **Instagram:** @titan_fitness

---

### 💡 Nota per il correttore

Per una prova rapida, l'applicazione è configurata per usare **H2 Database** in memoria. Se si desidera utilizzare **MySQL**, modificare le credenziali nel file `application.properties`. La cartella `target` è stata esclusa per mantenere il repository pulito come da best practices Git.

---
