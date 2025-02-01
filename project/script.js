// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', newTheme);
  themeIcon.className = newTheme === 'light' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
});

// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Event registration functionality
const modal = document.getElementById('registrationModal');
const registerButtons = document.querySelectorAll('.register-btn:not([disabled])');
const closeModal = document.querySelector('.close-modal');
const registrationForm = document.getElementById('registrationForm');

if (registerButtons) {
  registerButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  });
}

if (closeModal) {
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

if (registrationForm) {
  registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      studentId: document.getElementById('student-id').value
    };
    
    // For demo purposes, we'll just log the data
    console.log('Registration submitted:', formData);
    
    // Show success message
    alert('Registration successful! You will receive a confirmation email shortly.');
    
    // Close modal and reset form
    modal.style.display = 'none';
    registrationForm.reset();
  });
}