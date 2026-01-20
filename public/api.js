const BASE_URL = "http://localhost:8080/api";
const ApiService = {
  // --- GESTIONE UTENTI ---
  async getAllUsers() {
    try {
      const response = await fetch(`${BASE_URL}/auth/users`);
      if (!response.ok) throw new Error("Errore recupero utenti");
      return await response.json();
    } catch (err) {
      console.error("API Error (Users):", err);
      return [];
    }
  },
  async deleteUser(id) {
    try {
      const response = await fetch(
        `http://localhost:8080/api/auth/delete/${id}`,
      );
      return response.ok;
    } catch (err) {
      console.error("Errore CORS o Rete:", err);
      return false;
    }
  },
  // --- GESTIONE CV ---
  async getAllCvs() {
    try {
      const response = await fetch(`${BASE_URL}/cv/all`);
      if (!response.ok) throw new Error("Errore recupero CV");
      return await response.json();
    } catch (err) {
      console.error("API Error (CV):", err);
      return [];
    }
  },

  getDownloadUrl(id) {
    return `${BASE_URL}/cv/download/${id}`;
  },
};
