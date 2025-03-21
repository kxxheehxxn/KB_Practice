// li 요소를 클릭하면 모든 li에 .active 클래스를 삭제한다.
// li 요소를 클릭하면 클릭된 대상에 .active가 붙는다.
const $lists = document.querySelectorAll('.con>li');
const $con = document.querySelector('.con');

// $lists.forEach((el, i) => {
//   el.addEventListener('click', function (e) {
//     console.log('this', this);
//     $lists.forEach((elm) => {
//       elm.classList.remove('active');
//     });

//     el.classList.add('active');
//   });
// });

// $con.addEventListener('click', (e) => {
//   console.log('currentTarger', e.currentTarget);
//   console.log('target', e.target);
//   console.log('target', e);
//   if (e.target === p) {
//     console.log('p입니다');
//     return;
//   } else {
//     console.log('p가 아닙니다.');
//   }
// });
// $lists.forEach((el, i) => {
//   el.addEventListener('click', (e) => {
//     console.log('this', this);
//     $lists.forEach((elm) => {
//       elm.classList.remove('active');
//     });

//     el.classList.add('active');
//   });
// });

$con.addEventListener('mouseenter', () => {
  console.log('마우스가 진입했다');
});

$con.addEventListener('mouseleave', () => {
  console.log('마우스가 없어졌다');
});
$con.addEventListener('mousemove', () => {
  console.log('마우스가 움직인다');
});
