const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.header .nav');
const link = document.querySelectorAll('.nav a');
const lightbox = document.querySelector('.lightbox');
const lightboxClose = document.querySelector('.lightbox-close');
const totalImgs = document.querySelectorAll('.gallery img');
const lightboxImg = document.querySelector('.lightbox-img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
const totalImgLength = totalImgs.length;

window.addEventListener("load", function() {
    document.querySelector(".preloader").classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", () => {
    
    
    // nav toggle
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // link.forEach((l) => {
    //     l.addEventListener('click', (e) => {
    //         nav.classList.remove('show');            
    //     });
    // })

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    })

    // lightbox.addEventListener('click', () => {
    //     lightbox.classList.add('open');
    //     console.log('click');
    // });

    totalImgs.forEach((img) => {
        img.addEventListener('click', () => {
            lightbox.classList.add('open');
            const lightImg = document.querySelector('.lightbox-img');
            lightImg.src = img.src;
        });
    });

    if (prev) {
        prev.addEventListener('click', () => {
            if (index == 0) {
                index = totalImgLength - 1;
            } else {
                index--;
            }
            lightboxSlideShow();
        });
    }
    
    if (next) {
        next.addEventListener('click', () => {
            if (index == totalImgLength - 1) {
                index = 0;
            } else {
                index++;
            }
            lightboxSlideShow();
        });
    }
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('open');
        });
    }
   

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target.classList.contains("lightbox")) {
                lightbox.classList.remove('open');
            }  
        })
    }
});

function lightboxSlideShow() {
    const imgSrc = document.querySelectorAll('.gallery img');
    const lightboxCounter = document.querySelector('.lightbox-counter');

    lightboxImg.src = imgSrc[index].src;
    lightboxCounter.innerHTML = (index + 1) + "/" + totalImgLength;
}

