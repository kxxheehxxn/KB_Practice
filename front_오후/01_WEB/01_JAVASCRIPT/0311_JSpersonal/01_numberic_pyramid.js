const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';
r1.question('값을 입력하세요 : ', (answer) => {
  input = parseInt(answer);
  console.log(input);

  for (let i = 1; i <= input; i++) {
    let result = '';
    for (let j = 1; j <= input - i; j++) {
      result += ' ';
    }
    for (let k = 1; k <= i; k++) {
      result += i + ' ';
    }
    console.log(result);
  }

  r1.close();
});

// console.log(input);
// console.log(input);

//출력:
//   1
//  2 2
// 3 3 3
//4 4 4 4
