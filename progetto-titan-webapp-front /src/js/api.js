const BASE_URL = "http://localhost:8080/api";

window.apiTitan = {
  register: async (data) => {
    return await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },
  login: async (data) => {
    return await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },
  uploadCV: async (formData) => {
    return await fetch(`${BASE_URL}/cv/upload`, {
      method: "POST",
      body: formData,
    });
  },
};
