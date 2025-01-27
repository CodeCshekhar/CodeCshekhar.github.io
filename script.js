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
    
    function adjustHeights() {
        const profileImage = document.querySelector('.profile-image');
        profileImage.style.height = `${profileImage.offsetWidth}px`;
    }

    window.addEventListener('resize', adjustHeights);
    adjustHeights();
});

// JavaScript to hide the nav on scroll down and show on scroll up (Mobile Only)
let prevScrollpos = window.scrollY;
const navWrapper = document.querySelector('.nav-wrapper');

// Check for mobile view (767px or less)
if (window.innerWidth <= 767) {
    window.onscroll = function () {
        let currentScrollPos = window.scrollY;

        if (prevScrollpos > currentScrollPos) {
            // User is scrolling up, show the nav
            navWrapper.style.top = "0";
        } else {
            // User is scrolling down, hide the nav
            navWrapper.style.top = "-60px"; // Adjust this value based on your nav height
        }

        prevScrollpos = currentScrollPos;
    };
}


