//단항 연산자
// +(양) -(음) !(부정) ++(증가) --(감소)

let a = 5;
console.log(+a); //5
console.log(-a); //-5

let isFree = true;
console.log(!isFree); //false

//숫자가 아닌 타입들을 숫자로 변환하면
//어떤 값이 나오는지 확인할 수 있음
console.clear();

console.log(+false);
console.log(+true);
console.log(+null);
console.log(+undefined);
console.log(+'text');
console.log(!!'text');

//할당연산자
let a3 = 1;
a3 += 1;
console.log(a3); //2
a3 -= 1;
console.log(a3); //1
a3 *= 2;
console.log(a3); //2
a3 /= 2;
console.log(a3); //1
a3 %= 2;
console.log(a3); //1
a3 **= 2;
console.log(a3); //1

// a3 = 1;
//증가 & 감소 연산자

a3++;
console.log(a3); //2
a3--;
console.log(a3); //1
