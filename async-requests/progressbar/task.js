const progress = document.getElementById( 'progress' );

let downloadForm = document.getElementById('form');

downloadForm.addEventListener('submit', function(e) {
    let formData = new FormData(downloadForm);
    let xhr = new XMLHttpRequest();
    
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    if (progress.value < 1) {
        xhr.upload.onprogress = function() {
            progress.value += 0.1;
        }
    } else {
        xhr.upload.onload = function() {
            progress.value = 1;
        }
    }

    xhr.send(formData);
    e.preventDefault();
});
