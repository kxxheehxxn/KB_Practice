console.log('외부파일');

const $target = document.getElementsByClassName('target');
console.log('$target--', $target);

const $ul = document.querySelector('.list'); //하나만 선택
console.log($ul);
$ul.style.background = 'red';

const $ul2 = document.querySelectorAll('.list'); //하나만 선택
console.log($ul2);

const $ul3 = document.getElementsByClassName('list'); //하나만 선택
console.log($ul3);

let output = '';
const $target2 = document.getElementById('target');
console.log($target2);

for (let i = 0; i < 10; i++) {
  output += `<p>${i + 1}번째 요소</p>`;
}

$target2.innerHTML = output;
