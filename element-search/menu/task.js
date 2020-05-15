const listLink = document.querySelectorAll('.menu__link');

let arrLink = Array.from(listLink);
let activeNumber = 0;

for (let i = 0; i < arrLink.length; i++) {
    let active = false;
    
    arrLink[i].onclick = function() {
        let popUpMenu = arrLink[i].closest('.menu__item').querySelector('.menu_sub');
        let popUpMenuStart = arrLink[activeNumber].closest('.menu__item').querySelector('.menu_active');

        if ((popUpMenuStart != null) && (i != activeNumber)) {
            popUpMenuStart.className = 'menu menu_sub';
            active = false;    
        };

        if (!active) {
            popUpMenu.className = 'menu menu_sub menu_active';
            active = true;
            activeNumber = i;
        } else {
            popUpMenu.className = 'menu menu_sub'
            active = false;            
        }
        
        return false;
    }
}