const sliderImage = document.querySelectorAll('.slider__item');
const btnNext = document.querySelector('.slider__arrow_next');
const btnPrev = document.querySelector('.slider__arrow_prev');
let activNumber = 0;

let arrImage = Array.from(sliderImage);

btnNext.onclick = function() {
    if (activNumber < (arrImage.length - 1)) {
        arrImage[activNumber].className = 'slider__item';
        arrImage[activNumber + 1].className = 'slider__item slider__item_active';
        ++activNumber;
        return false;
    } else {
        activNumber = 0;
        arrImage[arrImage.length - 1].className = 'slider__item';
        arrImage[activNumber].className = 'slider__item slider__item_active';
    }
}

btnPrev.onclick = function() {
    if (activNumber > 0) {
        arrImage[activNumber].className = 'slider__item';
        arrImage[activNumber - 1].className = 'slider__item slider__item_active';
        --activNumber;
        return false;
    } else {
        activNumber = arrImage.length - 1;
        arrImage[activNumber].className = 'slider__item slider__item_active';
        arrImage[0].className = 'slider__item ';
    }
}

const dotSlider = document.querySelectorAll('.slider__dot');

let arrDot = Array.from(dotSlider);

for (let i = 0; i < dotSlider.length; i++) {
    arrDot[i].onclick = function() {
        arrImage[activNumber].className = 'slider__item';
        arrDot[activNumber].className = "slider__dot";
        activNumber = i;
        arrImage[i].className ='slider__item slider__item_active';
        arrDot[i].className ='slider__dot .slider__dot_active'
    } 
}