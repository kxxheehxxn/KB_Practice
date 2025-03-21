let arr = new Array(3); // 이거 가능한데 출력은 [ <3 empty items> ]
console.log(arr);

arr = Array.of(1, 2, 3, 4, 5);
console.log(arr);

arr = [1, 2, 3];
console.log(arr);

// const arr2 = arr; //이러면 주소참조가 arr2를 변경하면 arr도 바뀜

let arr2 = Array.from('test test');
console.log(arr2);

arr2 = Array.from({
  0: '안녕',
  1: '하세요',
  length: 2,
});

console.log(arr2);
