/* var, let, const */
/* const = constante => que não muda */
const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode');
});