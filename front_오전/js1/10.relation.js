//대소관계 비교 연산자
// >, <, >=, <=

console.log(1 > 2); //false
console.log(1 < 2); //true
console.log(1 >= 1); //true
console.log(1 <= 1); //true

//연산자 우선순위

let a = 1;
let b = 2;

let result = ((a + b) * 4) / 5;

//동등 비교 관계 연산자 ==, ===, !=, !==
// == : 값만 비교 (같은지)
// != : 값만 비교 (다른지)
// === : 값과 타입 비교 (같은지)
// !== : 값과 타입 비교 (다른지)

console.clear();

console.log(1 == 1); //true
console.log(1 == '1'); //true (타입이 달라도 값만 같으면 true)
console.log(1 === '1'); //false
console.log(1 != 2); //true
console.log(true !== 'true'); //true
console.log(true === true); //true
console.log(true != true); //false
console.log(true == true); //true

const obj1 = { name: 'sony' };
const obj2 = { name: 'sony' }; //객체는 참조값이 다르기 때문에 false
console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false
//name이 같은 객체를 만들어서 비교하면 true
console.log(obj1.name === obj2.name); //true
