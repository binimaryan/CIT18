// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    // This is a simple toggle - for a real mobile menu you'd want more styling
    navLinks.classList.toggle('active');
});

// Form Submission Simulation
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic animation/feedback
        const btn = this.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = 'Sending...';
        btn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you! Your message has been sent successfully.');
            btn.innerHTML = originalText;
            btn.disabled = false;
            contactForm.reset();
        }, 1500);
    });
}

// Simple Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});
