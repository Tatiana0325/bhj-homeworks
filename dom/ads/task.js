const arrRotators = Array.from(document.querySelectorAll('.rotator__case'));
let activeNumberRotator = 0;
let timer = Number(arrRotators[activeNumberRotator].getAttribute('data-speed'));

arrRotators[activeNumberRotator].style.color = arrRotators[activeNumberRotator].getAttribute('data-color'); 

let timerId = setTimeout(function sliderRotator() {
    if (activeNumberRotator < (arrRotators.length - 1)) {
        arrRotators[activeNumberRotator].classList.remove('rotator__case_active');
        ++activeNumberRotator;
        arrRotators[activeNumberRotator].classList.add('rotator__case_active');
        arrRotators[activeNumberRotator].style.color = arrRotators[activeNumberRotator].getAttribute('data-color');
        timer = Number(arrRotators[activeNumberRotator].getAttribute('data-speed'));
    } else {
        arrRotators[activeNumberRotator].classList.remove('rotator__case_active');
        activeNumberRotator = 0;
        arrRotators[activeNumberRotator].classList.add('rotator__case_active');
        arrRotators[activeNumberRotator].style.color = arrRotators[activeNumberRotator].getAttribute('data-color');
        timer = Number(arrRotators[activeNumberRotator].getAttribute('data-speed'));
    }

    timerId = setTimeout(sliderRotator, timer);
}, timer);
