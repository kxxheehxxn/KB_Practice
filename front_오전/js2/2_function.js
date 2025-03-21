function add() {
  console.log('함수를 호출했다.');
}
add();

let add2 = function (a, b) {
  console.log(arguments);
  return a + b;
};
let result = add2(2, 5);
console.log(result);

let fullName = function (a, b) {
  return a + ' ' + b;
};

let name1 = fullName('소영', '박');
let name2 = fullName('삼식', '김');

console.log(name1, name2);

function add3(a, b) {
  return a + b;
}

let sum = add3;

console.log(add3(2, 3));
console.log(sum(1, 3));

function print(num) {
  if (num <= 0) {
    return;
  }
  console.log(num);
}

print(-12);
