const slidesHeader = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlideHeader() {
    slidesHeader[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slidesHeader.length;
    slidesHeader[currentSlide].classList.add('active');
}

setInterval(nextSlideHeader, 10000); // Troca de slide a cada 10 segundos

let currentSlideSobre = 0;
const slidesSobre = document.querySelectorAll('.slides-sobre .class-default-MVV');

function showSlideSobre(index) {
    const totalSlidesSobre = 6;
    currentSlideSobre = (index + totalSlidesSobre) % totalSlidesSobre; // Ensure the index is within bounds
    slidesSobre.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - currentSlideSobre)}%)`;
    });
}

function nextSlideSobre() {
    showSlideSobre(currentSlideSobre + 2);
}

function prevSlideSobre() {
    showSlideSobre(currentSlideSobre - 2);
}

document.querySelector('.next').addEventListener('click', nextSlideSobre);
document.querySelector('.prev').addEventListener('click', prevSlideSobre);

document.addEventListener('DOMContentLoaded', () => {
    showSlideSobre(currentSlideSobre);
});
