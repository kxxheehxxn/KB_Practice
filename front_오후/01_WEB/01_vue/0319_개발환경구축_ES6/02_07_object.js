const user = {
  name: 'Alice',
  age: 25,
  job: 'Developer',
};

//1. 객체 구조 분해 할당
//key 할당
// const { age, name, job } = user;
// console.log(name, age, job);

//2. 변수 이름 변경(별칭 지정)
const { name: userName, job: userJob } = user;
console.log(userName, userJob);

//3. 기본값 설정
const { salary = 5000, age: userAge = 30 } = user;
console.log(salary);
console.log(userAge);

// 4.중첩된 객체 구조 분해
const person = {
  name: 'Bob',
  info: { address: 'Seoul', hobbies: ['reading', 'coding'] },
};

//Q1) 구조 분해 할당을 통해 이름과 첫번째 취미를 출력하시오

const { name: name2, info: infor } = person;
const { hobbies: hobby } = infor;
const [firsthobby, seconhobby] = hobby;

console.log(`이름 : ${name2}, 첫번째 취미 : ${firsthobby}`);
