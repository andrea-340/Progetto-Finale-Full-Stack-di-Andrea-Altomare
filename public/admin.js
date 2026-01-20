import ApiService from "./api-service.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("TITAN Admin System Initialized");
  aggiornaDashboard();
});

async function aggiornaDashboard() {
  await caricaTabellaUtenti();
  await caricaTabellaCvs();
}

/* =============================================
   GESTIONE TABELLA UTENTI
   ============================================= */
async function caricaTabellaUtenti() {
  const tbody = document.getElementById("userTableBody");
  if (!tbody) return;

  const utenti = await ApiService.getAllUsers();

  if (utenti.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Nessun utente trovato.</td></tr>`;
    return;
  }

  tbody.innerHTML = utenti
    .map(
      (u) => `
        <tr>
            <td>${u.id}</td>
            <td><strong>${u.nome || ""} ${u.cognome || ""}</strong></td>
            <td>${u.email}</td>
            <td><span class="status-badge" style="background:#444; padding:4px 8px; border-radius:4px;">ATLETA</span></td>
            <td>
            </td>
        </tr>
    `,
    )
    .join("");
}

/* =============================================
   GESTIONE TABELLA CV
   ============================================= */
async function caricaTabellaCvs() {
  const tbody = document.getElementById("cvTableBody");
  if (!tbody) return;

  const cvs = await ApiService.getAllCvs();

  if (cvs.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;">Nessuna candidatura presente.</td></tr>`;
    return;
  }

  tbody.innerHTML = cvs
    .map(
      (cv) => `
        <tr>
            <td>${cv.id}</td>
            <td>${cv.nomeCompleto}</td>
            <td style="color:#ff4d4d; font-weight:bold;">${cv.titolo}</td>
            <td>
                <button class="btn-download" onclick="window.open(ApiService.getDownloadUrl(${cv.id}), '_blank')" style="background:#28a745; color:white; border:none; padding:8px 12px; border-radius:4px; cursor:pointer;">
                    📥 PDF
                </button>
            </td>
        </tr>
    `,
    )
    .join("");
}
