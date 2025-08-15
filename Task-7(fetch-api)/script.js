const API_URL = "https://jsonplaceholder.typicode.com/users";
const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

// Fetch and display users
async function fetchUsers() {
  userContainer.innerHTML = "<p>Loading...</p>";
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    userContainer.innerHTML = `<p style="color:red;">❌ Error: ${error.message}</p>`;
  }
}

// Display user data in cards
function displayUsers(users) {
  userContainer.innerHTML = "";
  users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("user-card");
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>📧 ${user.email}</p>
      <p>📍 ${user.address.city}, ${user.address.street}</p>
    `;
    userContainer.appendChild(card);
  });
}

// Reload data on button click
reloadBtn.addEventListener("click", fetchUsers);

// Initial load
fetchUsers();
