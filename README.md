# Progetto-Finale-Full-Stack-di-Andrea-Altomare
# 🏋️ TITAN - Fitness & Training Platform

![TITAN Logo](public/images/favico.ico)

**TITAN** è una piattaforma web completa per la gestione di piani di allenamento, schede personalizzate e servizi di coaching professionale. Progettata per powerlifter, atleti e appassionati di fitness.

---

## 🚀 Tecnologie Utilizzate

### **Frontend**
- React 18
- JavaScript ES6+
- CSS3 (Inline Styling)
- Fetch API

### **Backend**
- Java 17
- Spring Boot 3.2.3
- Spring Security
- Spring Data JPA
- MySQL / H2 Database
- Maven

---

## 📋 Prerequisiti

Prima di iniziare, assicurati di avere installato:

- **Node.js** (v16 o superiore) - [Download](https://nodejs.org/)
- **Java JDK 17** - [Download](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- **Maven** (v3.6 o superiore) - [Download](https://maven.apache.org/download.cgi)
- **MySQL 8.0** (opzionale, può usare H2 in-memory) - [Download](https://dev.mysql.com/downloads/)
- **Git** - [Download](https://git-scm.com/)

---

## 🗄️ Configurazione Database

### **Opzione 1: MySQL (Produzione)**

#### 1. Installa e avvia MySQL
```bash
# Su macOS con Homebrew
brew install mysql
brew services start mysql

# Su Ubuntu/Debian
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql

# Su Windows
# Scarica e installa da: https://dev.mysql.com/downloads/installer/
```

#### 2. Accedi a MySQL
```bash
mysql -u root -p
```

#### 3. Crea il database
```sql
CREATE DATABASE titan_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER 'titan_user'@'localhost' IDENTIFIED BY 'titan_password';

GRANT ALL PRIVILEGES ON titan_db.* TO 'titan_user'@'localhost';

FLUSH PRIVILEGES;

EXIT;
```

#### 4. Configura `application.properties`

Apri `backend/src/main/resources/application.properties` e modifica:
```properties
server.port=8080

# MySQL Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/titan_db?useSSL=false&serverTimezone=UTC
spring.datasource.username=titan_user
spring.datasource.password=titan_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.jpa.properties.hibernate.format_sql=true
```

---

### **Opzione 2: H2 Database (Sviluppo - Database in memoria)**

#### Configura `application.properties`
```properties
server.port=8080

# H2 Database Configuration
spring.datasource.url=jdbc:h2:mem:titandb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# JPA/Hibernate
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# H2 Console (http://localhost:8080/h2-console)
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
```

**Nota:** Con H2, i dati vengono persi ad ogni riavvio. Perfetto per sviluppo/test.

---

## 📦 Installazione

### 1. Clona il repository
```bash
git clone https://github.com/tuo-username/titan-fitness.git
cd titan-fitness
```

### 2. Installa dipendenze Frontend
```bash
cd titan-fitness
npm install
```

### 3. Installa dipendenze Backend
```bash
cd progetto-titan-webapp-back
mvn clean install
```

---

## 🚀 Avvio dell'Applicazione

### **PASSO 1: Avvia il Backend (Spring Boot)**
```bash
cd backend
mvn spring-boot:run
```

**Output atteso:**
```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.2.3)

...
Tomcat started on port(s): 8080 (http)
Started TitanApplication in X.XXX seconds
```

**Verifica backend attivo:**
```bash
curl http://localhost:8080/api/auth/users
# Output: []
```

---

### **PASSO 2: Avvia il Frontend (React)**

**In un nuovo terminale:**
```bash
cd frontend
npm start
```

**Output atteso:**
```
Compiled successfully!

You can now view titan-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.x:3000
```

---

### **PASSO 3: Accedi all'applicazione**

Apri il browser su:
```
http://localhost:3000
```

---

## 🔑 Funzionalità Principali

### **Utenti**
- ✅ Registrazione con email e password (criptata con BCrypt)
- ✅ Login con autenticazione
- ✅ Gestione profilo utente
- ✅ Sistema di piani (BASE, MEDIUM, PRO)

### **Schede di Allenamento**
- ✅ Download schede gratuite personalizzate (Uomo/Donna)
- ✅ Tipologie: Full Body, Cardio, Power
- ✅ PDF scaricabili

### **Shop**
- ✅ Piani di abbonamento (BASE €29, MEDIUM €60, PRO €99)
- ✅ Carrello acquisti
- ✅ Sistema di checkout

### **Lavora con Noi**
- ✅ Upload CV in formato PDF
- ✅ Form candidatura con titolo e descrizione
- ✅ Storage file nel database

### **Admin Panel**
- ✅ Visualizzazione utenti registrati
- ✅ Gestione candidature
- ✅ Download CV ricevuti

Accesso Admin: `http://localhost:3000/admin.html`

---

## 📁 Struttura del Progetto
```
titan-fitness/
├── frontend/                    # Applicazione React
│   ├── public/
│   │   ├── images/              # Immagini e assets
│   │   ├── schede-personalizzate/  # PDF schede allenamento
│   │   ├── admin.html           # Pannello amministratore
│   │   ├── admin.js             # Logica admin
│   │   └── api.js               # API service per admin
│   ├── src/
│   │   ├── App.js               # Componente principale React
│   │   └── index.js             # Entry point React
│   └── package.json
│
├── backend/                     # Applicazione Spring Boot
│   ├── src/
│   │   └── main/
│   │       ├── java/com/titan/
│   │       │   ├── controller/
│   │       │   │   ├── AuthController.java
│   │       │   │   └── CvController.java
│   │       │   ├── service/
│   │       │   │   ├── AuthService.java
│   │       │   │   └── CvService.java
│   │       │   ├── repository/
│   │       │   │   ├── UserRepository.java
│   │       │   │   └── CvRepository.java
│   │       │   ├── model/
│   │       │   │   ├── User.java
│   │       │   │   └── Cv.java
│   │       │   ├── config/
│   │       │   │   └── SecurityConfig.java
│   │       │   └── TitanApplication.java
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
└── README.md
```

---

## 🛠️ API Endpoints

### **Autenticazione**

| Metodo | Endpoint | Descrizione |
|--------|----------|-------------|
| POST | `/api/auth/register` | Registrazione nuovo utente |
| POST | `/api/auth/login` | Login utente |
| GET | `/api/auth/users` | Lista tutti gli utenti |

### **CV / Candidature**

| Metodo | Endpoint | Descrizione |
|--------|----------|-------------|
| POST | `/api/cv/upload` | Upload CV (multipart/form-data) |
| GET | `/api/cv/all` | Lista tutti i CV |
| GET | `/api/cv/download/{id}` | Download CV per ID |

---

## 🧪 Test delle API

### Registrazione utente
```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Mario",
    "cognome": "Rossi",
    "email": "mario@test.com",
    "password": "password123"
  }'
```

### Login utente
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "mario@test.com",
    "password": "password123"
  }'
```

---

## 🐛 Troubleshooting

### **Errore: Port 8080 already in use**
```bash
# Trova il processo sulla porta 8080
lsof -i :8080

# Termina il processo
kill -9 <PID>
```

### **Errore: Port 3000 already in use**
```bash
# Trova il processo sulla porta 3000
lsof -i :3000

# Termina il processo
kill -9 <PID>
```

### **Errore CORS**

Verifica che `SecurityConfig.java` contenga:
```java
config.setAllowedOrigins(List.of("http://localhost:3000"));
```

### **MySQL Connection Error**

Verifica che MySQL sia attivo:
```bash
# macOS
brew services list

# Ubuntu/Debian
sudo systemctl status mysql

# Windows
# Verifica in Services > MySQL
```

---

## 📦 Build per Produzione

### Frontend
```bash
cd titan-fitness
npm run build
```

I file ottimizzati saranno in `frontend/build/`

### Backend
```bash
cd progetto-titan-webapp-back
mvn clean package
```

Il JAR eseguibile sarà in `backend/target/progetto-titan-webapp-back-1.0.0.jar`

### Avvia in produzione
```bash
java -jar backend/target/progetto-titan-webapp-back-1.0.0.jar
```

---

## 🚀 Deploy

### **Opzioni di Deploy**

- **Frontend**: Vercel, Netlify, GitHub Pages
- **Backend**: Heroku, Railway, AWS EC2, DigitalOcean
- **Database**: AWS RDS, DigitalOcean Managed Database

---

## 👥 Contribuire

1. Fai un fork del progetto
2. Crea un branch (`git checkout -b feature/nuova-funzionalita`)
3. Commit delle modifiche (`git commit -m 'Aggiunta nuova funzionalità'`)
4. Push al branch (`git push origin feature/nuova-funzionalita`)
5. Apri una Pull Request

---

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi il file `LICENSE` per dettagli.

---

## 📧 Contatti

**TITAN Fitness**
- 📧 Email: altomarea59@gmail.com
- 📞 Telefono: +39 342 501 5092
- 📍 Sede: Santo Stefano di Rogliano (CS)
- 📱 Instagram: @titan_fitness

---

## 🙏 Ringraziamenti

Grazie a tutti gli atleti che hanno creduto in TITAN! 💪

**"NO PAIN, NO GAIN. ENTRA COME ATLETA, ESCI COME LEGGENDA."**
```

---
