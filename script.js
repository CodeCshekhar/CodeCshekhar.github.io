let lastScrollPosition = 0; // Define globally to share across event listeners

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const nav = document.querySelector('nav');
    const navbar = document.querySelector('.navbar');

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

    // Smooth scrolling with centering
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Hide/show navbar on scroll
    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.scrollY;

        if (navbar) { // Check if navbar exists
            if (currentScrollPosition > lastScrollPosition) {
                // User is scrolling down, hide the navbar
                navbar.classList.add('hidden');
            } else {
                // User is scrolling up, show the navbar
                navbar.classList.remove('hidden');
            }
        }

        lastScrollPosition = currentScrollPosition;
    });

    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) { // Check if it's a mobile device
          const navbar = document.querySelector('.nav-wrapper');
          if (window.scrollY > 50) { // Adjust scroll threshold as needed
            navbar.classList.remove('show-navbar');
            navbar.classList.add('hide-navbar');
          } else {
            navbar.classList.remove('hide-navbar');
            navbar.classList.add('show-navbar');
          }
        }
      });

    function adjustHeights() {
        const profileImage = document.querySelector('.profile-image');
        if (profileImage) {
            profileImage.style.height = `${profileImage.offsetWidth}px`;
        }
    }

    window.addEventListener('resize', adjustHeights);
    adjustHeights();
});

// Hide nav-wrapper when scrolling on mobile
const navWrapper = document.querySelector('.nav-wrapper');

if (navWrapper) { // Check if navWrapper exists
    window.addEventListener('scroll', function () {
        let currentScroll = window.scrollY || document.documentElement.scrollTop;

        if (currentScroll > lastScrollPosition) {
            // Scroll Down
            navWrapper.classList.add('hidden');
        } else {
            // Scroll Up
            navWrapper.classList.remove('hidden');
        }

        lastScrollPosition = Math.max(currentScroll, 0); // Prevent negative scroll values
    });
}