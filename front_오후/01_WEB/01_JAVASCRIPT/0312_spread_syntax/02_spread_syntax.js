//스프레드 문법
/**
 * 하나로 뭉쳐있는 여러 값들의 집합을 전개해서 개별적인 값 목록으로 만든다.
 * --> 괄호가 지워진다
 *
 */

console.log(`가장 큰값: ${Math.max(10, 30, 20)}`);

let arr = [10, 30, 20];

console.log(arr);
console.log(...arr);

console.log(`가장 큰 값: ${Math.max(...arr)}`);

//베열 여러개 전달
let arr1 = [10, 30, 20];
let arr2 = [100, 300, 200];

console.log(`가장 작은 값: ${Math.min(...arr1, ...arr2)}`);

//일반 값과 혼합해서 사용 가능 ->확장시킨다.
console.log(`가장 작은 값: ${Math.max(...arr1, 5, ...arr2)}`);

//배열 합치기
let arr3 = [...arr1, ...arr2];
console.log(arr3);

//문자열
let str = 'javascript';
console.log(str);
console.log(...str);
