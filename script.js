// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Button hover effects
const buttons = document.querySelectorAll('.cta-button, .secondary-button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Feature card animations
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
});

// Get Started button functionality
document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Redirecting to signup page...');
    // In a real application: window.location.href = '/signup';
});

// DOM Elements
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const toggleSignupPassword = document.getElementById('toggleSignupPassword');
const signupPasswordInput = document.getElementById('signupPassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const confirmPasswordInput = document.getElementById('confirmPassword');
const goToSignup = document.getElementById('goToSignup');
const goToLogin = document.getElementById('goToLogin');

// Switch between login and signup forms
function switchForm(formType) {
    if (formType === 'login') {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    } else {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    }
}

// Toggle password visibility
function togglePasswordVisibility(inputElement, iconElement) {
    if (inputElement.type === 'password') {
        inputElement.type = 'text';
        iconElement.classList.remove('fa-eye');
        iconElement.classList.add('fa-eye-slash');
    } else {
        inputElement.type = 'password';
        iconElement.classList.remove('fa-eye-slash');
        iconElement.classList.add('fa-eye');
    }
}

// Handle form submissions
//function handleLoginSubmit(e) {
//   e.preventDefault();
  //  const email = document.getElementById('email').value;
    //const password = document.getElementById('password').value;
    //
    // In a real app, you would send this to your backend
    //console.log('Login attempt with:', { email, password });
    
    // For demo purposes, show a success message
    //alert('Login successful! Redirecting to dashboard...');
    //window.location.href = 'index.html'; // Redirect to homepage after login
//}
// Update the handleLoginSubmit function in script.js
function handleLoginSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Check for dummy credentials
    if ((email === 'shahriarsuzi@gmail.com' || email === '12345678') && password === '12345678') {
        alert('Login successful! Redirecting to dashboard...');
        window.location.href = 'dashboard.html'; // Redirect to dashboard after login
    } else {
        alert('Invalid credentials! Try: email=shahriarsuzi@gmail.com, password=12345678');
    }
}
//edited 
function handleSignupSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('signupEmail').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPass = document.getElementById('confirmPassword').value;
    
    // Simple validation
    if (password !== confirmPass) {
        alert('Passwords do not match!');
        return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Signup attempt with:', { name, email, phone, password });
    
    // For demo purposes, show a success message
    alert('Account created successfully! Welcome to TenantFlow.');
    switchForm('login');
}

// Event Listeners
loginTab.addEventListener('click', () => switchForm('login'));
signupTab.addEventListener('click', () => switchForm('signup'));
goToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    switchForm('signup');
});
goToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    switchForm('login');
});

// Password visibility toggles
togglePassword.addEventListener('click', () => {
    togglePasswordVisibility(passwordInput, togglePassword);
});

toggleSignupPassword.addEventListener('click', () => {
    togglePasswordVisibility(signupPasswordInput, toggleSignupPassword);
});

toggleConfirmPassword.addEventListener('click', () => {
    togglePasswordVisibility(confirmPasswordInput, toggleConfirmPassword);
});

// Form submissions
loginForm.addEventListener('submit', handleLoginSubmit);
signupForm.addEventListener('submit', handleSignupSubmit);

// Initialize form to login by default
switchForm('login');