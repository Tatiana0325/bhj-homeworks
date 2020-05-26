const arrayTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
let activeTooltip = 0;
let newDiv = [];

for (let i = 0; i < arrayTooltip.length; i++) {
    let active = false;
    let textTooltip = arrayTooltip[i].getAttribute('title');
    newDiv[i] = document.createElement('div');
    newDiv[i].setAttribute('class', 'tooltip');
    newDiv[i].innerHTML = `${textTooltip}`;

    arrayTooltip[i].addEventListener('click', function(event) {
        event.preventDefault();

        if (i !== activeTooltip) {
            newDiv[activeTooltip].classList.remove('tooltip_active');
            arrayTooltip[activeTooltip].appendChild(newDiv[activeTooltip]);
            active = false;
        }

        if (!active) {
            newDiv[i].classList.add('tooltip_active');
            arrayTooltip[i].appendChild(newDiv[i]);            
            active = true;
            activeTooltip = i;
        } else {
            newDiv[i].classList.remove('tooltip_active');
            arrayTooltip[i].appendChild(newDiv[i]); 
            active = false;
        }
    })
}