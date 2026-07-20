// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Active Navigation Link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Scroll Effect for Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});

// Console Message
console.log('%c👋 Hello, fellow developer!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with faith, HTML, CSS, and JavaScript ❤️', 'color: #f59e0b; font-size: 12px;');
console.log('%cIT CAN ONLY BE GOD 🙏 | LEARN BEFORE YOU EARN 💻', 'color: #10b981; font-size: 14px; font-weight: bold;');