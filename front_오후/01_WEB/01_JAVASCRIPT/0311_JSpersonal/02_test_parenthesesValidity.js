const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';
r1.question('값을 입력하세요 : ', (answer) => {
  input = answer;

  function checkBrackets(str) {
    const stack = [];
    const open = ['(', '{', '['];
    const close = [')', '}', ']'];
    if (str.length % 2 !== 0) {
      return false;
    } else {
      for (let i = 0; i < str.length; i++) {
        if (open.includes(str[i])) {
          stack.push(str[i]);
        } else {
          if (open.indexOf(stack[stack.length - 1]) === close.indexOf(str[i])) {
            stack.pop();
          } else {
            return false;
          }
        }
      }
    }
    if (stack.length != 0) {
      return false;
    }
    return true;
  }
  console.log(checkBrackets(input));
  r1.close();
});

//checkBrackets("(()){}[]") => true
//checkBrackets("({)}") => false
//checkBrackets("((()") => false
