 // Her selekteres links og menubar 
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

         //animation af links
        navLinks.forEach((link, index)=>{
            if (link.style.animation) {
            link.style.animation = ''
            }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }       
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
   

}

navSlide();

// Medlemsintro

const btn = document.querySelector('#btn');
const medlemsNummer = document.querySelector('#medlemsNummer');
const password = document.querySelector('#password');

btn.addEventListener('click', () => {    
        location.replace("../public/index.html");
});




