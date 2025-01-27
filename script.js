document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const nav = document.querySelector('nav');
    let lastScrollTop = 0;

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
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    let lastScrollPosition = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.scrollY;
    
        if (currentScrollPosition > lastScrollPosition) {
            // User is scrolling down, hide the navbar
            navbar.classList.add('hidden');
        } else {
            // User is scrolling up, show the navbar
            navbar.classList.remove('hidden');
        }
    
        lastScrollPosition = currentScrollPosition;
    });
    
    // Dynamically set element heights for better responsiveness
    function adjustHeights() {
        const profileImage = document.querySelector('.profile-image');
        profileImage.style.height = `${profileImage.offsetWidth}px`;
    }

    window.addEventListener('resize', adjustHeights);
    adjustHeights();
});