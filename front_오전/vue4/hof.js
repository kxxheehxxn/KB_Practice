//배열과 함께 사용되는 고차함수
let numbers = [50, 10, 30, 55, 60];
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);

//배열과 함께 쓰이는 고차함수
//forEach, find, findIndex
//some, every, filter, map
//flatmap, sort, reduce

const fruits = ['사과', '바나나', '키위', '딸기'];
fruits.forEach((item, i, arr) => {
  console.log(item, i, arr);
});

const item1 = { name: '김밥', price: 1000 };
const item2 = { name: '라면', price: 2000 };
const item3 = { name: '떡볶이', price: 3000 };
const item4 = { name: '김밥', price: 1500 };
const items = [item1, item2, item3, item4];

//find : 조건에 맞는 아이템을 찾을 때
let find1 = items.find((item) => item.name === '라면');
console.log(find1);

//findIndex : 조건에 맞는 아이템의 인덱스를 찾을 때
find1 = items.findIndex((item) => item.name === '라면');
console.log(find1);

//some : 배열의 아이템들이 부분적으로 조건에 맞는지 확인
//반환값은 불리안
find1 = items.some((item) => item.name === '라면');
console.log(find1);

//every : 전제 조건이 맞는지 확인
//반환값은 불리안
find1 = items.every((item) => item.name === '라면');
console.log(find1);

//filter : 조건에 맞는아이템을 새로운 배열로 반환
find1 = items.filter((item) => item.name === '김밥');
console.log(find1);

//map
//let numbers = [50, 10, 30, 55, 60]
let result = numbers.map((item) => item * 2);
console.log(result);

let numbers2 = [50, 10, 30, 55, 60];
let result2 = numbers.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result2);
//flat map : 중첩된 배열을 펼펴서 새로운 배열로 생성

result2 = result2.flatMap((item) => [1, 2]);
console.log(result2);

result2 = ['test'].flatMap((text) => text.split(''));
console.log(result2);

const num = [0, 5, 20, 5, 80];
num.sort();
console.log(num);

num.sort((a, b) => a - b);
console.log(num);

num.sort((a, b) => b - a);
console.log(num);

//reduce
let test3 = num.reduce((sum, v) => sum + v, 0);
console.log(test3);
