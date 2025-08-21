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



const txt = document.querySelector('input[type="text"]');
txt.addEventListener('change', () => {
  console.log('Final name entered:', txt.value);
});


const message = document.querySelector('textarea');

message.addEventListener('change', () => {
  console.log('Textarea content:', message.value);
});


const form = document.querySelector('form');
const btn = document.querySelector('button[type="submit"]');

btn.addEventListener('click', () => {
  console.log('Submit button clicked');
});

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent page reload
  console.log('Form submitted');
});


  const email = document.querySelector('input[type="email"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // stop form from submitting by default

    if (email.checkValidity()) {
      console.log('✅ Valid email:', email.value);
      alert('Form submitted successfully!');
    } else {
      console.log('❌ Invalid email format!');
      alert('Please enter a valid email address.');
    }
  });