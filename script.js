const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});

/* =========================================
   HERO PROJECT SLIDER
========================================= */

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dot");

const nextButton = document.getElementById("nextProject");
const prevButton = document.getElementById("prevProject");

const projectUrl = document.getElementById("project-url");

let currentSlide = 0;


/* Project URLs */

const projectUrls = [
    "https://ahmadboxcricket.com/home",
    "https://sankalanindia.in/",
    "https://hathkarghaudhyog.in/",
];


/* Show slide */

function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    }

    if (index < 0) {
        currentSlide = slides.length - 1;
    }

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });


    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

    projectUrl.textContent = projectUrls[currentSlide];
}


/* Next */

nextButton.addEventListener("click", () => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

});


/* Previous */

prevButton.addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

});


/* Dot navigation */

dots.forEach((dot) => {

    dot.addEventListener("click", () => {

        currentSlide = Number(
            dot.getAttribute("data-slide")
        );

        showSlide(currentSlide);

    });

});


/* Auto slide */

setInterval(() => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 2000);