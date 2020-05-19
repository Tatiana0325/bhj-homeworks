const sliderImage = document.querySelectorAll('.slider__item');
const btnNext = document.querySelector('.slider__arrow_next');
const btnPrev = document.querySelector('.slider__arrow_prev');
const dotSlider = document.querySelectorAll('.slider__dot');

let activeSlideIndex = 0;

let arrImage = Array.from(sliderImage);
let arrDot = Array.from(dotSlider);

function addClass(number) {
    arrImage[number].classList.add('slider__item_active');
    arrDot[number].classList.add('slider__dot_active');
};

function removeClass(number) {
    arrImage[number].classList.remove('slider__item_active');
    arrDot[number].classList.remove('slider__dot_active'); 
}

addClass(activeSlideIndex);

btnNext.onclick = function() {
    removeClass(activeSlideIndex);

    (activeSlideIndex < (arrImage.length - 1)) ? (++activeSlideIndex) : (activeSlideIndex = 0); 

    addClass(activeSlideIndex);
}

btnPrev.onclick = function() {
    removeClass(activeSlideIndex);

    (activeSlideIndex > 0) ? (--activeSlideIndex) : (activeSlideIndex = arrImage.length - 1);

    addClass(activeSlideIndex);
}

for (let i = 0; i < dotSlider.length; i++) {
    arrDot[i].onclick = function() {        
            removeClass(activeSlideIndex);
            addClass(i);
            activeSlideIndex = i;
    } 
}