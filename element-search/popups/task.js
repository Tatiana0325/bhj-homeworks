const main = document.getElementById('modal_main');
const success = document.getElementById('modal_success');

main.className = 'modal modal_active';

const mainClose = main.querySelector('.modal__close');

mainClose.onclick = function() {
    main.className = 'modal';
};

const showSuccess = main.querySelector('.show-success');

showSuccess.onclick = function() {
    main.className = 'modal';
    success.className = 'modal modal_active';
};

const successClose = success.querySelector('.modal__close');

successClose.onclick = function() {
    success.className = 'modal';
};

const btnClose = success.querySelector('.btn_success');

btnClose.onclick = function() {
    success.className = 'modal';
};