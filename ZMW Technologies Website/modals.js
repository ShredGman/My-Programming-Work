window.onload = function() {
  localStorage.setItem("loggedIn", "false");
  localStorage.setItem("userRole", "guest");
}

function toggleModal(type) {
  const modal = document.getElementById("login-signup-modal");
  const adminModal = document.getElementById("admin-dashboard-modal")
  const loginFormContainer = document.getElementById("login-form-container");
  const signupFormContainer = document.getElementById("signup-form-container");

  // Hide both forms by default
  loginFormContainer.style.display = "none";
  signupFormContainer.style.display = "none";
  adminModal.style.display = "none";

  if (type === "login") {
    loginFormContainer.style.display = "block";
  } else if (type === "signup") {
    signupFormContainer.style.display = "block";
  }

  modal.style.display = "block";
}

// Get the modal elements
const adminDashboardModal = document.getElementById("admin-dashboard-modal");

// Get the <span> element that closes the modal
const closeBtns = document.querySelectorAll(".close");

// When the user clicks on <span> (x), close the modal
closeBtns.forEach(function(closeBtn) {
    closeBtn.addEventListener("click", function() {
    const modal = closeBtn.closest('.modal');
    modal.style.display = "none";
    });
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
    }
});

// Get the form/nav buttons
const loginBtn = document.getElementById("login-btn")
const signupBtn = document.getElementById("signup-btn")
const logoutBtn = document.getElementById("logout-btn")
const adminBtn = document.getElementById("admin-btn")
const userPfp = document.getElementById("user-pfp")
const FormContainers = document.getElementById("login-form-container", "signup-form-container")
const modal = document.getElementById("login-signup-modal");

// Get the login and signup forms
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Add code to handle form submission and user authentication
  // Once the user is authenticated and assigned the "admin" role:
  localStorage.setItem("userRole", "admin");
  localStorage.setItem("loggedIn", "true");
  loginBtn.style.display = "none";
  signupBtn.style.display = "none";
  logoutBtn.style.display = "block";
  FormContainers.style.display = "none";
  modal.style.display = "none";
  if (localStorage.getItem("userRole") == "admin") {
    // Display hidden navbar button for admin dashboard
    const adminBtn = document.getElementById("admin-btn");
    adminBtn.style.display = "block";
  } else {
    adminBtn.style.display = "none";
  }
});

signupForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Add code to handle form submission and user registration
  // Once the user is registered and assigned the "admin" role:
  localStorage.setItem("userRole", "admin");
  localStorage.setItem("loggedIn", "true");
  loginBtn.style.display = "none";
  signupBtn.style.display = "none";
  logoutBtn.style.display = "block";
  FormContainers.style.display = "none";
  modal.style.display = "none";
});

logoutBtn.addEventListener("click", function() {
  localStorage.setItem("userRole", "guest");
  localStorage.setItem("loggedIn", "false");
  loginBtn.style.display = "block";
  signupBtn.style.display = "block";
  logoutBtn.style.display = "none";
  userPfp.style.display = "none";
  adminBtn.style.display = "none";
});

const loggedIn = localStorage.getItem("loggedIn")
const userRole = localStorage.getItem("userRole")

// Open admin dashboard
function openAdminDashboard() {
  adminDashboardModal.style.display = "block";
}

// Add event listener to button that opens admin dashboard
// Replace "admin-dashboard-btn" with the ID of your button
  document.getElementById("admin-btn").addEventListener("click", openAdminDashboard);