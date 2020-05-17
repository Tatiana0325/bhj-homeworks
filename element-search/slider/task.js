const sliderImage = document.querySelectorAll('.slider__item');
const btnNext = document.querySelector('.slider__arrow_next');
const btnPrev = document.querySelector('.slider__arrow_prev');
const dotSlider = document.querySelectorAll('.slider__dot');

let activNumber = 0;

let arrImage = Array.from(sliderImage);
let arrDot = Array.from(dotSlider);

function addClass(number) {
    arrImage[number].classList.add('slider__item_active');
    arrDot[number].classList.add('slider__dot_active');
};

function removeClacc(number) {
    arrImage[number].classList.remove('slider__item_active');
    arrDot[number].classList.remove('slider__dot_active'); 
}

addClass(activNumber);

btnNext.onclick = function() {
    if (activNumber < (arrImage.length - 1)) {
        removeClacc(activNumber);
        addClass((activNumber + 1));
        ++activNumber;
    } else {
        removeClacc(activNumber);
        activNumber = 0;
        addClass(activNumber);
    }
}

btnPrev.onclick = function() {
    if (activNumber > 0) {
        removeClacc(activNumber);
        addClass((activNumber - 1));
        --activNumber;
    } else {
        removeClacc(activNumber);
        activNumber = arrImage.length - 1;
        addClass(activNumber);
    }
}

for (let i = 0; i < dotSlider.length; i++) {
    let flag = false;

    arrDot[i].onclick = function() {        
        if (i != activNumber) {
            removeClacc(activNumber);
            flag = false;
        }

        if (!flag) {
            addClass(i);
            flaf = true;
            activNumber = i;
        };
    } 
}