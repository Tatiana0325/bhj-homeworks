const cookieImage = document.getElementById('cookie');
const cookieCal = document.getElementById('clicker__counter');
const cookieSpeed = document.getElementById('clicker__speed');
start = (new Date()).getTime();

cookieImage.onclick = () => {

    cookieCal.textContent = Number(cookieCal.textContent) + 1;

    if (Number(cookieCal.textContent) % 2 == 0) {
        cookieImage.width = '200';
    } else {
        cookieImage.width = '250';
    }

    let timer = new Date();
    let end = timer.getTime();

    cookieSpeed.textContent = (1000 / (end - start)).toFixed(2);

    start = end;
}