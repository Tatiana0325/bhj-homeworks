let deadMole = document.getElementById('dead');
let blunder = document.getElementById('lost');

let victory = 0;
let failure = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function zeroing() {
    deadMole.textContent = 0;
    blunder.textContent = 0;
    victory = 0;
    failure = 0;
}

for (let i = 1; i < 10; i++){
    hole = getHole(i);

    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            ++victory;
            deadMole.textContent = victory;
        } else {
            ++failure;
            blunder.textContent = failure;
        }

        if (victory == 10) {
            alert('Вы победили!');
            zeroing();
        } else if (failure == 5) {
            alert('Вы проиграли!');
            zeroing();
        }
    }
}