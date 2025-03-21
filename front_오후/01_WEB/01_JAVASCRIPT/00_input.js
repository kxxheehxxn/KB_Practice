const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';
r1.question('값을 입력하세요 : ', (answer) => {
  input = answer;
  console.log(input);
});
