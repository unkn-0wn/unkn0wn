// Hand-drawn oval effect for important elements
document.addEventListener('DOMContentLoaded', function() {
    // Calculate and update experience duration
    const startDate = new Date('2020-03-01'); // Start date from CV - first company join
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const experienceDesc = document.getElementById('experience-desc');
    if (experienceDesc) {
        experienceDesc.textContent = `Experience: ${years}y ${months}m ${days}d ${hours}h ${minutes}m`;
    }

    // Add random slight rotation and position to important elements for hand-drawn feel
    const importantElements = document.querySelectorAll('.important');
    importantElements.forEach(element => {
        const randomRotation = (Math.random() - 0.5) * 2; // -1 to 1 degree
        const randomX = (Math.random() - 0.5) * 4; // -2 to 2 px
        const randomY = (Math.random() - 0.5) * 4; // -2 to 2 px
        element.style.transform = `rotate(${randomRotation}deg) translate(${randomX}px, ${randomY}px)`;
        element.style.display = 'inline-block';
    });

    // Removed wiggle animation

    // Click to toggle descriptions on mobile
    document.querySelectorAll('.important').forEach(el => {
        el.addEventListener('click', () => {
            const desc = el.querySelector('.description');
            if (desc) {
                desc.style.display = desc.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            themeToggle.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
        });
    }

    // Welcome popup (only for mobile)
    const welcomePopup = document.getElementById('welcome-popup');
    if (welcomePopup && window.innerWidth < 768) {
        welcomePopup.style.opacity = '1';
        setTimeout(() => {
            welcomePopup.style.opacity = '0';
        }, 3000);
    }

    // Contact form functionality
    const hireBtn = document.getElementById('hire-btn');
    const contactModal = document.getElementById('contact-modal');
    const closeBtn = document.getElementById('close-btn');
    const contactForm = document.getElementById('contactForm');

    hireBtn.addEventListener('click', () => {
        contactModal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        contactModal.style.display = 'none';
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // For demo, just log and close. In real app, send to server
        console.log('Contact form submitted:', { name, email, message });
        alert('Thank you for your message! I will get back to you soon.');
        contactModal.style.display = 'none';
        contactForm.reset();
    });

    // Close modal when clicking outside
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });
});