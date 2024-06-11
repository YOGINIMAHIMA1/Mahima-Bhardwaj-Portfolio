// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}
// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
     let top = window.scrollY;
     let offset = sec.offsetTop - 150;
     let height = sec.offsetHeight;
     let id = sec.getAttribute('id');

     if(top >= offset && top < offset + height){
     navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
     })
     };
    });
    // Sticky Navbar

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .certificates-container, .portfolio-box, .contact', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// typed js

const typed = new Typed('.multiple-text', {
    strings: ['MERN Stack Developer', 'Full Stack Developer','NodeJS  Developer', 'Backend Developer'],
    typeSpeed: 110,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const type = new Typed('.multiple-text-internship', {
    strings: ['Mern Stack Development','FrontEnd Development','Full Stack Development','Backend Development'],
    typeSpeed: 70,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


// Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxUfYmVS3zum3l0k4gZP91iSnDoW2lH9X0jUoRZaeAo5u-rQd4vJEw5khaRudlz7x_DOA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})






// Contact Form validation

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Retrieve form values and trim whitespace
    const name = document.getElementById('Name').value.trim();
    const email = document.getElementById('Email').value.trim();
    const contact = document.getElementById('Contact').value.trim();
    const subject = document.getElementById('Subject').value.trim();
    const message = document.getElementById('Message').value.trim();

    let errorMessage = ''; // Initialize an empty error message string

    // Validation checks
    if (name === '') {
        errorMessage += 'Full Name is required. ';
    }

    if (email === '') {
        errorMessage += 'Email Address is required. ';
    } else if (!email.includes('@')) {
        errorMessage += 'Email must contain @ symbol. ';
    } else if (!email.endsWith('@gmail.com')) {
        errorMessage += 'Email must be a @gmail.com address. ';
    }

    if (contact === '') {
        errorMessage += 'Contact Number is required. ';
    }

    if (subject === '') {
        errorMessage += 'Email Subject is required. ';
    }

    if (message === '') {
        errorMessage += 'Your Message is required. ';
    }

    // Check if there are any error messages
    if (errorMessage !== '') {
        msg.textContent = errorMessage;
        msg.style.color = 'red';
        return; 
    
    }
    

});


// Loader code

let loader = document.getElementById('preloader');

window.addEventListener("load",function(){
    loader.style.display = "none";
})

// Disable Right click function

window.oncontextmenu=function(){
    return false;
}

const btn = document.getElementById('submit');
document.addEventListener('keypress', (event)=>{
    let keyCode = event.keyCode ? event.keyCode : event.which;

    
    if(keyCode === 13) {
      
      btn.click();
    }
      
  });