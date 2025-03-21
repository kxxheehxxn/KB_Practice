// boolean - true or false

let isFree = true;
console.log(isFree);

//값 앞에 !!를 붙이면 boolean값으로 변환된다.
//falshy한 값; false, 0, '', null, undefined, NaN

console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

//truthy한 값; falsy한 값 이외의 값들
console.log(!!1);
console.log(!!-1);
console.log(!!' ');
console.log(!!{}); //{}는 객체이므로 true
console.log(!!Infinity); //infinity는 무한대이므로 true

//null은 비었다를 의미
let test = null;
let test2 = undefined;
console.log(typeof test); //null
console.log(typeof test2); //true
