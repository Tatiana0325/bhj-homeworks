const progress = document.getElementById( 'progress' );

let downloadForm = document.getElementById('form');

downloadForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let formData = new FormData(downloadForm);
    let xhr = new XMLHttpRequest();
    
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
        xhr.upload.addEventListener('progress', function(event) {
            if (event.lengthComputable) {
                progress.value = event.loaded / event.total;
            };
        });
        
    xhr.send(formData);
});
