//배열 구조 분해 할당

const animals = ['bear', 'tiger', 'giraffe', 'elephant', 'lion'];

// 1. 기본적인 구조분해할당
// const [ani1, ani2, ani3] = animals;

// console.log(ani1, ani2, ani3);

//2. 일부 요소 건너뛰기
// const [, ani0, , ani4] = animals;
// console.log(ani0, ani4);

//3. 기본값 설정
// const zoo = ['pande', 'koala'];
// const [ani1, ani2, ani3 = 'monkey', ani4 = 'penguin'] = zoo;

// console.log(ani1, ani2, ani3, ani4);

//4. 중첩된 배열 구조분해

const nestedArray = [1, [2, 3], 4];

const [num1, numArr, num2] = nestedArray;
const [num3, num4] = numArr;

console.log(num1, num3, num4, num2);
