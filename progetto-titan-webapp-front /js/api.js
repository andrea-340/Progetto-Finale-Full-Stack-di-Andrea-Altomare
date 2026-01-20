// js/api.js

window.ApiService = {
  // Configurazione URL Base
  BASE_URL: "http://localhost:8080/api",

  // --- AUTH ---
  async register(userData) {
    const res = await fetch(`${this.BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    if (!res.ok) throw await res.text();
    return res.json();
  },

  async login(credentials) {
    const res = await fetch(`${this.BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    if (!res.ok) throw await res.text();
    return res.json();
  },

  async getAllUsers() {
    const res = await fetch(`${this.BASE_URL}/auth/users`);
    if (!res.ok) throw await res.text();
    return res.json();
  },

  // --- CV ---
  async uploadCv(formData) {
    const res = await fetch(`${this.BASE_URL}/cv/upload`, {
      method: "POST",
      body: formData, // Nota: Nessun header Content-Type per i file
    });
    if (!res.ok) throw await res.text();
    return res.json();
  },

  async getAllCvs() {
    const res = await fetch(`${this.BASE_URL}/cv/all`);
    if (!res.ok) throw await res.text();
    return res.json();
  },

  async deleteCv(id) {
    const res = await fetch(`${this.BASE_URL}/cv/delete/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw await res.text();
    return res.json();
  },

  getDownloadUrl(id) {
    return `${this.BASE_URL}/cv/download/${id}`;
  },
};
