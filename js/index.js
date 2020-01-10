const carouselSlide = document.querySelector('.carousel-slide');
const carouselImage = document.querySelectorAll('.carousel-slide img');

//Buttons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
let size = carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//Button Listener
nextBtn.addEventListener('click', () => {
    if(counter > carouselImage.length - 1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
}); 

//once end is reached simulate endless scroll

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImage[counter].id === 'last-clone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImage.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImage[counter].id === 'first-clone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImage.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});