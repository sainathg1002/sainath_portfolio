const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav_list');
const navIcon = document.querySelector('.nav-toggle i');
const links = document.querySelectorAll('.nav_link');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
    
    if (navIcon.classList.contains('fa-bars')) {
        navIcon.classList.remove('fa-bars');
        navIcon.classList.add('fa-xmark');
    } else {
        navIcon.classList.remove('fa-xmark');
        navIcon.classList.add('fa-bars');
    }
}); // <-- Removed the extra `}` and moved the semicolon here.

links.forEach(link => {
    link.addEventListener('click', function() {
        if(window.innerWidth <= 768) {
            navList.classList.remove('show');
            navIcon.classList.remove('fa-xmark');
            navIcon.classList.add('fa-bars');
        }
    }); // <-- Placed the semicolon here, inside the forEach loop.
});
