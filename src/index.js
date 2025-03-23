// Your code here
// Base URL for the API
const BASE_URL = "http://localhost:3000";
// Variable to keep track of the currently displayed character
let currentCharacter = null;
// Function to fetch and display all characters in the character bar
function loadCharacters() {
    // Select the character-bar div where names will be displayed
  const characterBar = document.querySelector("#character-bar");

  // Fetch character data from the server
  fetch(`${BASE_URL}/characters`)
    .then((response) => response.json()) // Convert response to JSON
    .then((characters) => {
        // Loop through each character in the array
      characters.forEach((character) => {
        // Create a span element for the character's name
        const span = document.createElement("span");
        span.innerText = character.name; // Set the character's name as text

        // Add click event to show details when the span is clicked
        span.addEventListener("click", () => showCharacterDetails(character));

        // Add the span to the character-bar div
        characterBar.appendChild(span);
      });
    })
    .catch((error) => console.error("Error fetching characters:", error)); // Log any errors
}

// Function to display a character's details in the detailed-info div
function showCharacterDetails(character) {
    // Update the currentCharacter so we know who is being displayed
  currentCharacter = character;
