const number = 123;

number.toString();
console.log(typeof number.toString());

const txt = 'test';
txt.length;
console.log(txt);
console.log(txt.length);

//number타입에서 사용 가능
let num2 = 1231231241.3123;
console.log(num2.toFixed());
console.log(num2.toString());
console.log(num2.toLocaleString());
console.log(num2.toPrecision(10));

//Math Math타입에서 사용 가능.
console.log(Math.E); // 자연상수
console.log(Math.PI); //파이
console.log(Math.abs(-10)); //절댓값
console.log(Math.ceil(1.4)); //올림
console.log(Math.floor(1.8)); //내림
console.log(Math.round(1.6)); //반올림
console.log(Math.random); //랜덤수

//string 타입에서 사용하는 내장 객체
let str = '안녕하세요';
console.log(str);
console.log(str.length); //길이
console.log(str[0]); // 0번째 인덱스
console.log(str.charAt(0)); // 0번째 인덱스 (함수)
console.log(str.indexOf('안')); //해당 글자가 있는지
console.log(str.lastIndexOf('안')); //마지막에 있는
console.log(str.includes('영')); // 글자를 포함하는지 boolean
console.log(str.startsWith('안')); // 해당 글자로 시작하는지
console.log(str.endsWith('안')); // 해당 글자로 끝나는지
console.log('---', str.slice(5)); // 해당 인덱스 이후 글자 출력
console.log(str.trim()); // 빈칸 삭제
let long = '여러분 반갑습니다. 오늘도 화이팅';
console.log(long.split('.')); // 해당 글자를 기점으로 분할
console.log(long.split('.', 1)); // 해당 글자를 기점으로 해당 숫자만큼에 해당하는 것을 리스트로 분할

console.clear();

console.log(new Date());
console.log(new Date('jun 5, 2025')); //설정도 가능

let now = new Date();
console.log(now.getFullYear()); //년도
console.log(now.getDay()); //요일
console.log(now.getDate()); //날짜
console.log(now.toDateString()); //글자로 바꿔서
console.log(now.toLocaleDateString()); // YYYY. MM. DD
