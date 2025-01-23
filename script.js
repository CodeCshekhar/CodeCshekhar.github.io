document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    // Scroll observer for showing sections on scroll
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        },
        { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    // Smooth scrolling for navigation buttons
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message sent successfully!');
        contactForm.reset();
    });

    // Dynamically set element heights for better responsiveness
    function adjustHeights() {
        const profileImage = document.querySelector('.profile-image');
        profileImage.style.height = `${profileImage.offsetWidth}px`;
    }

    window.addEventListener('resize', adjustHeights);
    adjustHeights();
});
