/* Hobbies */
if (document.readyState !== 'loading') {
  console.log('document is already ready, just execute code here');
  myInitCodeHobby();
} else {
  document.addEventListener('DOMContentLoaded', function () {
    console.log('document was not ready, place code here');
    myInitCode();
  });
}

function myInitCodeHobby() {
  console.log('myInitCodeHobby');
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
