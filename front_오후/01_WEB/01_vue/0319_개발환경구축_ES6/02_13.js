let obj = { result: 0 };

//JavaScript의 this 바인딩 문제
//일반 함수는 호출될 때 this가 전역 객체를 참조함.
// obj.add = function (x, y) {
//   function inner() {
//     this.result = x + y;
//   }
//   inner();
// };
// obj.add(3, 4);
// console.log(obj);
// console.log(obj.result);
// console.log(result);

//해결 방법 :
//1. 화살표 함수
// 화살표 함수 예제
// obj.add = function (x, y) {
//   const inner = () => {
//     this.result = x + y;
//   };
//   inner();
// };
// obj.add(3, 4);
// console.log(obj);
// console.log(obj.result);
// console.log(result); // 전역으로 변수가 선언되지 않음

//2. bind()
//힘수의 this값을 특정 객체에 영구적으로 바인딩한 새로운 함수 반환
//첫번째 인자로 전달된 객체가 this로 설정됨
obj.add = function (x, y) {
  function inner() {
    this.result = x + y;
  }
  inner.bind(this)();
};
obj.add(3, 4);
console.log(obj);
console.log(obj.result);
console.log(result);
