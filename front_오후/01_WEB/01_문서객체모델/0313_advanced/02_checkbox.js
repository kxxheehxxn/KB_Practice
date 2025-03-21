const $chk = document.querySelectorAll('label > input');
const $btn = document.getElementById('btn');

let foodList = [];

$chk.forEach((element) => {
  element.addEventListener('change', (e) => {
    if (e.target.checked) {
      foodList.push(e.target.value);
    } else {
      foodList = foodList.filter((food) => food !== e.target.value);
    }
  });
});

$btn.addEventListener('click', () => {
  console.log(foodList);
});
