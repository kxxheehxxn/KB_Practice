let apple = {
  name: '사과',
  '한글 키': '한글 사과 이름',
  'name-test': '사과1', //동적으로 키 값에 접근할때 사용
  0: 100,
};

console.log(apple.name);
console.log(apple['name-test']);
console.log(apple[0]);

let nums = ['11', 'test', 'sample'];
console.log(nums[1]);

const obj = {
  name: '개냥이',
  age: 2,
};
console.log(obj.age);
console.log(obj.name);

function getValue(obj, key) {
  return obj[key];
}

console.log(getValue(obj, 'name'));

function addKey(object, key, value) {
  object[key] = value;
}
addKey(obj, 'feel', '행복해');
console.log(obj);

//key값과 value가 같으면 짧게 줄일 수 있다.

const x = 0;
const y = 0;
const coord = { x, y };
console.log(coord);

function makeObj(name, age) {
  return { name: name, age: age };
}

const person = makeObj('sony', 3);
console.log(person);

const banana = {
  name: '바나나',
  display: function () {
    console.log('노랑색 바나나');
    console.log(this);
  },
  display2: () => {
    console.log(this);
  },
};

console.log(banana);
