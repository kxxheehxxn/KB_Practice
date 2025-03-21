// var num = 10;
// var test = '10';
// console.log('num은', num);
// console.log(`num은 ${num}`);

// console.log('test는', test);
// console.log(`test는 ${test}`);

let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); // undefined

fruits.push('grape'); // 배열의 끝에 추가
console.log(fruits[3]);

console.log(fruits.pop()); // 배열의 끝을 삭제

console.log(fruits.length); // 배열의 길이

var variavle = 10; // var는 변수 재선언 가능 <- 비추천 이유 : 호이스팅
//호이스팅 : 변수의 선언을 끌어올려서 사용할 수 있는 것
