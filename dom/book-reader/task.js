let bookContent = document.getElementById('book');

let arrSizeText = Array.from(document.querySelectorAll('.font-size'));
let activeSize = 1;

for (let i = 0; i < arrSizeText.length; i++) {
    arrSizeText[i].addEventListener('click', () => {
        arrSizeText[activeSize].classList.remove('font-size_active');
        activeSize = i;
        arrSizeText[activeSize].classList.add('font-size_active');

        if (arrSizeText[i].classList.contains('font-size_small')) {
            bookContent.classList.remove('book_fs-big');
            bookContent.classList.add('book_fs-small');
        } else if (arrSizeText[i].classList.contains('font-size_big')) {
            bookContent.classList.remove('book_fs-small')
            bookContent.classList.add('book_fs-big');
            } else {
                bookContent.classList.remove('book_fs-big');
                bookContent.classList.remove('book_fs-small')
            }

        event.preventDefault();
    });
}

const colorText = document.querySelector('.book__control_color');
let arrColorText = Array.from(colorText.querySelectorAll('.color'));
let activeColorText = 0;

for (let k = 0; k < arrColorText.length; k++) {
    arrColorText[k].addEventListener('click', () => {
        arrColorText[activeColorText].classList.remove('color_active');
        activeColorText = k;
        arrColorText[activeColorText].classList.add('color_active');

        if (arrColorText[k].classList.contains('color_gray')) {
            bookContent.classList.remove('book_color-whitesmoke');
            bookContent.classList.add('book_color-gray');
        } else if (arrColorText[k].classList.contains('color_whitesmoke')) {
            bookContent.classList.remove('book_color-gray')
            bookContent.classList.add('book_color-whitesmoke');
            } else {
                bookContent.classList.remove('book_color-whitesmoke');
                bookContent.classList.remove('book_color-gray')
            }

        event.preventDefault();
    });
}

const colorBg = document.querySelector('.book__control_background');
let arrColorBg = Array.from(colorBg.querySelectorAll('.color'));
let activeColorBg = 2;
console.log(arrColorBg);

for (let j = 0; j < arrColorBg.length; j++) {
    arrColorBg[j].addEventListener('click', () => {
        arrColorBg[activeColorBg].classList.remove('color_active');
        activeColorBg = j;
        arrColorBg[activeColorBg].classList.add('color_active');

        if (arrColorBg[j].classList.contains('color_black')) {
            bookContent.classList.remove('book_bg-gray');
            bookContent.classList.add('book_bg-black');
        } else if (arrColorBg[j].classList.contains('color_gray')) {
            bookContent.classList.remove('book_bg-black')
            bookContent.classList.add('book_bg-gray');
            } else {
                bookContent.classList.remove('book_bg-black');
                bookContent.classList.remove('book_bg-gray')
            }

        event.preventDefault();
    });
}