const main = document.getElementById('modal_main');
const success = document.getElementById('modal_success');

function close(element) {
    element.onclick = function() {
        success.classList.remove('modal_active');
    }
}

main.classList.add('modal_active');

const mainClose = main.querySelector('.modal__close');

mainClose.onclick = function() {
    main.classList.remove('modal_active');
}

const showSuccess = main.querySelector('.show-success');

showSuccess.onclick = function() {
    main.classList.remove('modal_active');
    success.classList.add('modal_active');
};

const successClose = success.querySelector('.modal__close');

close(successClose);

const btnClose = success.querySelector('.btn_success');

close(btnClose);