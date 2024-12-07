// Section Navigation
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}



// Education Section Interaction
function toggleEducationDetails() {
    const additionalInfo = document.querySelector('.additional-info');
    additionalInfo.classList.toggle('hidden');
}

// Skills Section Interaction
function animateSkills() {
    const skillBars = document.querySelectorAll('.progress-bar');
    skillBars.forEach(bar => {
        const progress = bar.dataset.progress;
        bar.style.width = `${progress}%`;
    });
}

// Projects Section Carousel
let currentProjectIndex = 0;
const projects = document.querySelectorAll('.project');

function nextProject() {
    projects[currentProjectIndex].classList.remove('active');
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    projects[currentProjectIndex].classList.add('active');
}

function prevProject() {
    projects[currentProjectIndex].classList.remove('active');
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    projects[currentProjectIndex].classList.add('active');
}