const listLink = document.querySelectorAll('.menu__link');

let arrLink = Array.from(listLink);

for (let i = 1; i < arrLink.length; i++) {
    let popUpMenu = arrLink[i].closest('.menu_sub');
    let popUpMenuBefore = arrLink[i - 1].closest('.menu_sub');
        
    if (popUpMenu !== null) {
        if(popUpMenuBefore == null) {
            arrLink[i - 1].onclick = function() {
                arrLink[i].closest('.menu_sub').className = 'menu menu_sub menu_active';
                return false;
            }
        }
    }
}