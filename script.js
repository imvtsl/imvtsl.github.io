// Smooth scrolling for navigation links
document.querySelectorAll('nav a, .side-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#resume') {
            window.open('https://github.com/imvtsl/resume/raw/main/Vatsal_Vatsal_resume.pdf', '_blank');
        } else {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Close the side menu after clicking a link
        const sideMenu = document.getElementById('side-menu');
        if (sideMenu) {
            sideMenu.classList.remove('active');
        }
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a, .side-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = '#' + section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
});

// Toggle side menu
const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('side-menu');
const closeIcon = document.getElementById('close-icon');

menuIcon.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

closeIcon.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    menuIcon.style.visibility = 'visible';
});

// Close side menu when clicking outside
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !menuIcon.contains(e.target)) {
        sideMenu.classList.remove('active');
        menuIcon.style.visibility = 'visible';
    }
});