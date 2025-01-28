console.log('Primera línea de script.js');
/* Language selection in cookies */
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
  console.log('Changing language to: ', language);
  setCookie("language", language, 7); // Store selected language in a cookie
  const welcomeMessage = document.getElementById("welcomeMessage");
  welcomeMessage.textContent = translations[language].welcomeMessage;
}

if (document.readyState !== 'loading') {
  console.log('document is already ready, just execute code here');
  myInitCode();
} else {
  document.addEventListener('DOMContentLoaded', function () {
    console.log('document was not ready, place code here');
    myInitCode();
  });
}

function myInitCode() {
  console.log('myInitCode');
  const savedLanguage = getCookie("language") || "es"; // Spanish by default
  console.log('savedLanguage: ', savedLanguage);
  const languageSelector = document.getElementById("languageSelector");

  languageSelector.value = savedLanguage;

  changeLanguage(savedLanguage);

  // Event to change language when selecting a new one
  languageSelector.addEventListener("change", (event) => {
    changeLanguage(event.target.value);
  });

/* Hobbies */
  const saveButton = document.getElementById("save-hobbies");
  const hobbyIconsDiv = document.getElementById("hobby-icons");

  const hobbyIcons = {
    sports: "./sports.png",
    shopping: "./shopping.png",
    technology: "./technology.png"
  };

  /* Hobbies selection in localStorage */
  const loadHobbies = () => {
    const savedHobbies = JSON.parse(localStorage.getItem("userHobbies")) || [];
    displayHobbyIcons(savedHobbies);
  };

  const saveHobbies = () => {
    const selectedHobbies = Array.from(
      document.querySelectorAll("#hobby-form input[type=checkbox]:checked")
    ).map(checkbox => checkbox.value);

    localStorage.setItem("userHobbies", JSON.stringify(selectedHobbies));
    displayHobbyIcons(selectedHobbies);
  };

  // Display hobby icons based on the selected hobbies
  const displayHobbyIcons = (hobbies) => {
    hobbyIconsDiv.innerHTML = ""; // Clear existing icons

    hobbies.forEach(hobby => {
        const img = document.createElement("img");
        img.src = hobbyIcons[hobby];
        img.alt = hobby;
        img.className = "hobby-icon";
        hobbyIconsDiv.appendChild(img);
    });
  };

  // Add event listener to the Save button
  saveButton.addEventListener("click", saveHobbies);

  // Load hobbies on page load
  loadHobbies();
  console.log('loadHobbies called');
}
