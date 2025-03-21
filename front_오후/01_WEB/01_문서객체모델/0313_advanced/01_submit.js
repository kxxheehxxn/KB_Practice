const $name = document.getElementById('name');
const $btn = document.getElementById('btn');

let output = '';

$name.addEventListener('input', (e) => {
  output = e.target.value;
});

$btn.addEventListener('click', () => {
  console.log(output);
});
