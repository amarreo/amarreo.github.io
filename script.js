// Dictionary
const translations = {
  es: {
    welcomeMessage: "Bienvenido a mi sitio web",
  },
  en: {
    welcomeMessage: "Welcome to my website",
  },
};

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function changeLanguage(language) {
  setCookie("language", language, 7); // Store selected language in a cookie
  const welcomeMessage = document.getElementById("welcomeMessage");
  welcomeMessage.textContent = translations[language].welcomeMessage;
}

// Set language based on cookie during web loading
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = getCookie("language") || "es"; // Spanish by default
  const languageSelector = document.getElementById("languageSelector");

  languageSelector.value = savedLanguage;

  changeLanguage(savedLanguage);

  // Event to change language when selecting a new one
  languageSelector.addEventListener("change", (event) => {
    changeLanguage(event.target.value);
  });
});
