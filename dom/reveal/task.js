let arrReveal = Array.from(document.querySelectorAll('.reveal'));

for (let i = 0; i < arrReveal.length; i++) {
window.addEventListener('scroll', function() {
    if (arrReveal[i].getBoundingClientRect().top < window.innerHeight) {
        arrReveal[i].classList.add('reveal_active');
    }
    
    if ((arrReveal[i].getBoundingClientRect().bottom <= 0) || (arrReveal[i].getBoundingClientRect().top >= window.innerHeight)) {
        arrReveal[i].classList.remove('reveal_active');
    }
})
}