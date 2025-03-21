// 배열 구조분해할당 연습 문제
// 문제 1: 다음 배열에서 첫 번째와 두 번째 요소를 구조분해할당으로 추출하세요
const fruits = ['사과', '바나나', '오렌지', '포도', '딸기'];
const [index1, index2] = fruits;
console.log(index1, index2);
// 문제 2: 다음 배열에서 첫 번째와 세 번째 요소만 추출하세요
const colors = ['빨강', '파랑', '노랑', '초록', '보라'];
const [c1, , c3] = colors;
console.log(c1, c3);

// 문제 3: 다음 배열에서 첫 번째 요소는 변수에 할당하고 나머지는 새 배열로 만드세요
const numbers = [1, 2, 3, 4, 5];
let [n1, ...arr] = numbers;
console.log(n1, arr);

// 문제 4: 두 변수의 값을 구조분해할당을 사용하여 서로 바꾸세요
let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a, b);

// 문제 5: 다음 중첩 배열에서 2와 4를 추출하세요
const nestedArray = [1, [2, 3], [4, 5]];
const [a1, arr1, arr2] = nestedArray;
const [aa1] = arr1;
const [aa2] = arr2;
console.log(aa1, aa2);

// // 객체 구조분해할당 연습 문제
// 문제 1: 다음 객체에서 이름과 나이를 구조분해할당으로 추출하세요
const person = { name: '김철수', age: 25, job: '개발자', city: '서울' };
const { name: n, age: ag, city: c } = person;
console.log(n, ag, c);

// 문제 2: 다음 객체에서 title은 bookTitle로, author는 그대로 추출하세요
const book = { title: 'JavaScript 완벽 가이드', author: '홍길동', pages: 500 };
const { title: booktitle, author } = book;
console.log(booktitle, author);

// 문제 3: 다음 객체에서 price를 추출하고, 없으면 기본값 0을 사용하세요
const product = { id: 1, name: '노트북', brand: '삼성' };
const { price = 0 } = product;
console.log(price);

// 문제 4: 다음 중첩 객체에서 street과 city를 추출하세요
const user = {
  name: '이영희',
  address: {
    street: '강남대로',
    city: '서울',
    zipCode: '12345',
  },
};

const { address: addr } = user;
const { street, city } = addr;
console.log(street, city);

// 문제 5: 함수 파라미터에 구조분해할당을 사용하여 name과 age를 출력하세요
// * 4번 user객체 이용
const printInfo = ({ name } = user, { age = 30 } = user) => {
  console.log(`이름: ${name}, 나이: ${age}`);
};
printInfo({ name: '박지민', age: 30, gender: '여성' });
// 출력: 이름: 박지민, 나이: 30
