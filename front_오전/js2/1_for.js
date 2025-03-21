for (let i = 0; i < 5; i++) {
  console.log(i);
  for (let j = 0; j < 5; j++) {
    console.log('--', j);
  }
}

for (let a = 0; a < 20; a++) {
  if (a === 10) {
    console.log('10입니다');
    continue;
  }
  console.log(a);
}

let fruits = ['사과', '바나나', '체리'];
console.log(fruits);
for (let i = 0; i < fruits.length; i++) {
  //길이는 배열 내장함수
  console.log('-----');
  console.log(fruits[i]);
}

fruits.forEach((fruit, i, arr) => {
  console.log(fruit);
  console.log(i);
  console.log(arr);
  console.log('-----');
});

console.clear();

for (let fruit of fruits) {
  console.log(fruit);
}

let members = {
  manager: '한식이',
  designer: '두식이',
  devel: '세식이',
};

for (let m in members) {
  console.log(members[m]);
}
console.log(members.manager);
