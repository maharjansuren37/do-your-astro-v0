const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.header .nav');
const link = document.querySelectorAll('.nav a');

window.addEventListener("load", function() {
    document.querySelector(".preloader").classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", () => {
    // nav toggle
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    link.forEach((l) => {
        l.addEventListener('click', (e) => {
            nav.classList.remove('show');            
        });
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    })
})