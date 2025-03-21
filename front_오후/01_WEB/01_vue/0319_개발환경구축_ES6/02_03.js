const p1 = { name: 'john', age: 20 }; // 주소값에 대한 상수

//속성 변경은 가능
p1.age = 22;
console.log(p1);
p1 = { name: 'lee', age: 25 };

//객체를 재할당 하는 것은 불가
