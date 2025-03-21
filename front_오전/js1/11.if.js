//실행 순서를 제어하는 것을 제어문
//조건문, 반복문, 분기문

//조건문
//if문
//if(조건식) {실행문}
//if(조건식) {실행문} else {실행문}
//if(조건식) {실행문} else if(조건식) {실행문} else {실행문}

let fruit = 'orange';
if (fruit === 'apple') {
  console.log('이것은 사과입니다.');
} else if (fruit === 'orange') {
  console.log('이것은 오렌지입니다.');
} else {
  console.log('이것은 둘다가 아닙니다.');
}

if ('tt') {
  console.log('true');
} else {
  console.log('false');
}

//삼항 연산자
//조건식 ? 참일때 실행문 : 거짓일때 실행문
'apple' === 'apple' ? console.log('true') : console.log('false');

//입력된 숫자가 짝수이면 짝, 홀수이면 홀을 출력하는 javascript 코드를 작성하시오.
let num = 7;
num % 2 === 0 ? console.log('짝수') : console.log('홀수');
