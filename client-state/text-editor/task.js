const textEditor = document.getElementById('editor');
const clearButton = document.getElementById('clear');

textEditor.addEventListener('change', function() {
    localStorage.setItem('text', textEditor.value);
})

clearButton.addEventListener('click', function() {
    textEditor.value = '';
});

textEditor.value = localStorage.getItem('text');