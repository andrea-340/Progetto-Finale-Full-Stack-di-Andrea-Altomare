import React, { useState, useEffect } from "react";

// ============================================
// API SERVICE
// ============================================
const API_BASE_URL = "http://localhost:8080/api";

const apiService = {
  register: async (data) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response;
  },
  login: async (data) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response;
  },
  uploadCV: async (formData) => {
    const response = await fetch(`${API_BASE_URL}/cv/upload`, {
      method: "POST",
      body: formData,
    });
    return response;
  },
};

// ============================================
// STYLES
// ============================================
const titleStyle = {
  fontSize: "clamp(20px, 10vw, 50px)",
  textAlign: "center",
  margin: "30px 0",
  background: "linear-gradient(to bottom, #fff, #444)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  filter: "drop-shadow(4px 4px 0px #610303)",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "5px",
  border: "none",
  boxSizing: "border-box",
};

const submitButtonStyle = {
  width: "100%",
  padding: "15px",
  background: "#ff4d4d",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontWeight: "bold",
  cursor: "pointer",
  textTransform: "uppercase",
};

const buttonStyle = {
  background: "transparent",
  border: "1px solid #444",
  color: "#ccc",
  padding: "5px",
  fontSize: "0.75rem",
  cursor: "pointer",
  borderRadius: "5px",
};

const footerButtonStyle = {
  background: "#000",
  color: "white",
  padding: "12px 25px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};

// ============================================
// HEADER COMPONENT
// ============================================
const Header = ({ userName, cartCount, onLogout, onCartClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 5%",
        background: "rgba(0, 0, 0, 0.9)",
        borderBottom: "3px solid #ff4d4d",
        position: "sticky",
        top: 0,
        zIndex: 2000,
      }}
    >
      <div className="logo-area">
        <h1
          style={{
            color: "white",
            margin: 0,
            fontSize: "1.5rem",
            fontWeight: 900,
            cursor: "pointer",
          }}
          onClick={() => window.location.reload()}
        >
          TITAN
        </h1>
      </div>

      {userName && (
        <>
          <div
            className="hamburger"
            style={{
              display: "none",
              fontSize: "2rem",
              cursor: "pointer",
              color: "white",
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            &#9776;
          </div>

          <nav
            className={`navbar ${mobileMenuOpen ? "active" : ""}`}
            style={{
              display: "flex",
              gap: "30px",
            }}
          >
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "20px",
                margin: 0,
                padding: 0,
              }}
            >
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    window.setPage("welcome");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    window.setPage("about");
                  }}
                >
                  Chi Siamo
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  onClick={(e) => {
                    e.preventDefault();
                    window.setPage("shop");
                  }}
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  onClick={(e) => {
                    e.preventDefault();
                    window.setPage("careers");
                  }}
                >
                  Lavora con Noi
                </a>
              </li>
              <li>
                <a
                  href="#profile"
                  onClick={(e) => {
                    e.preventDefault();
                    window.setPage("profile");
                  }}
                >
                  Profilo
                </a>
              </li>
            </ul>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                position: "relative",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              onClick={onCartClick}
            >
              🛒
              <span
                style={{
                  background: "#ff4d4d",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 7px",
                  fontSize: "12px",
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                }}
              >
                {cartCount}
              </span>
            </div>
            <button
              onClick={onLogout}
              style={{
                background: "transparent",
                color: "#ff4d4d",
                border: "1px solid #ff4d4d",
                padding: "8px 16px",
                borderRadius: "4px",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                letterSpacing: "1px",
              }}
            >
              Logout
            </button>
          </div>
        </>
      )}
    </header>
  );
};

// ============================================
// CAROUSEL COMPONENT
// ============================================
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/images/images-1.jpg",
    "/images/images-2.jpg",
    "/images/images-3.jpg",
    "/images/images-4.png",
    "/images/cris.png",
    "/images/imgts.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const moveSlide = (step) => {
    setCurrentSlide((prev) => (prev + step + images.length) % images.length);
  };

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "800px",
        margin: "40px auto",
        overflow: "hidden",
        borderRadius: "15px",
      }}
    >
      <div>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              display: idx === currentSlide ? "block" : "none",
              filter: "brightness(0.7) contrast(1.2)",
              transition: "transform 0.5s ease-in-out",
            }}
          />
        ))}
      </div>
      <button
        onClick={() => moveSlide(-1)}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(255, 77, 77, 0.8)",
          color: "white",
          border: "none",
          padding: "15px",
          cursor: "pointer",
          borderRadius: "50%",
          zIndex: 10,
        }}
      >
        &#10094;
      </button>
      <button
        onClick={() => moveSlide(1)}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(255, 77, 77, 0.8)",
          color: "white",
          border: "none",
          padding: "15px",
          cursor: "pointer",
          borderRadius: "50%",
          zIndex: 10,
        }}
      >
        &#10095;
      </button>
    </div>
  );
};

// ============================================
// CHATBOT COMPONENT
// ============================================
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Benvenuto Atleta! Come posso aiutarti oggi?" },
  ]);

  const handleResponse = (tipo) => {
    const risposte = {
      piani:
        "Puoi scegliere tra BASE, MEDIUM e PRO nello Shop. Ogni piano offre diversi livelli di supporto e servizi personalizzati. Dopo aver selezionato il piano, potrai procedere al pagamento e iniziare subito il tuo percorso con noi!",
      contatti:
        "Scrivici a altomarea59@gmail.com o al numero +39 342 501 5092. Siamo sempre pronti ad aiutarti!",
      schede:
        "Le scarichi dalla sezione 'Inizia Ora' dopo il profilo. E poi scegli il genere e il tipo di allenamento che preferisci!",
      tecnica:
        "Nel piano PRO analizziamo i video delle tue esecuzioni per correggere la tecnica e massimizzare i risultati! E per ogni dubbio siamo sempre disponibili. Grazie mille per aver scelto TITAN!",
    };

    setMessages((prev) => [
      ...prev,
      { type: "user", text: `Richiesta: ${tipo}` },
      { type: "bot", text: risposte[tipo] },
    ]);
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#ff4d4d",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(255, 77, 77, 0.4)",
          zIndex: 3000,
        }}
      >
        🤖
      </div>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "300px",
            background: "#111",
            border: "1px solid #333",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 3000,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              background: "#ff4d4d",
              padding: "15px",
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              color: "white",
            }}
          >
            TITAN ASSISTANT
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              height: "250px",
              padding: "15px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "0.9rem",
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  background: msg.type === "bot" ? "#222" : "#444",
                  padding: "10px",
                  borderRadius: "10px",
                  borderLeft: msg.type === "bot" ? "3px solid #ff4d4d" : "none",
                  alignSelf: msg.type === "user" ? "flex-end" : "flex-start",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div
            style={{
              padding: "10px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5px",
              background: "#000",
            }}
          >
            <button onClick={() => handleResponse("piani")} style={buttonStyle}>
              Come funzionano i piani
            </button>
            <button
              onClick={() => handleResponse("contatti")}
              style={buttonStyle}
            >
              Contatti
            </button>
            <button
              onClick={() => handleResponse("schede")}
              style={buttonStyle}
            >
              Schede personalizzate
            </button>
            <button
              onClick={() => handleResponse("tecnica")}
              style={buttonStyle}
            >
              La tecnica
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// ============================================
// FOOTER COMPONENT
// ============================================
const Footer = () => {
  const handleCentroAiuto = () => {
    alert(`📞 CENTRO AIUTO - TITAN

Hai bisogno di assistenza? Il nostro team è a tua disposizione per qualsiasi domanda su registrazione, piani o download delle schede.

Contatti disponibili:
📧 Email: altomarea59@gmail.com
☎️ Telefono / WhatsApp: +39 342 501 5092

Rispondiamo il prima possibile per aiutarti a ottenere il massimo dai nostri servizi.`);
  };

  const handleFAQ = () => {
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

  const handleTermini = () => {
    alert(`⚖️ Termini e Condizioni di Utilizzo del Servizio TITAN

Benvenuto su TITAN. Utilizzando questo sito web o le relative applicazioni, accetti di essere vincolato ai seguenti termini e condizioni.

1. Accettazione dei Termini
Accedendo e utilizzando i servizi offerti da TITAN, dichiari di aver letto, compreso e di accettare integralmente questi Termini e Condizioni.

2. Servizi Offerti
TITAN fornisce contenuti relativi a piani di allenamento, schede personalizzate e guide di fitness. I servizi sono destinati esclusivamente ad uso personale.

3. Registrazione e Account
Alcune funzionalità richiedono la registrazione. Sei responsabile della protezione delle tue credenziali e di qualsiasi azione eseguita tramite il tuo account.

4. Proprietà Intellettuale
Tutti i contenuti, marchi, immagini, testi e materiali pubblicati su questo sito appartengono a TITAN o ai suoi licenziatari e sono protetti da diritti d'autore e di proprietà intellettuale.

5. Responsabilità
L'uso dei contenuti è a tuo rischio. TITAN non è responsabile per eventuali danni derivanti dall'uso dei piani, programmi o strumenti disponibili tramite il sito.

6. Legge Applicabile
Questi Termini sono regolati dalla legge italiana. Qualsiasi controversia relativa all'uso dei servizi sarà di competenza esclusiva dei tribunali italiani.

7. Modifiche ai Termini
TITAN si riserva il diritto di aggiornare o modificare i presenti Termini in qualsiasi momento. La versione aggiornata sarà pubblicata su questa pagina.`);
  };

  return (
    <footer
      style={{
        background: "rgba(0, 0, 0, 0.95)",
        borderTop: "3px solid #ff4d4d",
        padding: "50px 5%",
        marginTop: "50px",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <button onClick={handleCentroAiuto} style={footerButtonStyle}>
          Centro Aiuto
        </button>
        <button onClick={handleFAQ} style={footerButtonStyle}>
          FAQ
        </button>
        <button onClick={handleTermini} style={footerButtonStyle}>
          Termini e Condizioni
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h4 style={{ color: "#ff4d4d" }}>CONTATTI</h4>
          <p>📧 altomarea59@gmail.com</p>
          <p>📞 +39 342 501 5092</p>
          <p>📍 Santo Stefano di Rogliano (CS)</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h4 style={{ color: "#ff4d4d" }}>SOCIAL</h4>
          <p>IG: @titan_fitness</p>
        </div>
      </div>
    </footer>
  );
};

// ============================================
// REGISTRATION PAGE
// ============================================
const RegistrationPage = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiService.register(formData);
      if (res.ok) {
        const user = await res.json();
        localStorage.setItem("utenteNome", user.nome);
        localStorage.setItem("utenteLoggato", "true");
        alert("Registrazione completata, benvenuto Atleta!");
        onSuccess(user.nome);
      } else {
        alert("Errore registrazione");
      }
    } catch (err) {
      alert("Email già in uso, utilizza un'altra email");
    }
  };

  return (
    <div>
      <h1 className="h1" style={titleStyle}>
        TITAN
      </h1>
      <section
        style={{
          maxWidth: "450px",
          margin: "20px auto",
          background: "rgba(0, 0, 0, 0.8)",
          padding: "30px",
          borderRadius: "15px",
          border: "1px solid #333",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Nome"
              required
              value={formData.nome}
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Cognome"
              required
              value={formData.cognome}
              onChange={(e) =>
                setFormData({ ...formData, cognome: e.target.value })
              }
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              style={inputStyle}
            />
          </div>
          <button type="submit" style={submitButtonStyle}>
            REGISTRATI ORA
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "20px", color: "white" }}>
          Hai già un account?{" "}
          <a
            href="#login"
            onClick={(e) => {
              e.preventDefault();
              window.setPage("login");
            }}
            style={{
              color: "#00ff00",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Accedi ora
          </a>
        </p>
      </section>
    </div>
  );
};

// ============================================
// LOGIN PAGE
// ============================================
const LoginPage = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiService.login({ email, password });
      if (res.ok) {
        const user = await res.json();
        localStorage.setItem("utenteNome", user.nome);
        localStorage.setItem("utenteLoggato", "true");
        alert("Bentornato su TITAN!");
        onSuccess(user.nome);
      } else {
        alert("Credenziali errate");
      }
    } catch (err) {
      alert("Errore di connessione al server");
    }
  };

  return (
    <div>
      <h1 className="h1" style={titleStyle}>
        TITAN LOGIN
      </h1>
      <section
        style={{
          maxWidth: "450px",
          margin: "20px auto",
          background: "rgba(0, 0, 0, 0.8)",
          padding: "30px",
          borderRadius: "15px",
          border: "1px solid #333",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
          </div>
          <button type="submit" style={submitButtonStyle}>
            ENTRA
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "20px", color: "white" }}>
          Nuovo atleta?{" "}
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              window.setPage("register");
            }}
            style={{
              color: "#00ff00",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Crea account
          </a>
        </p>
      </section>
    </div>
  );
};

// ============================================
// WELCOME PAGE
// ============================================
const WelcomePage = () => (
  <section
    style={{
      padding: "20px",
      maxWidth: "800px",
      margin: "0 auto",
      color: "white",
    }}
  >
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      <h2
        style={{
          fontSize: "2.5rem",
          color: "#ff4d4d",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        Benvenuto in TITAN 💪
      </h2>
      <p style={{ fontSize: "1.2rem", color: "#ccc" }}>
        Il tuo viaggio verso la vetta inizia oggi. Non è solo allenamento, è
        disciplina.
      </p>
    </div>

    <div style={{ display: "grid", gap: "20px" }}>
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "25px",
          borderRadius: "15px",
          borderLeft: "4px solid #ffffff",
        }}
      >
        <h3 style={{ marginTop: 0 }}>1. Inizia con la tua Scheda OMAGGIO 🎁</h3>
        <p style={{ lineHeight: 1.6 }}>
          Vogliamo che tu metta alla prova la nostra qualità. Cliccando su{" "}
          <strong>"Inizia Ora"</strong>, potrai configurare il tuo profilo e
          scaricare una scheda di allenamento base personalizzata per il tuo
          genere, <strong>completamente gratuita</strong>.
        </p>
        <ul style={{ margin: "10px 0", paddingLeft: "20px", color: "#bbb" }}>
          <li>Perfetta per approcciarsi al mondo del fitness.</li>
          <li>Focus sui movimenti fondamentali.</li>
        </ul>
      </div>

      <div
        style={{
          background: "rgba(255,77,77,0.1)",
          padding: "25px",
          borderRadius: "15px",
          borderLeft: "4px solid #ff4d4d",
        }}
      >
        <h3 style={{ marginTop: 0, color: "#ff4d4d" }}>
          2. Evolvi con il Supporto Pro 🏆
        </h3>
        <p style={{ lineHeight: 1.6 }}>
          Se il tuo obiettivo è la massima performance o la preparazione a una
          gara, il nostro team di professionisti è pronto a seguirti passo dopo
          passo. Accedendo alla sezione <strong>Shop</strong>, troverai i nostri
          abbonamenti.
        </p>
        <ul style={{ margin: "10px 0", paddingLeft: "20px", color: "#bbb" }}>
          <li>Piani alimentari studiati da professionisti.</li>
          <li>
            Check video per correggere la tua tecnica (essenziale per
            Powerlifter).
          </li>
          <li>Contatto diretto h24 con il tuo Coach.</li>
        </ul>
      </div>

      <div
        style={{
          textAlign: "center",
          margin: "30px 0",
          padding: "20px",
          borderTop: "1px solid #333",
        }}
      >
        <p
          style={{ fontStyle: "italic", fontSize: "1.1rem", color: "#ff4d4d" }}
        >
          "TITAN: NO PAIN, NO GAIN. ENTRA COME ATLETA, ESCI COME LEGGENDA. SE
          INIZI CON NOI, IL FALLIMENTO NON È UN'OPZIONE: NON CI SI FERMA FINCHÉ
          IL PESO NON SALE. MAI MOLLARE, MAI CEDERE."
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => window.setPage("profile-setup")}
          style={{
            ...submitButtonStyle,
            width: "100%",
            maxWidth: "400px",
            cursor: "pointer",
          }}
        >
          Inizia Ora (Scheda Gratuita)
        </button>
        <button
          onClick={() => window.setPage("shop")}
          style={{
            background: "transparent",
            border: "1px solid #ccc",
            color: "white",
            padding: "10px",
            marginTop: "10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Esplora i Piani Professionali
        </button>
      </div>
    </div>
  </section>
);

// ============================================
// ABOUT PAGE
// ============================================
const AboutPage = () => (
  <section
    style={{
      padding: "40px 20px",
      maxWidth: "900px",
      margin: "0 auto",
      color: "white",
    }}
  >
    <h1 className="h1" style={titleStyle}>
      BEYOND THE LIMITS
    </h1>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        alignItems: "center",
        marginBottom: "50px",
        background: "rgba(255,255,255,0.05)",
        padding: "30px",
        borderRadius: "20px",
        borderLeft: "5px solid #ff4d4d",
      }}
    >
      <div style={{ flex: 1, minWidth: "300px" }}>
        <h2
          style={{
            color: "#ff4d4d",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Il Fondatore: La mia Visione
        </h2>
        <p style={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
          Sono un <strong>Powerlifter di 21 anni</strong>. Ho passato ore sotto
          il bilanciere, sentendo il peso della ghisa e il battito del cuore
          accelerare prima di ogni massimale. Non ho ancora avuto l'occasione di
          salire su quel palco di gara che tanto sogno, ma è proprio da questa
          attesa che è nata la scintilla di <strong>TITAN</strong>.
        </p>
        <p style={{ lineHeight: 1.8, fontSize: "1.1rem", marginTop: "15px" }}>
          Ho creato questa WebApp perché credo che la forza non sia solo nei
          muscoli, ma nella capacità di <strong>realizzarsi</strong>. Voglio
          dare a tutti gli strumenti per trasformare il proprio potenziale in
          realtà, offrendo un supporto che io stesso avrei voluto trovare lungo
          il mio percorso.
        </p>
      </div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          padding: "20px",
          border: "1px solid #333",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "#ff4d4d" }}>Nutrizione Tecnica</h3>
        <p>Esperti nel settore alimentare per diete personalizzate.</p>
      </div>
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          padding: "20px",
          border: "1px solid #333",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "#ff4d4d" }}>Performance Coaching</h3>
        <p>Professionisti dello sport focalizzati su forza e ipertrofia.</p>
      </div>
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          padding: "20px",
          border: "1px solid #333",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "#ff4d4d" }}>Supporto Gare</h3>
        <p>Un team dedicato per chi vuole affacciarsi al professionismo.</p>
      </div>
    </div>

    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={() => window.setPage("profile-setup")}
        style={{ ...submitButtonStyle, width: "auto", padding: "15px 40px" }}
      >
        Unisciti alla nostra visione
      </button>
    </div>
  </section>
);

// ============================================
// PROFILE SETUP PAGE
// ============================================
const ProfileSetupPage = () => {
  const [gender, setGender] = useState("Uomo");

  const handleContinue = () => {
    localStorage.setItem("genereSelezionato", gender);
    window.setPage("workout-selection");
  };

  return (
    <div>
      <h1 className="h1" style={titleStyle}>
        TITAN PROFILE
      </h1>
      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          background: "rgba(0, 0, 0, 0.8)",
          padding: "30px",
          borderRadius: "15px",
        }}
      >
        <label
          style={{ color: "white", display: "block", marginBottom: "10px" }}
        >
          Genere
        </label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            marginBottom: "15px",
          }}
        >
          <option value="Uomo">Uomo</option>
          <option value="Donna">Donna</option>
        </select>

        <input
          type="number"
          placeholder="Altezza (cm)"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "none",
          }}
        />
        <input
          type="number"
          placeholder="Peso (kg)"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "none",
          }}
        />

        <button onClick={handleContinue} style={submitButtonStyle}>
          Continua
        </button>
      </div>
    </div>
  );
};

// ============================================
// WORKOUT SELECTION PAGE
// ============================================
const WorkoutSelectionPage = () => {
  const downloadWorkout = (type) => {
    const gender = localStorage.getItem("genereSelezionato") || "Uomo";
    const workouts = {
      Uomo: {
        fullbody: "/schede-personalizzate/full-body-uomo.pdf",
        cardio: "/schede-personalizzate/cardio-uomo.pdf",
        power: "/schede-personalizzate/power-uomo.pdf",
      },
      Donna: {
        fullbody: "/schede-personalizzate/fullbody-donna.pdf",
        cardio: "/schede-personalizzate/cardio-donna.pdf",
        power: "/schede-personalizzate/power-donna.pdf",
      },
    };

    const fileName = workouts[gender]?.[type];
    if (!fileName) {
      alert("Scheda non trovata!");
      return;
    }

    const a = document.createElement("a");
    a.href = fileName;
    a.download = fileName.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      <h1 className="h1" style={titleStyle}>
        SCEGLI LA SCHEDA
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <button
          onClick={() => downloadWorkout("fullbody")}
          style={{ ...submitButtonStyle, width: "250px" }}
        >
          🏋️‍♂️ Full Body
        </button>
        <button
          onClick={() => downloadWorkout("cardio")}
          style={{ ...submitButtonStyle, width: "250px" }}
        >
          🏃‍♂️ Cardio
        </button>
        <button
          onClick={() => downloadWorkout("power")}
          style={{ ...submitButtonStyle, width: "250px" }}
        >
          🔥 Power
        </button>
      </div>
    </div>
  );
};

// ============================================
// SHOP PAGE
// ============================================
const ShopPage = ({ onAddToCart }) => (
  <div>
    <h1 className="h1" style={titleStyle}>
      TITAN SHOP
    </h1>
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          border: "1px solid #333",
          padding: "20px",
          textAlign: "center",
          background: "rgba(0,0,0,0.8)",
          borderRadius: "10px",
        }}
      >
        <h3>BASE</h3>
        <p style={{ fontSize: "2rem", color: "#ff4d4d" }}>29€</p>
        <button
          onClick={() => onAddToCart("BASE", 29)}
          style={submitButtonStyle}
        >
          Aggiungi
        </button>
      </div>
      <div
        style={{
          border: "1px solid #333",
          padding: "20px",
          textAlign: "center",
          background: "rgba(0,0,0,0.8)",
          borderRadius: "10px",
        }}
      >
        <h3>MEDIUM</h3>
        <p style={{ fontSize: "2rem", color: "#ff4d4d" }}>60€</p>
        <button
          onClick={() => onAddToCart("MEDIUM", 60)}
          style={submitButtonStyle}
        >
          Aggiungi
        </button>
      </div>
      <div
        style={{
          border: "1px solid #ff4d4d",
          padding: "20px",
          textAlign: "center",
          background: "rgba(255,77,77,0.1)",
          borderRadius: "10px",
        }}
      >
        <h3 style={{ color: "#ff4d4d" }}>PRO</h3>
        <p style={{ fontSize: "2rem", color: "#ff4d4d" }}>99€</p>
        <button
          onClick={() => onAddToCart("PRO", 99)}
          style={submitButtonStyle}
        >
          Aggiungi
        </button>
      </div>
    </div>
  </div>
);

// ============================================
// CAREERS PAGE
// ============================================
const CareersPage = () => {
  const [formData, setFormData] = useState({
    titolo: "",
    nomeCompleto: "",
    descrizione: "",
    file: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("titolo", formData.titolo);
    data.append("nomeCompleto", formData.nomeCompleto);
    data.append("descrizione", formData.descrizione);
    data.append("file", formData.file);

    try {
      const res = await apiService.uploadCV(data);
      if (res.ok) {
        alert("Candidatura inviata con successo!");
        window.setPage("welcome");
      } else {
        alert("Errore durante l'invio.");
      }
    } catch (err) {
      alert("Errore di connessione.");
    }
  };

  return (
    <div>
      <h1 className="h1" style={titleStyle}>
        LAVORA CON NOI
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "450px",
          margin: "0 auto",
          background: "rgba(0, 0, 0, 0.8)",
          padding: "30px",
          borderRadius: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Titolo (es. Personal Trainer)"
          required
          value={formData.titolo}
          onChange={(e) => setFormData({ ...formData, titolo: e.target.value })}
          style={{ ...inputStyle, marginBottom: "15px" }}
        />
        <input
          type="text"
          placeholder="Nome Completo"
          required
          value={formData.nomeCompleto}
          onChange={(e) =>
            setFormData({ ...formData, nomeCompleto: e.target.value })
          }
          style={{ ...inputStyle, marginBottom: "15px" }}
        />
        <textarea
          placeholder="Breve descrizione..."
          value={formData.descrizione}
          onChange={(e) =>
            setFormData({ ...formData, descrizione: e.target.value })
          }
          style={{
            width: "100%",
            height: "100px",
            background: "#222",
            color: "white",
            border: "1px solid #444",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "15px",
          }}
        />
        <label
          style={{ color: "white", display: "block", marginBottom: "5px" }}
        >
          Carica CV (PDF)
        </label>
        <input
          type="file"
          accept=".pdf"
          required
          onChange={(e) =>
            setFormData({ ...formData, file: e.target.files[0] })
          }
          style={{ color: "white", marginBottom: "20px", width: "100%" }}
        />
        <button type="submit" style={submitButtonStyle}>
          INVIA CANDIDATURA
        </button>
      </form>
    </div>
  );
};

// ============================================
// PROFILE PAGE
// ============================================
const ProfilePage = ({ userName }) => {
  const piano = localStorage.getItem("utentePiano") || "GRATUITO";

  return (
    <div>
      <h1 className="h1" style={titleStyle}>
        IL TUO PROFILO TITAN
      </h1>
      <section
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.05)",
          padding: "30px",
          borderRadius: "15px",
          border: "1px solid #333",
          color: "white",
        }}
      >
        <p style={{ marginBottom: "10px" }}>
          <strong>NOME:</strong> {userName}
        </p>
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "rgba(255,77,77,0.1)",
            border: "1px solid #ff4d4d",
            borderRadius: "10px",
          }}
        >
          <p>
            <strong>PIANO ATTIVO:</strong>{" "}
            <span style={{ color: "#00ff00", fontWeight: "bold" }}>
              {piano}
            </span>
          </p>
        </div>
        <button
          onClick={() => window.setPage("shop")}
          style={{ ...submitButtonStyle, width: "100%", marginTop: "20px" }}
        >
          CAMBIA PIANO
        </button>
      </section>
    </div>
  );
};

// ============================================
// MAIN APP
// ============================================
export default function TitanApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [currentPage, setCurrentPage] = useState("register");
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const logged = localStorage.getItem("utenteLoggato") === "true";
    const name = localStorage.getItem("utenteNome");
    if (logged && name) {
      setIsLoggedIn(true);
      setUserName(name);
      setCurrentPage("welcome");
    }

    window.setPage = setCurrentPage;
  }, []);

  const handleLogin = (name) => {
    setUserName(name);
    setIsLoggedIn(true);
    setCurrentPage("welcome");
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const addToCart = (plan, price) => {
    setCartCount((prev) => prev + 1);
    setCartItems((prev) => [...prev, { plan, price }]);
    alert(`Piano ${plan} aggiunto al carrello!`);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Il carrello è vuoto!");
      return;
    }
    if (window.confirm("Vuoi inviare l'ordine?")) {
      localStorage.setItem("utentePiano", cartItems[cartItems.length - 1].plan);
      alert("Ordine ricevuto!");
      window.location.reload();
    }
  };

  const renderContent = () => {
    if (!isLoggedIn) {
      return currentPage === "login" ? (
        <LoginPage onSuccess={handleLogin} />
      ) : (
        <RegistrationPage onSuccess={handleLogin} />
      );
    }

    switch (currentPage) {
      case "welcome":
        return <WelcomePage />;
      case "about":
        return <AboutPage />;
      case "profile-setup":
        return <ProfileSetupPage />;
      case "workout-selection":
        return <WorkoutSelectionPage />;
      case "shop":
        return <ShopPage onAddToCart={addToCart} />;
      case "careers":
        return <CareersPage />;
      case "profile":
        return <ProfilePage userName={userName} />;
      default:
        return <WelcomePage />;
    }
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        fontFamily: "sans-serif",
        color: "white",
        overflowX: "hidden",
      }}
    >
      <style>{`
        .h1 { font-size: clamp(20px, 10vw, 50px); text-align: center; margin: 30px 0; background: linear-gradient(to bottom, #fff, #444); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(4px 4px 0px #610303); animation: titanStrong 3s infinite; }
        @keyframes titanStrong { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        a { color: white !important; text-decoration: none !important; font-weight: bold; text-transform: uppercase; font-size: 0.9rem; transition: 0.3s; }
        a:hover { color: #ff4d4d !important; }
        @media (max-width: 768px) {
          .hamburger { display: block !important; }
          .navbar { display: none !important; position: fixed; top: 60px; left: -250px; width: 200px; height: 100%; background: #111; flex-direction: column !important; padding-top: 20px; transition: left 0.3s ease; z-index: 1000; }
          .navbar.active { display: flex !important; left: 0; }
          .navbar ul { flex-direction: column !important; }
          .navbar ul li { margin: 20px 0; text-align: center; }
        }
      `}</style>

      <Header
        userName={isLoggedIn ? userName : null}
        cartCount={cartCount}
        onLogout={handleLogout}
        onCartClick={handleCheckout}
      />
      <main style={{ padding: "20px" }}>
        {renderContent()}
        <Carousel />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
