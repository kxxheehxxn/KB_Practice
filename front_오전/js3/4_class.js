//버튼을 클릭하면 .btn
// .side요소에 .active 가 추가/삭제/토글 된다.

const $btn = document.querySelector('.btn');
const $side = document.querySelector('.side');

$btn.addEventListener('click', (e) => {
  console.log('CLICK');
  console.log(e.target);
  //   $side.classList.toggle('active');
  $side.setAttribute('style', 'display : block');
});
