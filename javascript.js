// Select elements
const signupSection = document.getElementById('signup-section');
const loginSection = document.getElementById('login-section');
const switchToLogin = document.getElementById('switch-to-login');
const switchToSignup = document.getElementById('switch-to-signup');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

// Show the Signup form by default
// showSignupForm();
showLoginForm();

// Event listeners for switching forms
switchToLogin.addEventListener('click', showLoginForm);
switchToSignup.addEventListener('click', showSignupForm);

// Event listener for the Signup form submission
signupForm.addEventListener('submit', handleSignup);

// Event listener for the Login form submission
loginForm.addEventListener('submit', handleLogin);

// Function to display the Signup form
function showSignupForm() {
  signupSection.classList.add('active');
  loginSection.classList.remove('active');
}

// Function to display the Login form
function showLoginForm() {
  loginSection.classList.add('active');
  signupSection.classList.remove('active');
}

// Handle Signup Logic
function handleSignup(event) {
  event.preventDefault();

  const username = document.getElementById('signup-username').value.trim().toLowerCase();
  const password = document.getElementById('signup-password').value;
  const confirmpassword = document.getElementById('signup-confirm-password').value;

  if (password !== confirmpassword) {
    alert('Passwords do not match!');
    return;
  }

  // Get existing users from localStorage or create an empty array if none exist
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the username already exists
  if (users.some(user => user.username === username)) {
    
    alert('Username already exists!');

    return;
  }

  // Add the new user to the users array
  users.push({ username, password });

  // Save the updated users array to localStorage
  localStorage.setItem('users', JSON.stringify(users));

  alert('Signup successful! Please log in.');

  showLoginForm();
  

  document.getElementById('signup-username').value = '';
  document.getElementById('signup-password').value = '';
  document.getElementById('signup-confirm-password').value = '';
  
  //localStorage.clear();
}

// Handle Login Logic
function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('login-username').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;

  // Get existing users from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the credentials match any user
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    alert('Login successful!');
    // Redirect to a dashboard or protected page
    window.location.href = 'welcome.html'; // Modify this as needed
  } else {
    alert('Invalid username or password!');
  }
 
}
  //  localStorage.clear();

