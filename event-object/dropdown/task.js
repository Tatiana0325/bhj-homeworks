const dropdownList = document.querySelectorAll('.dropdown');

let arrDropdown = Array.from(dropdownList);

function openDropdown(number) {
    let dropdownValue = dropdownList[number].querySelector('.dropdown__value');
    let dropList =  dropdownList[number].querySelector('.dropdown__list');
    let arrItem = dropList.querySelectorAll('.dropdown__link');

    let flag = false;

    dropdownValue.addEventListener('click', () => {
        if (!flag) {
            dropList.classList.add('dropdown__list_active');
            flag = true;
    
            for (let j = 0; j < arrItem.length; j++) {
                arrItem[j].addEventListener('click', (event) => {
                    dropdownValue.textContent = arrItem[j].textContent;
                    event.preventDefault();
                    dropList.classList.remove('dropdown__list_active');
                    flag = false;
                });
            }
        } else {
            dropList.classList.remove('dropdown__list_active');
            flag = false;
        }
    });
};

for (let i = 0; i < arrDropdown.length; i++) {
    arrDropdown[i].addEventListener('click', openDropdown(i))
};
