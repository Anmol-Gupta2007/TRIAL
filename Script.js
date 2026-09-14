// Set Current Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when a navigation link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Dark / Light Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Check localStorage for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }
}

themeToggleBtn.addEventListener('click', () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';

  if (isDark) {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  } else {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }
});

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Placeholder action: replace with your backend API or Formspree/EmailJS
  alert(`Thank you, ${name}! Your message has been received.`);
  contactForm.reset();
});
