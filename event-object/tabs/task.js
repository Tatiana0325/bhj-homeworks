const menuList = document.querySelectorAll('.tab');
const contentList = document.querySelectorAll('.tab__content');

let arrMenu = Array.from(menuList);
let arrContent = Array.from(contentList);

let activeNumber = 0;

function activeMenu(number) {
    arrMenu[number].classList.add('tab_active');
    arrContent[number].classList.add('tab__content_active');
}

function closeMenu(number) {
    arrMenu[number].classList.remove('tab_active');
    arrContent[number].classList.remove('tab__content_active');
}

for (let i = 0; i < arrMenu.length; i++) {
    let flag = false;

    arrMenu[i].addEventListener('click', () => {
        if (i != activeNumber) {
            closeMenu(activeNumber);
            flag = false;
        };

        if(!flag) {
            activeNumber = i;
            activeMenu(activeNumber);
            flag = true;
        } 
    })
}