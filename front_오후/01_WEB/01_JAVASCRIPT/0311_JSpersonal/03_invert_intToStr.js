const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';
r1.question('값을 입력하세요 : ', (answer) => {
  function numberToKorean(num) {
    const units = ['', '십', '백', '천', '만'];
    const numbers = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];

    let result = '';
    let strNum = num.toString();
    let length = strNum.length;

    for (let i = 0; i < length; i++) {
      let digit = parseInt(strNum[i]);
      if (digit !== 0) {
        if (!(digit === 1 && length - i - 1 > 0)) {
          result += numbers[digit];
        }
        result += units[length - i - 1];
      }
    }

    return result;
  }
  input = answer;
  let result = numberToKorean(input);
  console.log(result);
  r1.close();
});

//예시:
//numberToKorean(1234) => "일천이백삼십사"
//numberToKorean(5000) => "오천"
//numberToKorean(10200) => "일만이백"

//조건:
//- 1 ~ 99999 사이의 숫자 처리  (아닐경우 범위를 벗어난 숫자입니다. (1~99999) 출력)
//- 0은 표시하지 않음 (삼천공백십 -> 삼천십)
//- 단위: 만, 천, 백, 십
//- 숫자: 일, 이, 삼, 사, 오, 육, 칠, 팔, 구
