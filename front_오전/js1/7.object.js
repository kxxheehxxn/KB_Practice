//객체 = 복합데이터
//상태와 행동을 가지는 복합데이터

//복합데이터 {ket:value , key:value ~~}
// [] 배열

let name = 'apple';
let color = 'red';
let display = '빨간 사과'; //이 세가지를 하나로 묶어서 표현하고 싶다면 객체를 사용하면 된다.

let fruit = {
  name: 'apple',
  color: 'red',
  display: '빨간 사과',
};
console.log(fruit);
console.log(typeof fruit);
console.log(fruit.name);

// reference
//객체 타입은 참조값(메모리 주소, 레퍼런스)가 복사되어 전달.

let a = 1;
let b = a;
console.log(a, b);

let apple = { name: 'apple' }; //heap에 저장된다.
let fruit2 = apple; //apple이 가리키는 주소값을 fruit2에 복사한다.  <== heap에 저장된 주소값을 복사한다.
fruit2.name = 'banana'; //fruit2의 name을 banana로 바꾼다. <== 이유는 같은 주소의 정보를 수정했기 때문에
console.log(apple, fruit2);

const MAX_FRiTS = 10; //상수는 대문자로 쓰는게 관례
