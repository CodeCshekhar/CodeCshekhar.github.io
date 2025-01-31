let lastScrollPosition = 0; // Define globally to share across event listeners

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const nav = document.querySelector('nav');
    const navbar = document.querySelector('.navbar');
    const navWrapper = document.querySelector('.nav-wrapper');

    // Scroll observer for showing sections on scroll
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('active', entry.isIntersecting);
            });
        },
        { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    // Smooth scrolling with centering
    document.querySelectorAll('nav button').forEach((button) => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Hide navbar on mobile
    if (navWrapper && window.innerWidth <= 768) {
        navWrapper.classList.add('hide-navbar');
    }

    // Hide/show navbar on scroll
    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.scrollY;

        if (navbar) {
            navbar.classList.toggle('hidden', currentScrollPosition > lastScrollPosition);
        }

        if (navWrapper && window.innerWidth <= 768) { // Hide navbar on mobile
            navWrapper.classList.add('hide-navbar');
        }

        lastScrollPosition = Math.max(currentScrollPosition, 0);
    });

    // Adjust profile image height to be square
    function adjustHeights() {
        const profileImage = document.querySelector('.profile-image');
        if (profileImage) {
            profileImage.style.height = `${profileImage.offsetWidth}px`;
        }
    }

    window.addEventListener('resize', adjustHeights);
    adjustHeights();
});