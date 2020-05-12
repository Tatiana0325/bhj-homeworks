function timeFormat(time) {
    hours = Math.floor(time / 3600);
    if (hours < 10) {
        hours = '0' + hours;
    };

    minutes = Math.floor((time - (hours * 3600))/60);
    if (minutes < 10) {
        minutes = '0' + minutes;
    };

    seconds = time - - (hours * 3600) - (minutes * 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    return `${hours}:${minutes}:${seconds}`;
};

const timerVictory = document.getElementById('timer');
const timerStart = timerVictory.textContent;
let timerLast = timerStart;

timerVictory.textContent = timeFormat(timerStart);

const id = setInterval(() => {
    --timerLast;
    timerVictory.textContent = timeFormat(timerLast);

    if (timerLast == 0) {
        timerVictory.textContent = timeFormat(timerLast);
        alert('Поздравляем! Вы победили в конкурсе!!!');
        location = 'http://hello.kitty/';
        clearInterval(id);
    }
}, 1000);